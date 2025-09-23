#  Bloom Filter Username Lookup  

This project is a simple **Bloom Filter implementation** with a **Node.js backend** and **React frontend**.  
This project demonstrates how Bloom Filters can be used to quickly check whether a username might already exist in a large dataset (millions of records).  

---

##  About the Project  

A **Bloom Filter** is a space-efficient, probabilistic data structure that can test whether an element is in a set.  

- It can **tell if a username definitely does not exist**.  
- Or, it can say a username **might exist** (with a small probability of false positives).  
- This tradeoff makes it **extremely fast and memory efficient**, which is useful for handling **millions of usernames**.  

In this project:  

- Users enter a username into the React frontend.  
- The backend (Node.js + Express) checks the username against a Bloom Filter.  
- The Bloom Filter responds with:  
  - ✅ `Username added successfully` (if it wasn’t in the set before).  
  - ❌ `Username already exists` (if the bits were already set).  

---

## Tech Stack  

**Frontend**  
- React (Vite)  
- Fetch API  

**Backend**  
- Node.js  
- Express.js  
- Custom Bloom Filter implementation  

---

## Features  

- Enter a username in the frontend input box.  
- Instantly check if it **might already exist** or if it’s **newly added**.  
- Backend maintains the Bloom Filter state for fast lookups.  
- Memory-efficient handling of very large datasets (millions of usernames).
- No need to query to the database. Thus preventing load on Database.

---

## Getting Started  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/bloom-filter-username-lookup.git
cd bloom-filter-username-lookup

### 2. Backend Setup
cd backend
npm install
node index.js

### 3. Frontend Setup
cd frontend
npm install
npm run dev

## Learning Objectives
-Understand how Bloom Filters work.
-Learn about probabilistic data structures.
-Practice integrating a React frontend with a Node.js backend.
