# 🌸 Bloom Filter Username Lookup  

A simple **Bloom Filter implementation** with a **Node.js backend** and **React frontend**.  
This project demonstrates how Bloom Filters can be used to quickly check whether a username might already exist in a large dataset (millions of records).  

---

## 📖 About the Project  

A **Bloom Filter** is a space-efficient, probabilistic data structure that can test whether an element is in a set.  

- ✅ Can **tell if a username definitely does not exist**.  
- ⚠️ Can say a username **might exist** (with a small probability of false positives).  
- ⚡ Extremely **fast and memory efficient**, useful for handling **millions of usernames**.  

In this project:  

1. Users enter a username into the **React frontend**.  
2. The **Node.js + Express backend** checks the username against a Bloom Filter.  
3. The Bloom Filter responds with:  
   - `✅ Username added successfully` (if it wasn’t in the set before).  
   - `❌ Username already exists` (if the bits were already set).
     
Workflow:<img width="1405" height="433" alt="image" src="https://github.com/user-attachments/assets/f91ecc9b-8990-4600-878b-0c8bb39d01f3" />


---

## 🛠️ Tech Stack  

**Frontend**  
- React (Vite)  
- Fetch API  

**Backend**  
- Node.js  
- Express.js  
- Custom Bloom Filter implementation  

---

## ✨ Features  

- number of hash functions : 7
- size of BloomFilter : 10,000,000 bits (~1.25 MB).
- currently it holds around 1M username.  
- Backend maintains the Bloom Filter state for **fast lookups**.  
- the bloom.bin is the file maintaining the bloom filter inputs.  
- 🚫 No need to query the database → reduces load on DB.  

---

## Output:
first time:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8be28dd4-e467-4c57-ad61-efb64bd19641" />

second time:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f1a853c3-41bd-493d-8816-1658f106db5c" />



## 🚀 Getting Started  

Follow these steps to run the project locally:

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/bloom-filter-username-lookup.git
cd bloom-filter-username-lookup
```

### 2. Backend Setup  
```bash
cd backend
npm install
node index.js
```

### 3. Frontend Setup  
```bash
cd frontend
npm install
npm run dev
```

---

## 🎯 Learning Objectives  

- Understand how **Bloom Filters** work.
- Learing how scalable systems are made and maintained. 
- Learn about **probabilistic data structures**.  
- Practice integrating a **React frontend** with a **Node.js backend**.  

---
