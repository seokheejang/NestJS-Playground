# Post to /auth/login
NAME=admin
PASS=admin1234
curl -X POST http://localhost:3000/auth/login -d '{"username": "'${NAME}'", "password": "'${PASS}'"}' -H "Content-Type: application/json"