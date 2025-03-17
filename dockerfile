FROM node:20-alpine as dependencies
WORKDIR /app 

COPY package.json package-lock.json ./
RUN npm install --force

FROM node:20-alpine as builder
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

ARG NEXT_PUBLIC_TOKEN
ARG NEXT_PUBLIC_CHAT_ID

ENV NEXT_PUBLIC_TOKEN=${NEXT_PUBLIC_TOKEN}
ENV NEXT_PUBLIC_CHAT_ID=${NEXT_PUBLIC_CHAT_ID}
ENV NEXT_PUBLIC_YA_ID=${NEXT_PUBLIC_YA_ID}
ENV NEXT_PUBLIC_GM_ID=${NEXT_PUBLIC_GM_ID}

RUN npm run build

FROM node:20-alpine as runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm" , "start"]