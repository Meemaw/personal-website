provider "aws" {
  region = var.region
}

locals {
  site_zone = "snuderl.si"
  site_name = "www.matej.${local.site_zone}"
}

data "aws_route53_zone" "site_zone" {
  name = local.site_zone
}

data "aws_acm_certificate" "cert" {
  domain   = local.site_name
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
      "Resource": "arn:aws:s3:::${local.bucket_name}/*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_cloudfront_distribution" "site_distribution" {
  origin {
    domain_name = aws_s3_bucket.site.bucket_domain_name
    origin_id = "S3-${local.site_name}"
  }

  enabled = true
  aliases = [local.site_name, "www.${local.site_name}"]
  default_root_object = "index.html"
  is_ipv6_enabled = true
  wait_for_deployment = false

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "S3-${local.site_name}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 86400
    max_ttl = 31536000
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

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.cert.arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}

resource "aws_route53_record" "site" {
  zone_id = data.aws_route53_zone.site_zone.zone_id
  name = local.site_name
  type = "A"

  alias {
    zone_id = aws_cloudfront_distribution.site_distribution.hosted_zone_id
    name = aws_cloudfront_distribution.site_distribution.domain_name
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_site" {
  zone_id = data.aws_route53_zone.site_zone.zone_id
  name = "www.${aws_route53_record.site.name}"
  type = "CNAME"
  records = [aws_route53_record.site.name]
  ttl = 300
}

