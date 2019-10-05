terraform {
  backend "s3" {
    bucket = "meemaw-terraform-state"
    key    = "personal-website"
    region = "us-east-1"
  }
}
