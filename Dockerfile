FROM node:22-alpine3.22
ARG environment
ENV NODE_ENV=$environment
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules package-lock.json
RUN npm install
COPY . .
RUN npm run build -- --mode=$NODE_ENV
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]