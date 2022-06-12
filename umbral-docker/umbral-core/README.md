docker load < auth_api_latest.tar.gz
docker run --platform linux/amd64 --publish 8022:8022 auth-api:latest