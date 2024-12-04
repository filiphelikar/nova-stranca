#this would be better and easier: <FROM node:18-alpine>, but I use Arch BTW
FROM archlinux:latest AS build

ENV PACMAN_CONFIG="/etc/pacman.conf"

RUN pacman -Syu --noconfirm && \
    pacman -S --noconfirm nodejs npm && \
    pacman -Q nodejs npm && \
    pacman -Scc --noconfirm 

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN npm ci

COPY . .

RUN npm run build

#this would be better and easier: <FROM node:18-alpine>, but I use Arch BTW
FROM archlinux:latest AS runner

RUN pacman -Syu --noconfirm && \
    pacman -S --noconfirm nodejs npm && \
    pacman -Q nodejs npm && \
    pacman -Scc --noconfirm

WORKDIR /app

ENV NODE_ENV=production

RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs --create-home nextjs

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 9000

ENV PORT=9000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]