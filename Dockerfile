FROM node:lts-alpine as builder
RUN apk add --no-cache git && \
    npm i -g pnpm
WORKDIR /work
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY . .
RUN git submodule update --init && \
    pnpm install --offline && \
    pnpm ssr:build && \
    pnpm prune --prod

# distroless is not supported in ARMv7
#FROM gcr.io/distroless/nodejs:16 as runner
FROM node:lts-alpine as runner
WORKDIR /app
COPY --from=builder /work/build ./build
COPY --from=builder /work/node_modules ./node_modules
COPY --from=builder /work/package.json ./package.json
ENV PLATFORM="container-ssr"
CMD ["build"]
