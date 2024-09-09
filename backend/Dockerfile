# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production && npm cache clean --force

COPY . .

# Stage 2: Run
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

USER node

EXPOSE 3000

CMD ["npm", "start"]