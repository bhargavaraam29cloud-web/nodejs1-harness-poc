FROM node:20-slim AS builder
WORKDIR /build
COPY app/package*.json ./
RUN npm install --omit=dev
COPY app/ .

FROM node:20-slim AS runtime
RUN groupadd -r appuser && useradd -r -g appuser appuser
WORKDIR /app
COPY --from=builder /build .
RUN chown -R appuser:appuser /app
USER appuser
EXPOSE 80
ENV NODE_ENV=production
ENV PORT=80
CMD ["node", "server.js"]
