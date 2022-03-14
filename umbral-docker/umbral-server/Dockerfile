FROM node:slim
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
WORKDIR /home/node
COPY . .
RUN npm i
EXPOSE 5001