#!/bin/bash

# Post to /auth/login
NAME=admin
PASS=admin1234
TOKEN=$(curl -X POST http://localhost:3000/auth/login -d '{"username": "'${NAME}'", "password": "'${PASS}'"}' -H "Content-Type: application/json")
TOKEN_VALUE=$(echo "${TOKEN}" | awk -F'"' '/access_token/{print $4}')
echo -e "Token Value: ${TOKEN_VALUE}"
echo -e "\n[Test Success]"
curl http://localhost:3000/auth/profile -H "Authorization: Bearer "${TOKEN_VALUE}

echo -e "\n\n[Test Fail]"
curl http://localhost:3000/auth/profile