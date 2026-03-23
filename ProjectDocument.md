# Balanced Binary Search Tree (BST) – Project Document

## Overview

This project focuses on building a **Balanced Binary Search Tree (BST)** from scratch using JavaScript.
The goal is to understand tree data structures deeply by implementing core operations manually — without relying on arrays for logic.

---

## Objectives

* Build a balanced BST from an array
* Implement standard BST operations (insert, delete, search)
* Practice tree traversal techniques (BFS & DFS)
* Understand tree properties like height, depth, and balance
* Rebalance an unbalanced tree

---

## Constraints

* No duplicate values allowed
* Must not rely on the original input array after tree creation
* Operations should be performed via **tree traversal**
* Maintain **O(log n)** efficiency where applicable

---

## Core Components

### 1. Node Factory / Class

Each node should contain:

* `data`
* `left`
* `right`

---

### 2. Tree Factory / Class

* Accepts an array during initialization
* Contains:

  * `root` (result of `buildTree()`)

---

## Required Methods

### Tree Construction

#### `buildTree(array)`

* Sort array
* Remove duplicates
* Recursively build a **balanced BST**
* Return root node

---

### Search

#### `includes(value)`

* Return `true` if value exists
* Return `false` otherwise
* Use BST traversal logic

---

### Insertion

#### `insert(value)`

* Insert while maintaining BST property
* Ignore duplicates

---

### Deletion

#### `deleteItem(value)`

Handle 3 cases:

1. Node has no children
2. Node has one child
3. Node has two children (replace with inorder successor)

---

## Traversal Methods

### Breadth-First

#### `levelOrderForEach(callback)`

* Use queue (array)
* Throw error if no callback

---

### Depth-First

#### `inOrderForEach(callback)`

* Left → Root → Right

#### `preOrderForEach(callback)`

* Root → Left → Right

#### `postOrderForEach(callback)`

* Left → Right → Root

---

## Tree Metrics

### `height(value)`

* Number of edges from node → deepest leaf

---

### `depth(value)`

* Number of edges from node → root

---

## Balance

### `isBalanced()`

* Check **every node**
* Condition:

  ```
  |height(left) - height(right)| <= 1
  ```

---

### `rebalance()`

* Use traversal (preferably in-order)
* Rebuild tree using `buildTree()`

---

## Utility (Optional)

### `prettyPrint(node)`

* Visual debugging tool
* Helps inspect structure

---

## Driver Script

### Step 1: Generate Data

* Create random array (< 100)

---

### Step 2: Build Tree

* Initialize tree
* Confirm:

  ```
  isBalanced() → true
  ```

---

### Step 3: Traversals

Log:

* Level Order
* Pre Order
* Post Order
* In Order

---

### Step 4: Unbalance Tree

* Insert values > 100

---

### Step 5: Validate

```
isBalanced() → false
```

---

### Step 6: Rebalance

```
rebalance()
```

---

### Step 7: Final Check

```
isBalanced() → true
```

---

### Step 8: Traversals Again

* Confirm structure is correct

---

## Suggested Development Order

1. Node
2. buildTree()
3. Tree constructor
4. includes()
5. insert()
6. deleteItem()
7. Traversals
8. height() & depth()
9. isBalanced()
10. rebalance()
11. Driver script

---

## Common Pitfalls

* Using the original array after building the tree ❌
* Not handling delete cases properly ❌
* Only checking balance at root ❌
* Forgetting to remove duplicates ❌

---

## Expected Outcome

By the end:

* You’ll have a fully functional BST implementation
* Strong understanding of recursion & tree traversal
* Confidence with data structures beyond arrays/objects

---

## Next Step (Optional)

* Add:

  * `find(value)` → returns node
  * Iterative traversal versions
  * Visualization UI (later when you reach DOM)

---

## Notes

Keep the implementation clean:

* Use recursion where it makes sense
* Keep functions small and focused
* Separate logic clearly (don’t mix traversal + mutation)

---
