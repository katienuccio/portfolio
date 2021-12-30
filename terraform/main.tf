terraform {
  required_version = ">=0.14.9"

  required_providers {
    aws = {
      source ="hashicorp/aws"
      version = "~> 3.27"
    }
  }

  backend "s3" {}
}

provider "aws" {
  region = "us-east-1"
  profile = "personal"
}
