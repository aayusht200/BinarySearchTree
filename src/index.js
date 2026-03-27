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
}
