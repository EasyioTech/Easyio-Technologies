# Deployment & Updates Guide

This document outlines the standard operating procedure for deploying updates to the Easyio Technologies website running on the production VPS.

## 1. Pushing Changes to GitHub

After making local modifications to the codebase (like your recent mobile UI updates), commit and push your changes to the `main` branch of the GitHub repository. Note that on Windows PowerShell, command chaining with `&&` may cause issues, so process them sequentially:

```powershell
git add .
git commit -m "feat: your descriptive commit message here"
git push origin main
```

## 2. Deploying on the VPS

To deploy the new code to the production server, log into your VPS using your SSH alias `ssh startup` or run remote commands directly. We have configured the environment to use a multi-stage Docker build that generates a lightweight standalone Next.js image.

### Recommended Automated Deployment Command

You can run this single command from your local machine to automatically update the VPS:

```powershell
ssh startup "cd /docker/easyio-technologies && git pull origin main && docker compose build && docker compose up -d"
```

*Note: Based on earlier investigation, the project path on the VPS is `/docker/easyio-technologies`.*

### Manual Deployment Steps via SSH

1. **Connect to the VPS:**
   ```powershell
   ssh startup
   ```

2. **Navigate to the project directory:**
   ```bash
   cd /docker/easyio-technologies
   ```

3. **Pull the latest changes from the remote repository:**
   ```bash
   git pull origin main
   ```

4. **Database Migrations (Optional)**
   If you made structural changes to the database schema (`schema.ts`), you need to push schema updates to the production database:
   ```bash
   docker compose exec -u root -e DATABASE_URL=postgresql://easyio_user:easyio_password@db:5432/easyio_db app npx drizzle-kit push
   ```

5. **Rebuild the Production Docker Image:**
   ```bash
   docker compose build
   ```

6. **Restart the Containers and Apply Changes:**
   ```bash
   docker compose up -d
   ```

## 3. Monitoring & Troubleshooting

To monitor the logs of the running application and ensure it started successfully:

```bash
docker compose logs -f app
```

If you ever encounter permission issues or file lock errors during Docker builds (common when using standalone build modes), a clean wipe of the containers might be needed:

```bash
docker compose down
docker compose up -d --build
```
