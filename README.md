# BUILD WEB SERVER WITH NGINX AND APACHE2

Membuat web server di web server nodeJS, Nginx, dan Apache2.

Disini saya juga membuat limitasi request masuk untuk web server Nginx apabila melakukan refresh berkali-kali maka akan muncul 503 Service Temporarily Unavailable karena mengubah konfigurasi rate limit menjadi 6 request per menit alias 1 request setiap 10 detik.

---

Untuk menjalankan project ini, pastikan `node`, `npm`, dan `WSL Ubuntu ` sudah terinstall pada komputer/laptop Anda.

Untuk mengecek apakah npm sudah terinstal:

```
node -v
npm -v
```

---

## Tata Cara Cloning Repositori GitHub:

1. Git clone project

```
git clone https://github.com/mhsyaman/build-web-server-with-nginx-and-apache2.git
```

2. Masuk ke folder

```
cd build-web-server-with-nginx-and-apache2
```

---

## Tata cara menjalankan project:

1. Install npm modules

```
npm install
```

2. Install npm express

```
npm install express
```

3. Jalankan project

```
npm run start
```

4. Buka browser masukan port dibawah ini untuk bisa menjalankan web server nodeJS

```
localhost:8000
```

```
localhost:8000/me
```

---

### Setup web server NGINX

1. Instal NGINX dengan perintah berikut:

```
sudo apt update
sudo apt install nginx
```

2. Instal Node.js dan NPM menggunakan NVM

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
nvm use --lts
```

3. Mengonfigurasi NGINX sebagai Reverse Proxy Server

```
sudo nano /etc/nginx/sites-available/default
```

4. Tambahkan konfigurasi yang sesuai dengan konfigurasiNGINX_mhsyaman untuk mengatur NGINX sebagai reverse proxy

5. Jalankan project

```
npm run start
```

6. Buka browser masukan port dibawah ini untuk bisa menjalankan web server Nginx

```
localhost:3000
```

```
localhost:3000/me
```

---

### Setup web server Apache2:

1. Instal Apache2 dengan perintah berikut:

```
sudo apt update
sudo apt install apache2
```

2. Buka file konfigurasi port Apache2

```
sudo nano /etc/apache2/ports.conf

```

3. Isikan konfigurasi port sesuai dengan ports.txt untuk mendengarkan di port 3001

4. Mengonfigurasi Apache2 sebagai Reverse Proxy Server

```
sudo nano /etc/apache2/sites-available/000-default.conf
```

5. Isikan konfigurasi sesuai dengan konfigurasiApache2.txt untuk mengatur Apache2 sebagai reverse proxy

6. Masukkan module Apache2

```
sudo a2ensite 000-default.conf
sudo a2enmod proxy_http
sudo a2enmod proxy
sudo a2enmod substitute

```

7. Restart Apache2

```
sudo systemctl restart apache2

```

8. Jalankan project

```
npm run start
```

9. Buka browser masukan port dibawah ini untuk bisa menjalankan web server Apache

```
localhost:3001
```

```
localhost:3001/me
```
