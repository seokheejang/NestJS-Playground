curl http://localhost:3000/auth/profile

curl -X POST http://localhost:3000/auth/login -d '{"username": "admin", "password": "admin1234"}' -H "Content-Type: application/json"

curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDUzMTQxOTgsImV4cCI6MTcwNTMxNDI1OH0.4XhShkHdx8G9yFhvOZ5uzox7yS39EnsrbSkeqTWNB7g"