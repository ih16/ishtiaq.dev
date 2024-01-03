FROM oven/bun:latest AS build
WORKDIR /app
COPY package*.json bun.lockb ./
RUN bun install
COPY . .
ENV NODE_ENV production
RUN bun astro build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 4321