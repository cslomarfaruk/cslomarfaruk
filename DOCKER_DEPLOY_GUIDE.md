# 🐳 Docker + Traefik Deployment Guide
**Project:** Detect Vehicle AI
**Domain:** `detect-vehicle.devcsl.tech`

Since you are using Traefik, this is the most professional and "independent" way to run your app without touching your other Docker containers.

---

### 1. Preparation
1. **Stop Nginx** (if it's running): `systemctl stop nginx`
2. **Identify your Traefik Network**: 
   Run `docker network ls` and find the name of the network Traefik is using (usually `web`, `proxy`, or `traefik_default`).
3. **Update `docker-compose.yml`**:
   Open the file and replace `web` (at the bottom and in the services) with your actual Traefik network name.

### 2. Environment Files
Ensure you have your environment files in the correct places:
- `backend/.env` (Contains your Cloudflare Secret Key)
- `frontend/.env.local` (Contains your Cloudflare Site Key)

### 3. Deploy
From the root directory `/var/www/personal-projects/vehicle-detection-web`, run:
```bash
docker-compose up -d --build
```

### 4. Updating the App
Whenever you push new code to GitHub and want to update the live site:
```bash
git pull origin main
docker-compose up -d --build
```
Docker will only rebuild what has changed and restart the containers—Traefik will handle the zero-downtime routing automatically.

---

### 🛡️ Why this is better:
1. **Zero Conflict**: This app runs in its own "bubble." It won't care about your other Docker apps.
2. **No Nginx Needed**: Traefik handles the SSL and the domain routing.
3. **Cleaner Logs**: You can see exactly what's happening with `docker-compose logs -f`.
