# GitHub Pages Deployment - Galileo Research Tool 🚀

Vollständige Anleitung für das Deployment auf GitHub Pages.

## 🎯 Übersicht

Die Website wird automatisch auf GitHub Pages deployed, sobald du Änderungen zum `main` oder `master` Branch pushst.

**Live URL nach Deployment:**
- Mit Custom Domain: `https://your-domain.com`
- Ohne Custom Domain: `https://username.github.io/VibeCodingTest`

## ⚙️ Setup (Einmalig erforderlich)

### 1. GitHub Pages aktivieren

1. Gehe zu deinem GitHub Repository
2. Klicke auf **Settings** → **Pages**
3. Bei "Source" wähle: **GitHub Actions**
4. Speichern

Das war's! Der Workflow ist bereits konfiguriert.

### 2. Repository Secrets (Optional für private Repos)

Für öffentliche Repositories sind keine zusätzlichen Secrets erforderlich.

## 🚀 Deployment

### Automatisches Deployment

Jeder Push zum `main` oder `master` Branch triggert automatisch ein Deployment:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Der GitHub Actions Workflow:
1. ✅ Checkt den Code aus
2. ✅ Installiert Dependencies
3. ✅ Baut die Next.js App (static export)
4. ✅ Deployed zu GitHub Pages

**Deployment-Status:** Siehe "Actions" Tab in deinem Repository

### Manuelles Deployment

Du kannst das Deployment auch manuell triggern:

1. Gehe zu **Actions** in deinem Repository
2. Wähle den "Deploy to GitHub Pages" Workflow
3. Klicke auf **Run workflow**

## 🌐 Custom Domain einrichten

### Option A: Apex Domain (z.B. galileo-research.com)

1. **GitHub Settings:**
   - Repository → Settings → Pages
   - Custom domain: `galileo-research.com`
   - "Enforce HTTPS" aktivieren

2. **DNS bei deinem Domain-Provider:**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153
   ```

3. **WWW Subdomain (optional):**
   ```
   Type: CNAME
   Name: www
   Value: username.github.io
   ```

### Option B: Subdomain (z.B. research.galileo.com)

1. **GitHub Settings:**
   - Repository → Settings → Pages
   - Custom domain: `research.galileo.com`

2. **DNS:**
   ```
   Type: CNAME
   Name: research
   Value: username.github.io
   ```

### Wichtig: CNAME Datei

Erstelle eine Datei `public/CNAME` mit deiner Domain:

```bash
echo "galileo-research.com" > public/CNAME
```

Oder für Subdomain:
```bash
echo "research.galileo.com" > public/CNAME
```

Diese Datei wird automatisch ins `out/` Verzeichnis kopiert.

## 📁 Base Path konfigurieren

### Wenn du auf `username.github.io/VibeCodingTest` deployst:

Uncomment die basePath Zeile in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/VibeCodingTest', // ← Uncomment diese Zeile
}

module.exports = nextConfig
```

### Wenn du eine Custom Domain verwendest:

Lass den basePath auskommentiert (Standard).

## 🔧 Workflow-Konfiguration

Der Workflow liegt in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

# ... automatisches Build & Deploy
```

### Trigger:
- **Automatisch:** Bei jedem Push zu `main` oder `master`
- **Manuell:** Via "Run workflow" Button in GitHub Actions

### Build-Prozess:
1. Node.js 18 Setup
2. `npm ci` (Clean Install)
3. `npm run build` (Next.js Static Export)
4. Deploy `out/` Folder zu GitHub Pages

## 🐛 Troubleshooting

### Build schlägt fehl

**Problem:** `Error: Failed to build`

**Lösung:**
```bash
# Teste den Build lokal
npm run build

# Überprüfe die Ausgabe in out/
ls -la out/
```

### 404 beim Öffnen der Seite

**Problem:** Seite zeigt 404 Not Found

**Lösungen:**

1. **Warte 1-2 Minuten:** GitHub Pages Cache braucht Zeit
2. **Überprüfe Branch:** Stelle sicher, dass du auf `main` oder `master` gepusht hast
3. **Überprüfe Pages Settings:** Source muss "GitHub Actions" sein
4. **Base Path:** Falls auf `username.github.io/repo`, setze basePath in `next.config.js`

### Assets laden nicht

**Problem:** CSS/JS laden nicht

**Lösung:**
- Überprüfe basePath in `next.config.js`
- Stelle sicher, dass `.nojekyll` Datei existiert (in `public/`)
- Diese wird automatisch zu `out/` kopiert

### Custom Domain funktioniert nicht

**Problem:** Domain leitet nicht zu GitHub Pages

**Lösungen:**

1. **DNS Propagation:** Kann 24-48 Stunden dauern
   - Teste mit: `dig galileo-research.com`

2. **CNAME Datei:** Erstelle `public/CNAME` mit deiner Domain

3. **HTTPS Zertifikat:**
   - Automatisch von GitHub bereitgestellt
   - Kann bis zu 24h dauern
   - "Enforce HTTPS" erst danach aktivieren

## 📊 Build-Ausgabe

Nach erfolgreichem Build solltest du sehen:

```
Route (app)                    Size    First Load JS
┌ ○ /                         2.58 kB      108 kB
├ ○ /about                    2.49 kB      108 kB
└ ○ /research                11.7 kB      117 kB

✓ Static Export successful
```

Der `out/` Folder enthält alle statischen Dateien für GitHub Pages.

## 🔒 Sicherheit

### HTTPS

- Automatisch aktiviert via GitHub Pages
- Kostenlose SSL-Zertifikate
- Für Custom Domains: Nach DNS-Propagation verfügbar

### Permissions

Der Workflow benötigt folgende Permissions:
- `contents: read` - Code lesen
- `pages: write` - GitHub Pages schreiben
- `id-token: write` - OIDC Token für Deployment

Diese sind bereits im Workflow konfiguriert.

## 📈 Nach dem Deployment

### Verifizierung

1. **Öffne die URL:**
   - `https://username.github.io/VibeCodingTest`
   - oder deine Custom Domain

2. **Teste alle Seiten:**
   - `/` - Landing Page
   - `/research` - Research Tool
   - `/about` - About Seite

3. **Überprüfe Mobile:**
   - Responsive Design testen
   - Chrome DevTools Mobile Emulation

### Monitoring

- **GitHub Actions:** Siehe alle Deployments unter "Actions" Tab
- **Status Badge:** Füge zu README hinzu:
  ```markdown
  ![Deploy](https://github.com/username/repo/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
  ```

### Updates

```bash
# Änderungen machen
git add .
git commit -m "Update: Feature XYZ"
git push origin main

# Deployment erfolgt automatisch
# Überprüfe Status unter Actions Tab
```

## 🎨 Lokale Vorschau des Static Exports

Teste den Static Export lokal:

```bash
# Build erstellen
npm run build

# Serve den out/ Folder
npx serve out

# Öffne http://localhost:3000
```

## 📝 Checkliste für erstes Deployment

- [ ] GitHub Pages in Settings aktiviert (Source: GitHub Actions)
- [ ] `.github/workflows/deploy.yml` existiert
- [ ] `next.config.js` hat `output: 'export'`
- [ ] `.nojekyll` in `public/` vorhanden
- [ ] Base Path konfiguriert (falls nötig)
- [ ] Code zu `main` oder `master` gepusht
- [ ] Actions Tab zeigt erfolgreichen Workflow
- [ ] Website unter URL erreichbar
- [ ] (Optional) Custom Domain konfiguriert
- [ ] (Optional) HTTPS aktiviert

## 🎉 Fertig!

Deine Website läuft jetzt auf GitHub Pages!

**URL:** `https://username.github.io/VibeCodingTest`

Bei Problemen siehe Troubleshooting-Sektion oder GitHub Actions Logs.

---

**Weitere Deployment-Optionen:** Siehe [DEPLOYMENT.md](./DEPLOYMENT.md) für Vercel, Netlify, etc.
