# 1. Välj en basimage (Node)
FROM node:20

# 2. Skapa arbetsmapp i containern
WORKDIR /app

# 3. Kopiera package.json och installera beroenden
COPY package*.json ./
RUN npm install

# 4. Kopiera resten av koden
COPY . .

# 5. Startkommando
CMD ["node", "server.js"]

# 6. Öppna port 5000
EXPOSE 5000
