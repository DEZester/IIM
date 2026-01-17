FROM golang:alpine

WORKDIR /app

# Копируем go.mod и go.sum (если есть)
COPY apps/telemetry/go.mod* ./
RUN if [ -f go.mod ]; then go mod download; fi

# Копируем исходный код
COPY apps/telemetry/ .

# Открываем порт
EXPOSE 8080

# Запуск
CMD ["go", "run", "main.go"]
