# Multi-stage build for Node.js application
# Build Stage
FROM node:18-buster-slim AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

# Run Stage
FROM node:18-buster-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY package.json ./
RUN npm install --only=production
EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]
