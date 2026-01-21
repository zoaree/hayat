#!/bin/bash

# ============================================
# Hayat Sigortası - Kaldırma Scripti
# ============================================

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${RED}"
echo "================================================"
echo "    🗑️  Hayat Sigortası Kaldırma Scripti"
echo "================================================"
echo -e "${NC}"

if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Bu scripti root olarak çalıştırın: sudo bash uninstall.sh${NC}"
    exit 1
fi

echo "Servisler durduruluyor..."
systemctl stop hayat-backend 2>/dev/null || true
systemctl stop hayat-frontend 2>/dev/null || true

echo "Servisler devre dışı bırakılıyor..."
systemctl disable hayat-backend 2>/dev/null || true
systemctl disable hayat-frontend 2>/dev/null || true

echo "Servis dosyaları siliniyor..."
rm -f /etc/systemd/system/hayat-backend.service
rm -f /etc/systemd/system/hayat-frontend.service

systemctl daemon-reload

echo ""
echo -e "${GREEN}✅ Servisler kaldırıldı!${NC}"
echo ""
echo "Not: PHP, Node.js ve proje dosyaları silinmedi."
echo "Bunları manuel olarak kaldırabilirsiniz."
