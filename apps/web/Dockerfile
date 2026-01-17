FROM node:20-alpine

WORKDIR /app

# Копируем корневые файлы для установки зависимостей
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY apps/api/package*.json ./apps/api/

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код
COPY . .

# Открываем порт
EXPOSE 3000

CMD ["npm", "run", "dev", "-w", "@iim/web"]