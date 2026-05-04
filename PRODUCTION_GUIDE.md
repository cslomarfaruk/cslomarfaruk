# 🚀 Production Deployment Guide: Detect Vehicle
**Target Server:** Ubuntu Server (Root Access)
**Domain:** `detect-vehicle.devcsl.tech`
**Location:** `/var/www/personal-projects/`

Follow these steps exactly to make your server live.

---

### 0. First-Time GitHub Setup on Server
Before cloning, configure your identity and authentication:
```bash
git config --global user.email "cslomarfaruk@gmail.com"
git config --global user.name "cslomarfaruk"

# To clone a private repo or push changes, use a Personal Access Token (PAT):
# 1. Go to GitHub > Settings > Developer Settings > Personal Access Tokens > Tokens (classic)
# 2. Generate a new token with 'repo' permissions
# 3. Use this token instead of your password when prompted during 'git clone'
```

### 1. Initial Server Preparation
Login as root and run:
```bash
mkdir -p /var/www/personal-projects
cd /var/www/personal-projects
git clone https://github.com/cslomarfaruk/vehicle-detection-web.git
cd vehicle-detection-web
chmod +x deploy_ubuntu.sh update.sh
```

### 2. Automated System Setup
Run the main deployment script to install Python, Node, FFMPEG, and all libraries:
```bash
./deploy_ubuntu.sh
```

### 3. Environment Configuration
Create your backend environment file and add your **Cloudflare Secret Key**:
```bash
nano backend/.env
```
*Paste your keys there and save (Ctrl+O, Enter, Ctrl+X).*

### 4. Nginx & Domain Setup
Install Nginx and create the site configuration:
```bash
apt install nginx -y
nano /etc/nginx/sites-available/detect-vehicle
```
**Paste this configuration:**
```nginx
server {
    listen 80;
    server_name detect-vehicle.devcsl.tech;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header CF-Connecting-IP $http_cf_connecting_ip;
        
        # Increase timeouts for long video processing
        proxy_read_timeout 300s;
        proxy_connect_timeout 300s;
        
        # Allow large uploads for video
        client_max_body_size 100M;
    }

    # WebSocket for Live Monitor
    location /ws {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```
**Enable the site:**
```bash
ln -s /etc/nginx/sites-available/detect-vehicle /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx
```

### 5. SSL Certificate (HTTPS)
Secure your site with Let's Encrypt:
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d detect-vehicle.devcsl.tech
```

### 6. Process Management (Keep apps running)
We will use **PM2** to manage both the Python Backend and Next.js Frontend.
```bash
npm install -g pm2
pm2 install pm2-logrotate

# Start Backend
cd /var/www/personal-projects/vehicle-detection-web/backend
pm2 start "venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:8000" --name "detect-backend"

# Start Frontend
cd ../frontend
pm2 start "npm run start" --name "detect-frontend"

pm2 save
pm2 startup
```

---

### 🔄 How to Update the App (Manual Update)
Whenever you push new code to GitHub, simply run this command from the project root:
```bash
./update.sh
```
This script will pull the code, install new dependencies, rebuild the frontend, and restart the services automatically.
