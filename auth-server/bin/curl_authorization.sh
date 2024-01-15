curl http://localhost:3000/admin/create

curl -X POST http://localhost:3000/admin/create

curl -X POST http://localhost:3000/auth/login -d '{"username": "admin", "password": "admin1234"}' -H "Content-Type: application/json"

curl -X POST http://localhost:3000/admin/create -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDUzMTg3NTAsImV4cCI6MTcwNTMyMjM1MH0.SEuOkcRuQugYiSJ2tmrUM-oHr8U4WbxA190RHIcgicA"

curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDUzMTg1MzAsImV4cCI6MTcwNTMyMjEzMH0.YJs9rWl3_bHjt4ufBfLph4wZKqw0zA3YKgumBvaEwUA"