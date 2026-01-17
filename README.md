# 🧬 kutumb.com
A Graph-Based Family Relationship Visualization Platform

---

## 📌 Overview
kutumb.com is a web-based platform that helps users understand, create, and visualize family relationships using a graph-based model.

It solves real-life confusion around extended family relations, especially in large families or marriage discussions, by presenting relationships in a clear and logical visual form.

---

## ❓ Problem Statement
- Family relations become confusing in extended families
- Explaining indirect relations verbally is difficult
- No simple visual tools exist for relationship understanding

---

## 💡 Solution
kutumb.com allows users to:
- Create family trees
- Define relationships between members
- Automatically derive indirect relations
- Visually explore family structures

---

## ✨ Confirmed Features

### 👨‍👩‍👧 Family Management
- Create and manage multiple families
- Add family members with basic details
- Define parent, child, spouse, and sibling relationships

### 🧩 Relationship Resolution
- Automatically finds indirect relations
- Supports multi-generation family trees
- Prevents invalid relationships

### 🌳 Family Tree Visualization
- Graph-based family tree model
- Clear parent-child and marriage links
- Scalable for large families

### 🔐 Authentication
- Secure user signup and login
- JWT-based authentication
- Family data is private to each user

### 🗄️ Graph Database
- Neo4j used for storing people and relationships
- Fast relationship traversal and queries

### 📡 Backend APIs
- NestJS-based REST APIs
- Modular and scalable architecture

---

## 🧰 Tech Stack

**Backend**
- NestJS (TypeScript)
- Neo4j Graph Database
- JWT Authentication

**Tools**
- Node.js
- npm
- Git & GitHub

---

## 🏗️ Architecture Overview

Client (Future UI)
↓  
NestJS REST API  
↓  
Neo4j Graph Database  

---

## 🚀 Setup & Run

### 1. Clone Repository
```bash
git clone https://github.com/your-username/kutumb.com.git
cd kutumb.com
