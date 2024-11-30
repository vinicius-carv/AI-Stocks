FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y inotify-tools

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["sh", "-c", "npm run dev & while true; do inotifywait -e modify -r /app/src && npm run build && npm run dev; done"]
