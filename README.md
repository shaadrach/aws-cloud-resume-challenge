# ☁️ Cloud Resume Challenge -- Shadrach Agambila

![AWS](https://img.shields.io/badge/Cloud-AWS-orange)
![Serverless](https://img.shields.io/badge/Architecture-Serverless-blue)
![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-green)
![Infrastructure](https://img.shields.io/badge/IaC-Terraform-purple)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

🚀 **Live Website:**\
https://resume.shadrach.cloud

📊 **Visitor Counter:**\
![Visitor
Count](https://img.shields.io/endpoint?url=https://resume.shadrach.cloud/api/visitor-count)

------------------------------------------------------------------------

# 📌 Project Overview

This repository contains my implementation of the **Cloud Resume
Challenge**, a hands-on project designed to demonstrate real-world
**cloud engineering, DevOps, and serverless architecture skills**.

The project deploys a **fully serverless resume website** on AWS with a
**visitor counter backed by a cloud database**, automated deployments,
and global CDN distribution.

This project showcases skills relevant to **Cloud Engineer, DevOps
Engineer, and AWS Solutions Architect roles.**

------------------------------------------------------------------------

# 🌐 Live Demo

👉 https://resume.shadrach.cloud

The website includes: - Interactive resume - Dynamic visitor counter -
Global CDN delivery - Secure HTTPS connection

------------------------------------------------------------------------

# 🏗 Architecture

    User Browser
         │
         ▼
    CloudFront (CDN)
         │
         ▼
    S3 Bucket (Static Website Hosting)
         │
         ▼
    JavaScript API Call
         │
         ▼
    API Gateway
         │
         ▼
    AWS Lambda
         │
         ▼
    DynamoDB (Visitor Counter Database)

------------------------------------------------------------------------

# ⚙️ AWS Services Used

  Service                   Purpose
  ------------------------- -------------------------------------
  Amazon S3                 Static website hosting
  Amazon CloudFront         Global CDN delivery
  AWS Lambda                Serverless backend logic
  API Gateway               REST API for visitor counter
  DynamoDB                  NoSQL database for visitor tracking
  Route 53                  DNS management
  AWS Certificate Manager   SSL/TLS certificate for HTTPS
  CloudWatch                Logging and monitoring

------------------------------------------------------------------------

# 🧠 Key Features

✔ Static resume hosted on AWS S3\
✔ Global content delivery with CloudFront\
✔ HTTPS secured using AWS Certificate Manager\
✔ Serverless visitor counter\
✔ DynamoDB database integration\
✔ REST API using API Gateway + Lambda\
✔ Automated deployments using GitHub Actions

------------------------------------------------------------------------

# 🚀 CI/CD Pipeline

Developer Push → GitHub Repository\
↓\
GitHub Actions Pipeline\
↓\
Upload Files to S3\
↓\
CloudFront Cache Invalidation\
↓\
Updated Website Deployed Globally

------------------------------------------------------------------------

# 📂 Repository Structure

aws-cloud-resume-challenge
│
├── .github
│   └── workflows
│       ├── back-end-terraform-cicd.yml
│       └── front-end-cicd.yml
│
├── cloud-resume-backend-sam
│   ├── .aws-sam
│   ├── src
│   ├── samconfig.toml
│   └── template.yaml
│
├── cloud-resume-backend-terraform
│   ├── .terraform
│   ├── .gitignore
│   ├── .terraform.lock.hcl
│   ├── lambda_function.py
│   ├── lambda_function.zip
│   ├── main.tf
│   ├── outputs.tf
│   ├── terraform.tfstate
│   └── variables.tf
│
├── Website
│   ├── assets
│   ├── images
│   ├── .gitignore
│   ├── elements.html
│   ├── generic.html
│   ├── index.html
│   ├── index.js
│   ├── LambdaViewCountFunction.py
│   ├── LICENSE.txt
│   ├── README.txt
│   └── style.css
│
└── README.md
------------------------------------------------------------------------

# 🧩 Technical Skills Demonstrated

### Cloud Engineering

-   AWS Serverless Architecture
-   CDN Distribution
-   DNS Management
-   Secure HTTPS hosting

### DevOps

-   CI/CD pipelines
-   GitHub Actions
-   Automated deployments

### Backend Development

-   Serverless APIs
-   Lambda functions
-   DynamoDB integration

------------------------------------------------------------------------

# 📈 Future Improvements

-   Add Terraform infrastructure automation
-   Add automated Lambda tests
-   Implement CloudWatch dashboards
-   Improve monitoring and security

------------------------------------------------------------------------

# 👨‍💻 Author

**Shadrach Agambila**\
AWS Certified Solutions Architect -- Associate

🌐 Website\
https://resume.shadrach.cloud


