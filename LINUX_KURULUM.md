# 🏛️ Hayat Sigortası - Linux Kurulum Kılavuzu

## 🚀 Hızlı Kurulum (Tek Komut)

```bash
# Projeyi Linux'a kopyala
scp -r viennalife-finansal-danışman-akademisi/ kullanici@sunucu:/home/kullanici/

# Sunucuya bağlan
ssh kullanici@sunucu

# Kurulum scriptini çalıştır
cd /home/kullanici/viennalife-finansal-danışman-akademisi
sudo bash setup.sh
```

## 📋 Gereksinimler (Otomatik Kurulur)

| Yazılım | Versiyon |
|---------|----------|
| Ubuntu/Debian | 20.04+ |
| PHP | 8.2+ |
| Node.js | 20 LTS |
| Composer | Latest |
| SQLite | 3.x |

## 🌐 Portlar

| Servis | Port | URL |
|--------|------|-----|
| Frontend | 3006 | http://localhost:3006 |
| Backend | 8082 | http://localhost:8082 |

## 👤 Admin Girişi

| Alan | Değer |
|------|-------|
| E-posta | kadir@kadir.com |
| Şifre | Sam55sam |

## 📋 Servis Komutları

```bash
# Durum kontrolü
sudo systemctl status hayat-backend hayat-frontend

# Yeniden başlat
sudo systemctl restart hayat-backend hayat-frontend

# Durdur
sudo systemctl stop hayat-backend hayat-frontend

# Logları görüntüle
sudo journalctl -u hayat-backend -f
sudo journalctl -u hayat-frontend -f
```

## 🔧 Manuel Kurulum (Adım Adım)

### 1. Bağımlılıkları Kur
```bash
# PHP 8.2
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
sudo apt install php8.2 php8.2-cli php8.2-common php8.2-curl php8.2-mbstring php8.2-xml php8.2-zip php8.2-sqlite3

# Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs
```

### 2. Backend Kurulumu
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate:fresh --seed --seeder=AdminSeeder
```

### 3. Frontend Kurulumu
```bash
cd ..
npm install
```

### 4. Çalıştır
```bash
# Terminal 1 - Backend
cd backend && php artisan serve --host=0.0.0.0 --port=8082

# Terminal 2 - Frontend
npm run dev -- --port 3006 --host 0.0.0.0
```

## 🗑️ Kaldırma

```bash
sudo bash uninstall.sh
```

## 🔥 Firewall Ayarları

```bash
sudo ufw allow 3006/tcp
sudo ufw allow 8082/tcp
sudo ufw reload
```

## 🐛 Sorun Giderme

### Backend çalışmıyor
```bash
cd backend
php artisan config:clear
php artisan cache:clear
sudo systemctl restart hayat-backend
```

### Frontend çalışmıyor
```bash
rm -rf node_modules
npm install
sudo systemctl restart hayat-frontend
```

### Veritabanı hatası
```bash
cd backend
rm database/database.sqlite
touch database/database.sqlite
php artisan migrate:fresh --seed --seeder=AdminSeeder
```
