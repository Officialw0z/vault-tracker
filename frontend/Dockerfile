# 1. Basimage
FROM node:20

# 2. Skapa arbetsmapp
WORKDIR /app

# 3. Kopiera package.json och installera beroenden
COPY package*.json ./
RUN npm install

# 4. Kopiera resten av appen
COPY . .

# 5. Exponera port 3000
EXPOSE 3000

# 6. Starta React-appen
CMD ["npm", "start"]
