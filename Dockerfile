# Base image olarak Node.js kullanın
FROM node:18

# Çalışma dizinini oluştur ve ayarla
WORKDIR /app

# package.json ve yarn.lock dosyalarını kopyala
COPY package.json yarn.lock ./

# Proje bağımlılıklarını yükle
RUN yarn install

# Tüm uygulama dosyalarını kopyala
COPY . .

# Uygulamayı build edin
RUN yarn build

# Uygulamayı başlat
CMD ["yarn", "dev"]

# 5173 numaralı portu expose edin (Vite'ın varsayılan portu)
EXPOSE 5173