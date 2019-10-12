provider "aws" {
  region = var.region
}

locals {
  site_zone          = "snuderl.si"
  site_name          = "matej.${local.site_zone}"
  www_site_name      = "www.${local.site_name}"
  certificate_domain = local.www_site_name
  s3_origin_id       = "S3-${local.site_name}"
}

data "aws_route53_zone" "site_zone" {
  name = local.site_zone
}

data "aws_acm_certificate" "cert" {
  domain   = local.certificate_domain
  statuses = ["ISSUED"]
  types    = ["AMAZON_ISSUED"]
}

resource "aws_s3_bucket" "site" {
  bucket = local.site_name
  acl    = "public-read"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${local.site_name}/*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    Environment = "production"
    Project = "personal-website"
  }
}

resource "aws_cloudfront_distribution" "site_distribution" {
  origin {
    domain_name = aws_s3_bucket.site.bucket_domain_name
    origin_id = local.s3_origin_id
  }

  enabled = true
  aliases = [local.site_name, local.www_site_name]
  default_root_object = "index.html"
  is_ipv6_enabled = true
  wait_for_deployment = false
  comment = "Managed by Terraform - https://github.com/Meemaw/personal-website/"


  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400
    viewer_protocol_policy = "redirect-to-https"
  }

  custom_error_response {
    error_caching_min_ttl = "0"
    error_code = "400"
    response_code = "200"
    response_page_path = "/index.html"
  }
  custom_error_response {
    error_caching_min_ttl = "0"
    error_code = "404"
    response_code = "200"
    response_page_path = "/index.html"
  }
  custom_error_response {
    error_caching_min_ttl = "0"
    error_code = "403"
    response_code = "200"
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = "production"
    Project = "personal-website"
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.cert.arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}

resource "aws_route53_record" "cloudfront_site_target" {
  zone_id = data.aws_route53_zone.site_zone.zone_id
  name = local.site_name
  type = "A"

  alias {
    zone_id = aws_cloudfront_distribution.site_distribution.hosted_zone_id
    name = aws_cloudfront_distribution.site_distribution.domain_name
    evaluate_target_health = false
  }
}
