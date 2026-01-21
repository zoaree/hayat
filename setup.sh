#!/bin/bash

# ============================================
# Hayat Sigortası - Linux Otomatik Kurulum
# Backend: Port 8082 | Frontend: Port 3006
# Sistem açılışında otomatik başlatma
# ============================================

set -e  # Hata olursa dur

# Renkler
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "================================================"
echo "    🏛️  Hayat Sigortası Kurulum Scripti"
echo "    Backend: 8082 | Frontend: 3006"
echo "================================================"
echo -e "${NC}"

# Root kontrolü
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Bu scripti root olarak çalıştırın: sudo bash setup.sh${NC}"
    exit 1
fi

# Mevcut kullanıcıyı al (sudo ile çalıştırıldığında)
REAL_USER=${SUDO_USER:-$USER}
INSTALL_DIR=$(pwd)

echo -e "${YELLOW}📂 Kurulum dizini: $INSTALL_DIR${NC}"
echo -e "${YELLOW}👤 Kullanıcı: $REAL_USER${NC}"
echo ""

# ============================================
# 1. Sistem Güncellemesi
# ============================================
echo -e "${GREEN}📦 [1/7] Sistem güncelleniyor...${NC}"
apt update -y
apt upgrade -y

# ============================================
# 2. Temel Bağımlılıklar
# ============================================
echo -e "${GREEN}📦 [2/7] Temel bağımlılıklar yükleniyor...${NC}"
apt install -y curl wget git unzip software-properties-common

# ============================================
# 3. PHP 8.2+ Kurulumu
# ============================================
echo -e "${GREEN}🐘 [3/7] PHP 8.2 kurulumu...${NC}"
add-apt-repository ppa:ondrej/php -y
apt update -y
apt install -y php8.2 php8.2-cli php8.2-common php8.2-curl php8.2-mbstring \
    php8.2-xml php8.2-zip php8.2-sqlite3 php8.2-bcmath php8.2-tokenizer

# Composer kurulumu
if ! command -v composer &> /dev/null; then
    echo -e "${GREEN}📦 Composer kurulumu...${NC}"
    curl -sS https://getcomposer.org/installer | php
    mv composer.phar /usr/local/bin/composer
    chmod +x /usr/local/bin/composer
fi

# ============================================
# 4. Node.js 20 LTS Kurulumu
# ============================================
echo -e "${GREEN}🟢 [4/7] Node.js 20 LTS kurulumu...${NC}"
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt install -y nodejs
fi

# ============================================
# 5. Backend Kurulumu
# ============================================
echo -e "${GREEN}⚙️  [5/7] Backend kurulumu...${NC}"
cd "$INSTALL_DIR/backend"

# Composer bağımlılıkları
sudo -u $REAL_USER composer install --no-interaction --prefer-dist --optimize-autoloader

# .env dosyası oluştur
if [ ! -f .env ]; then
    cp .env.example .env
    sudo -u $REAL_USER php artisan key:generate
fi

# SQLite veritabanı
touch database/database.sqlite
chown $REAL_USER:$REAL_USER database/database.sqlite

# Migrasyonlar
sudo -u $REAL_USER php artisan migrate:fresh --seed --seeder=AdminSeeder --force

# Storage link
sudo -u $REAL_USER php artisan storage:link 2>/dev/null || true

# Izinler
chmod -R 775 storage bootstrap/cache
chown -R $REAL_USER:www-data storage bootstrap/cache

# ============================================
# 6. Frontend Kurulumu
# ============================================
echo -e "${GREEN}🎨 [6/7] Frontend kurulumu...${NC}"
cd "$INSTALL_DIR"
sudo -u $REAL_USER npm install

# ============================================
# 7. Systemd Servisleri
# ============================================
echo -e "${GREEN}🔧 [7/7] Systemd servisleri oluşturuluyor...${NC}"

# Backend Service (Port 8082)
cat > /etc/systemd/system/hayat-backend.service << EOF
[Unit]
Description=Hayat Sigortası Laravel Backend
After=network.target

[Service]
Type=simple
User=$REAL_USER
WorkingDirectory=$INSTALL_DIR/backend
ExecStart=/usr/bin/php artisan serve --host=0.0.0.0 --port=8082
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# Frontend Service (Port 3006)
cat > /etc/systemd/system/hayat-frontend.service << EOF
[Unit]
Description=Hayat Sigortası React Frontend
After=network.target

[Service]
Type=simple
User=$REAL_USER
WorkingDirectory=$INSTALL_DIR
Environment=PORT=3006
ExecStart=/usr/bin/npm run dev -- --port 3006 --host 0.0.0.0
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# ============================================
# API URL'ler zaten production'a ayarlı
# https://hayatapi.abdulkadirunsal.com.tr/api
# ============================================
echo -e "${GREEN}🔗 API URL'ler production'a ayarlı (hayatapi.abdulkadirunsal.com.tr)${NC}"

# ============================================
# Servisleri Başlat
# ============================================
echo -e "${GREEN}🚀 Servisler başlatılıyor...${NC}"
systemctl daemon-reload
systemctl enable hayat-backend
systemctl enable hayat-frontend
systemctl start hayat-backend
systemctl start hayat-frontend

# ============================================
# Tamamlandı
# ============================================
echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}    ✅ KURULUM TAMAMLANDI!${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "${BLUE}🌐 Frontend:${NC} http://localhost:3006"
echo -e "${BLUE}⚙️  Backend:${NC}  http://localhost:8082"
echo ""
echo -e "${YELLOW}👤 Admin Girişi:${NC}"
echo -e "   E-posta: kadir@kadir.com"
echo -e "   Şifre:   Sam55sam"
echo ""
echo -e "${YELLOW}📋 Servis Komutları:${NC}"
echo -e "   Durum:    sudo systemctl status hayat-backend hayat-frontend"
echo -e "   Yeniden:  sudo systemctl restart hayat-backend hayat-frontend"
echo -e "   Durdur:   sudo systemctl stop hayat-backend hayat-frontend"
echo -e "   Loglar:   sudo journalctl -u hayat-backend -f"
echo ""
