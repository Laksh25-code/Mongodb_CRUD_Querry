# MongoDB CRUD Query

A MongoDB CRUD (Create, Read, Update, Delete) operations learning and reference project with example queries for working with databases and collections.

## Project Structure

```
Mongodb_CRUD_Querry/
├── README.md
└── Mongodb/
    ├── 1_setup.mongodb.js      # Database setup and INSERT operations
    └── 2_reading.mongodb.js    # READ operations and queries
```

## Files Overview

### 1_setup.mongodb.js
Contains database setup and **INSERT (Create) operations** including:
- `insertMany()` - Insert multiple products (Laptop, Smartphone, Mouse)
- `insertOne()` - Insert single products (Headphones)
- `insertMany()` - Insert multiple contacts with phone and email
- `insertOne()` - Insert single contacts

**Database:** `ecommers`
**Collections:** `products`, `contacts`

### 2_reading.mongodb.js
Contains **READ (Query) operations** including:
- Basic `find()` queries to retrieve all documents
- `find()` with filtering conditions
- Comparison operators (`$gt`, `$gte`, `$lte`, `$lt`)
- Logical operators (`$or`)
- Field projection (selecting specific fields)
- Sorting with `sort()`, `skip()`, and `limit()`
- Formatting output with `pretty()`

## Usage

These MongoDB queries can be executed using:
- MongoDB Compass
- MongoDB Shell (mongosh)
- IDE extensions with MongoDB support

Simply uncomment the queries you want to run and execute them in your MongoDB environment.

## Key Concepts Covered

- **INSERT operations** - Adding data to collections
- **READ operations** - Querying and filtering data
- **Comparison operators** - $gt, $gte, $lte, $lt
- **Logical operators** - $or
- **Query modifiers** - sort(), skip(), limit()
- **Field projection** - Selecting specific fields in results