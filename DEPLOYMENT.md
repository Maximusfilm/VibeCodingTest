# Deployment Guide - Galileo Research Tool 🚀

Diese Anleitung zeigt dir, wie du das Galileo Research Tool als öffentliche Website deployst.

## 🎯 Vercel Deployment (Empfohlen)

Vercel ist die einfachste und schnellste Methode, um Next.js-Apps zu deployen.

### Option 1: Deploy mit GitHub

1. **Repository auf GitHub pushen**
   ```bash
   git push origin main
   ```

2. **Vercel Account erstellen**
   - Gehe zu [vercel.com](https://vercel.com)
   - Melde dich mit deinem GitHub-Account an

3. **Neues Projekt erstellen**
   - Klicke auf "New Project"
   - Importiere dein GitHub Repository
   - Vercel erkennt automatisch Next.js

4. **Konfiguration**
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. **Deploy**
   - Klicke auf "Deploy"
   - Warte 2-3 Minuten
   - Deine Website ist live! 🎉

### Option 2: Deploy mit Vercel CLI

1. **Vercel CLI installieren**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

## 🌐 Eigene Domain verbinden

1. **Domain in Vercel hinzufügen**
   - Gehe zu deinem Projekt → Settings → Domains
   - Füge deine Domain hinzu (z.B. `galileo-research.de`)

2. **DNS konfigurieren**
   - Bei deinem Domain-Provider DNS-Einträge aktualisieren:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL-Zertifikat**
   - Wird automatisch von Vercel bereitgestellt
   - HTTPS ist nach wenigen Minuten aktiv

## 📊 Andere Deployment-Optionen

### Netlify

1. **Netlify Account erstellen**
   - Gehe zu [netlify.com](https://netlify.com)

2. **Neues Projekt**
   - "Add new site" → "Import an existing project"
   - Verbinde GitHub Repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

### Docker

1. **Dockerfile erstellen**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Image bauen**
   ```bash
   docker build -t galileo-research .
   ```

3. **Container starten**
   ```bash
   docker run -p 3000:3000 galileo-research
   ```

### VPS/Server (Ubuntu)

1. **Server vorbereiten**
   ```bash
   sudo apt update
   sudo apt install nodejs npm nginx
   ```

2. **Repository klonen**
   ```bash
   git clone <your-repo-url>
   cd VibeCodingTest
   npm install
   npm run build
   ```

3. **PM2 für Production**
   ```bash
   npm install -g pm2
   pm2 start npm --name "galileo-research" -- start
   pm2 save
   pm2 startup
   ```

4. **Nginx konfigurieren**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## ⚙️ Umgebungsvariablen

Für Production kannst du Umgebungsvariablen setzen:

**Vercel:**
- Dashboard → Settings → Environment Variables

**Netlify:**
- Site settings → Build & deploy → Environment

**Docker:**
```bash
docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://your-domain.com galileo-research
```

## 🔧 Performance-Optimierungen

1. **Automatische Bildoptimierung**
   - Next.js optimiert Bilder automatisch
   - Nutze das `<Image />` Komponente von Next.js

2. **Caching**
   - Vercel cached statische Assets automatisch
   - ISR (Incremental Static Regeneration) für dynamische Inhalte

3. **Analytics**
   - Vercel Analytics hinzufügen:
   ```bash
   npm install @vercel/analytics
   ```

   In `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'

   // In return:
   <Analytics />
   ```

## 🐛 Troubleshooting

### Build-Fehler

```bash
# Lokalen Build testen
npm run build

# Cache löschen
rm -rf .next
npm install
npm run build
```

### Deployment schlägt fehl

1. Überprüfe `package.json` auf Fehler
2. Stelle sicher, dass alle Dependencies installiert sind
3. Überprüfe Node.js-Version (mind. 18.x)

### Seite lädt nicht

1. Überprüfe Browser-Console auf Fehler
2. Überprüfe Vercel Logs
3. DNS-Propagation kann 24-48h dauern

## 📈 Nach dem Deployment

### Monitoring

- **Vercel Analytics**: Automatisch aktiviert
- **Google Analytics**: Tracking-Code in `app/layout.tsx` hinzufügen
- **Sentry**: Error Monitoring für Production

### Updates

```bash
# Änderungen pushen
git add .
git commit -m "Update: Neue Features"
git push origin main

# Vercel deployt automatisch nach jedem Push
```

### Backups

- Repository ist auf GitHub gesichert
- Vercel speichert alle Deployments
- Alte Versionen können wiederhergestellt werden

## 🎉 Fertig!

Deine Website ist jetzt live unter:
- Vercel: `https://your-project.vercel.app`
- Eigene Domain: `https://your-domain.com`

**Nächste Schritte:**
1. SSL-Zertifikat prüfen (automatisch via Vercel)
2. Google Search Console einrichten
3. Performance mit Lighthouse testen
4. Teile die URL mit deinem Team! 🚀
