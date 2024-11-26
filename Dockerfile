# 阶段 1：构建项目
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run generate

# 阶段 2：使用 Nginx 运行静态文件
FROM nginx:alpine

# 复制生成的静态文件到 Nginx 的默认目录
COPY --from=builder /app/.output/public /usr/share/nginx/html

# 暴露端口（默认 Nginx 端口）
EXPOSE 80
