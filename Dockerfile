#
# ---- Dependencies ----
FROM node:current-alpine3.14 AS dependencies

# Set the workdir
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --check-files --non-interactive

#
# ---- Build ----
FROM node:current-alpine3.14 AS build

# Set the workdir
WORKDIR /app

# Copy app sources
COPY . .

# Copy production node_modules
COPY --from=dependencies /app/node_modules node_modules

# Run build steps
RUN yarn build

#
# ---- Release ----
FROM node:current-alpine3.14 AS release

# Set the workdir
WORKDIR /app

# Add user and group for Next.js
RUN addgroup -g 1001 -S nodejs
RUN adduser -S vitejs -u 1001

# Copy production artifacts
COPY --from=build /app/.env* ./
COPY --from=build /app/package.json .
COPY --from=build /app/public public
COPY --from=build --chown=vitejs:vitejs /app/dist dist
COPY --from=build /app/node_modules node_modules

# Set environment variables
ENV NODE_ENV production

# Set current user to vitejs
USER vitejs

# Expose HTTP port
EXPOSE 5000

# Start UI process
CMD ["yarn", "serve", "--host", "5000"]
