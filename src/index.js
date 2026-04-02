import './style.css';
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(dataArr) {
        dataArr = this.cleanArr(dataArr);
        this.root = this.buildTree(dataArr, 0, dataArr.length - 1);
    }
    cleanArr(dataArr) {
        return [...new Set(dataArr)].sort((a, b) => a - b);
    }
    buildTree(dataArr, start, end) {
        if (start > end) return null;
        let midPoint = Math.floor((start + end) / 2);
        let rootNode = new Node(dataArr[midPoint]);
        rootNode.left = this.buildTree(dataArr, start, midPoint - 1);
        rootNode.right = this.buildTree(dataArr, midPoint + 1, end);
        return rootNode;
    }
    include(value) {
        return this._include(this.root, value);
    }
    _include(node, value) {
        if (node === null) return false;
        if (node.data === value) return true;
        if (value < node.data) return this._include(node.left, value);
        else return this._include(node.right, value);
    }
    find(value) {
        return this._find(this.root, value);
    }
    _find(node, value) {
        if (node === null) return null;
        if (node.data === value) return node;
        if (value < node.data) return this._find(node.left, value);
        else return this._find(node.right, value);
    }
    insert(value) {
        this.root = this._insert(this.root, value);
    }
    _insert(node, value) {
        if (!node) return new Node(value);
        if (value < node.data) node.left = this._insert(node.left, value);
        if (value > node.data) node.right = this._insert(node.right, value);
        return node;
    }
    delete(value) {
        this.root = this._delete(this.root, value);
    }
    _delete(node, value) {
        if (node === null) return null;
        if (value < node.data) node.left = this._delete(node.left, value);
        else if (value > node.data) node.right = this._delete(node.right, value);
        else {
            if (node.left === null && node.right === null) return null;
            if (node.left === null) node.right = this._delete(node.right, value);
            if (node.right === null) node.left = this._delete(node.left, value);
            let successor = this.min(node.right);
            node.data = successor.data;
            node.right = this._delete(node.right, successor.data);
        }
        return node;
    }
    min(node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }
    levelOrder() {
        if (this.root === null) return [];
        let resultArr = [];
        let tempArr = [this.root];
        while (tempArr.length > 0) {
            let current = tempArr.shift();
            resultArr.push(current.data);
            if (current.left) tempArr.push(current.left);
            if (current.right) tempArr.push(current.right);
        }
        return resultArr;
    }
    levelOrderCallBackFunction(callBackFunction) {
        if (this.root === null) return null;
        let tempArr = [this.root];
        while (tempArr.length > 0) {
            let current = tempArr.shift();
            if (current.left) {
                tempArr.push(current.left);
            }
            if (current.right) tempArr.push(current.right);
            callBackFunction(current.data);
        }
    }
    inOrder() {
        let resultArr = [];
        this._inOrder(this.root, resultArr);
        return resultArr;
    }
    _inOrder(node, resultArr) {
        if (!node) return;
        this._inOrder(node.left, resultArr);
        resultArr.push(node.data);
        this._inOrder(node.right, resultArr);
    }
    preOrder() {
        let resultArr = [];
        this._preOrder(this.root, resultArr);
        return resultArr;
    }
    _preOrder(node, resultArr) {
        if (!node) return;
        resultArr.push(node.data);
        this._preOrder(node.left, resultArr);
        this._preOrder(node.right, resultArr);
    }
    postOrder() {
        let resultArr = [];
        this._postOrder(this.root, resultArr);
        return resultArr;
    }
    _postOrder(node, resultArr) {
        if (!node) return;
        this._postOrder(node.left, resultArr);
        this._postOrder(node.right, resultArr);
        resultArr.push(node.data);
    }
    height(node = this.root) {
        if (node === null) return -1;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
    depth(value) {
        return this._depth(this.root, value);
    }
    _depth(node, value) {
        if (!node) return -1;
        if (node.data === value) return 0;
        if (value < node.data) {
            let result = this._depth(node.left, value);
            if (value === node.data) return -1;
            return result + 1;
        }
        if (value > node.data) {
            let result = this._depth(node.right, value);
            if (value === node.data) return -1;
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
        this.root = this.buildTree(arr, 0, arr.length);
    }
}

let arr = [2, 5, 7, 10, 15, 12, 20, 1, 5, 6, 21];
let temp = new Tree(arr);
console.log(temp.inOrder());
console.log(temp.include(2));
console.log(temp.find(2));
temp.insert(12);
console.log(temp.include(12));
console.log(temp.levelOrder());
console.log(
    temp.levelOrderCallBackFunction((value) => {
        console.log(value);
    })
);
console.log(temp.inOrder());
console.log(temp.preOrder());
console.log(temp.postOrder());
console.log(temp.height());
console.log(temp.depth(1));
console.log(temp.isBalanced());
temp.delete(1);
temp.delete(2);
temp.delete(5);
temp.delete(6);
console.log(temp.isBalanced());
temp.reBalance();
console.log(temp.inOrder());
console.log(temp.isBalanced());
