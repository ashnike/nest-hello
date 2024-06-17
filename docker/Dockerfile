#Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY ./app/package*.json ./

RUN npm install

COPY ./app .

COPY ./app/public ./public
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
