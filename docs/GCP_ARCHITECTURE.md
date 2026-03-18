# Google Cloud Platform (GCP) Infrastructure

Lindo Hogar Online is fully integrated with Google Cloud services, managed entirely via the terminal (Google Cloud Shell or local `gcloud` CLI) for Infrastructure as Code (IaC) and deployments.

## Core GCP Architecture

1. **Frontend Hosting (Next.js 15 App Router)**
   - **Service:** Google Cloud Run
   - **Why:** Cloud Run natively supports Docker containers, making it the perfect serverless platform for Next.js SSR and API routes. It scales to zero and scales out instantly during high traffic.
   - **Deployment:** Handled via Google Cloud Build (CI/CD) and Docker.

2. **Database & Data Storage**
   - **Catalog & Orders:** Cloud SQL (PostgreSQL) or Firestore (NoSQL). For a retail catalog requiring complex relational queries (orders, variants, users), **Cloud SQL for PostgreSQL** is recommended.
   - **Product Media:** Google Cloud Storage (GCS) buckets for all images, served via Cloud CDN for ultra-fast global delivery.

3. **Authentication & User Sessions**
   - **Service:** Firebase Authentication (Google Identity Platform)
   - **Why:** Seamless Google sign-in integration, secure session management, and JWT validation.

4. **Analytics & Logging**
   - **Logs:** Cloud Logging
   - **Traffic & Events:** Google Analytics 4 (GA4) + Google Tag Manager.

## Terminal Cloud Management (Cloud Shell)

To deploy and manage this infrastructure, we use the `gcloud` CLI. You can run these commands directly in [Google Cloud Shell](https://shell.cloud.google.com/).

### Initialization Script

A `gcp-setup.sh` script is provided in the root directory to automatically provision the required resources:

1. Enable necessary APIs (Cloud Run, Cloud Build, Cloud SQL).
2. Create the Cloud Storage buckets.
3. Set up the IAM service accounts.
