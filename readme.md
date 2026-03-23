# Balanced Binary Search Tree (BST)

## Description

This project is a from-scratch implementation of a **Balanced Binary Search Tree (BST)** in JavaScript.
It focuses on understanding tree structures, recursion, and efficient data manipulation without relying on arrays after initialization.

---

## Features

- Build a balanced BST from an array
- Insert and delete nodes while maintaining BST properties
- Search for values efficiently
- Traverse the tree using:
    - Level Order (BFS)
    - In Order
    - Pre Order
    - Post Order

- Calculate:
    - Height of a node
    - Depth of a node

- Check if the tree is balanced
- Rebalance an unbalanced tree

---

## Tech Stack

- JavaScript (ES6+)
- No external libraries

---

## Project Structure

```
.
├── Node.js        # Node factory/class
├── Tree.js        # Tree factory/class with all methods
├── prettyPrint.js # Tree visualization helper (optional)
└── driver.js      # Script to test functionality
```

---

## How It Works

### 1. Tree Initialization

- Takes an array
- Removes duplicates
- Sorts values
- Builds a balanced BST using recursion

---

### 2. Core Operations

#### Insert

Adds a value while maintaining BST rules.

#### Delete

Handles:

- Leaf nodes
- Nodes with one child
- Nodes with two children

#### Search

Efficient lookup using BST traversal logic.

---

### 3. Traversals

- **Level Order (BFS)** → Uses a queue
- **In Order** → Sorted output
- **Pre Order**
- **Post Order**

Each traversal accepts a callback function.

---

### 4. Tree Properties

- **Height** → Longest path from node to leaf
- **Depth** → Distance from node to root

---

### 5. Balance

#### isBalanced()

Checks if the tree is balanced at **every node**.

#### rebalance()

- Collects values using traversal
- Rebuilds tree using `buildTree()`

---

## Usage

### Run Driver Script

```bash
node driver.js
```

---

## Example Flow

1. Generate random numbers (< 100)
2. Build tree
3. Confirm tree is balanced
4. Print traversals
5. Insert large numbers (> 100) to unbalance
6. Confirm tree is unbalanced
7. Rebalance tree
8. Confirm tree is balanced again

---

## Key Learnings

- Recursion in real-world problems
- Tree traversal techniques (BFS vs DFS)
- Managing references instead of arrays
- Writing clean, modular JavaScript

---

## Common Mistakes

- Using the original array after building the tree
- Ignoring duplicate handling
- Incorrect delete logic
- Only checking balance at root

---

## Future Improvements

- Add `find(value)` method
- Implement iterative traversal methods
- Visualize tree using DOM
- Add test cases

---

## Author

Aayush – Front-End Developer in training
