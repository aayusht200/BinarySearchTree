import './style.css';
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(dataArr) {
        dataArr = this.cleanArr(dataArr);
        this.root = this.buildTree(dataArr);
    }
    cleanArr(dataArr) {
        dataArr = [...new Set(dataArr)];
        dataArr = dataArr.sort(function (a, b) {
            return a - b;
        });
        return dataArr;
    }
    buildTree(dataArr) {
        if (dataArr.length <= 0) return null;
        let middleIndex = Math.floor(dataArr.length / 2);
        let rootNode = new Node(dataArr[middleIndex]);
        rootNode.left = this.buildTree(dataArr.slice(0, middleIndex));
        rootNode.right = this.buildTree(dataArr.slice(middleIndex + 1));
        return rootNode;
    }
    includes(value) {
        return this._includes(this.root, value);
    }
    _includes(node, value) {
        if (node === null) return false;
        if (node.data === value) return true;
        if (node.data > value) return this._includes(node.left, value);
        return this._includes(node.right, value);
    }
    insert(value) {
        this.root = this._insert(this.root, value);
    }
    _insert(node, value) {
        if (node === null) return new Node(value);
        if (node.data === value) return node;
        if (value < node.data) node.left = this._insert(node.left, value);
        if (value > node.data) node.right = this._insert(node.right, value);
        return node;
    }
    find(value) {
        return this._find(this.root, value);
    }
    _find(node, value) {
        if (node === null) return null;
        if (node.data === value) return node;
        if (node.data > value) return this._find(node.left, value);
        return this._find(node.right, value);
    }
    delete(value) {
        this.root = this._delete(this.root, value);
    }
    _delete(node, value) {
        if (node === null) return null;
        if (value < node.data) node.left = this._delete(node.left, value);
        else if (value > node.data) node.right = this._delete(node.right, value);
        else {
            if (node.left == null && node.right == null) {
                return null;
            }
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            let successor = this.min(node.right);
            node.data = successor.data;
            node.right = this._delete(node.right, successor.data);
        }
        return node;
    }
    min(node) {
        if (!node) return null;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    max(node) {
        if (!node) return null;
        while (node.right) {
            node = node.right;
        }
        return node;
    }
    levelOrder() {
        if (this.root === null) return [];
        let result = [];
        let dataQue = [this.root];
        while (dataQue.length > 0) {
            let current = dataQue[0];
            result.push(current.data);
            if (current.left) dataQue.push(current.left);
            if (current.right) dataQue.push(current.right);
            dataQue.shift();
        }
        return result;
    }
    levelOrderForEach(callback) {
        if (this.root === null) return;
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            callback(current.data);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    inOrder() {
        let result = [];
        this._inOrder(this.root, result);
        return result;
    }
    _inOrder(node, result) {
        if (node == null) return;
        this._inOrder(node.left, result);
        result.push(node.data);
        this._inOrder(node.right, result);
    }
    preOrder() {
        let result = [];
        this._preOrder(this.root, result);
        return result;
    }

    _preOrder(node, result) {
        if (node === null) return;

        result.push(node.data);
        this._preOrder(node.left, result);
        this._preOrder(node.right, result);
    }

    postOrder() {
        let result = [];
        this._postOrder(this.root, result);
        return result;
    }

    _postOrder(node, result) {
        if (node === null) return;
        this._postOrder(node.left, result);
        this._postOrder(node.right, result);
        result.push(node.data);
    }
    height(node = this.root) {
        if (node === null) return -1;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
    depth(value) {
        return this._depth(this.root, value);
    }
    _depth(node, value) {
        if (node === null) return -1;
        if (node.data === value) return 0;
        if (value < node.data) {
            let result = this._depth(node.left, value);
            if (result === -1) return -1;
            return result + 1;
        }
        if (value > node.data) {
            let result = this._depth(node.right, value);
            if (result === -1) return -1;
            return result + 1;
        }
    }
    isBalanced(node = this.root) {
        if (!node) return true;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
    reBalance() {
        let arr = this.inOrder();
        this.root = this.buildTree(arr);
    }
}
//[2, 5, 7, 10, 15, 12, 20, 1, 21]
let arr = [1, 2, 3, 4, 5];
let temp = new Tree(arr);
console.log(temp.levelOrder());
console.log(temp.inOrder());
console.log(temp.preOrder());
console.log(temp.postOrder());
console.log(temp.height());
console.log(temp.depth(1));
console.log(temp.isBalanced());
temp.delete(4);
temp.delete(5);
console.log(temp.height());
console.log(temp.isBalanced());
temp.reBalance();
console.log(temp.inOrder());
console.log(temp.isBalanced());
