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
}
