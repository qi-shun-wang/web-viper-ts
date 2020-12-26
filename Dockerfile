#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:15.0.1 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY webpack.*.js ./
COPY ./src ./src
RUN npm install && npm run build:prod
#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
 
FROM nginx:alpine
WORKDIR /app
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf 