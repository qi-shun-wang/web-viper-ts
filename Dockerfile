#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:12.13.0 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY webpack.config.prod.js ./
COPY ./src ./src
COPY ./index.html ./src/index.html
RUN npm ci --quiet && npm run build
#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
 
FROM nginx:alpine
WORKDIR /app
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html/dist
COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html