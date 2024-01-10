terraform {
  required_providers {
    aws = {
        version = ">=4.9.0"
        source = "hashicorp/aws"  
    }
  }
}

provider "aws" {    
  profile = "github"
  region = "eu-central-1"
}