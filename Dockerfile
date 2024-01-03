FROM oven/bun:latest
WORKDIR /src
COPY package*.json bun.lockb ./
RUN bun install
COPY . .
ENV NODE_ENV production
EXPOSE 4321
CMD [ "bun", "start" ]