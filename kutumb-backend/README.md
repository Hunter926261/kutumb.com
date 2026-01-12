# Kutumb.com Backend

A scalable system for managing family relationships, genealogy graphs,
and user authentication.

## Tech Stack
- NestJS
- PostgreSQL (Prisma ORM)
- Neo4j (Family Graph)
- JWT Authentication

## Features (MVP)
- User authentication & roles
- Family member creation
- Parent-child & spouse relationships
- Graph-based family visualization (Neo4j)

## Architecture
- REST API (clean modular design)
- PostgreSQL → auth & metadata
- Neo4j → relationships & lineage

## Setup
```bash
npm install
npx prisma generate
npm run start:dev
