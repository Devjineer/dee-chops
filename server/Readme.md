# Catering Order Web App – Backend

Backend service for a catering web application that allows customers to place food and custom orders, and allows the caterer to manage those orders.

## 🎯 Project Goal

This backend powers a catering business by:
- Allowing customers to place menu or custom orders
- Allowing the caterer to manage orders easily
- Keeping the MVP simple and production-ready


## Tech Stack
- Node.js
- Express
- Prisma ORM (planned)
- PostgreSQL (planned)

## Getting Started
1. Clone repo
2. Install dependencies
3. Create `.env`
4. Run `npm run dev`

## Status
🟡 In active development

## Health Check
- GET /health
- Returns JSON `{ status: "OK", uptime: <seconds> }`
- Used to verify server is running
