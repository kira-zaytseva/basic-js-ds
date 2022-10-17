const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.tree) return null;
    return this.tree;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newNode = new Node(data);


    if (!this.tree) {
      this.tree = newNode;
    }

    let currentTree = this.tree;
    function insert() {
      if (newNode.data < currentTree.data) {
        if (!currentTree.left) {
          currentTree.left = newNode;
        } else {
          currentTree = currentTree.left;
          insert();
        }
      } else if (newNode.data > currentTree.data) {
        if (!currentTree.right) {
          currentTree.right = newNode;
        } else {
          currentTree = currentTree.right;
          insert();
        }
      }
    }
    insert();
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.tree) {
      return false;
    }
    let currentTree = this.tree;
    function hasData() {
      if (currentTree.data === data) {
        return true;
      }
      if (currentTree.data > data) {
        currentTree = currentTree.left;
        if (!currentTree) {
          return false;
        } else return hasData();
      }
      if (currentTree.data < data) {
        currentTree = currentTree.right;
        if (!currentTree) {
          return false;
        } else return hasData();
      }
    }
    return hasData();
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.tree) {
      return false;
    }

    let currentTree = this.tree;
    function findData() {
      if (currentTree.data === data) {
        return currentTree;
      }
      if (currentTree.data > data) {
        currentTree = currentTree.left;
        if (!currentTree) {
          return null;
        } else return findData();
      } else {
        currentTree = currentTree.right;
        if (!currentTree) {
          return null;
        } else return findData();
      }
    }
    return findData();
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.tree = remove(this.tree, data);

    function remove(currentTree, data) {
      if (!currentTree) {
        return null;
      }

      if (data < currentTree.data) {
        currentTree.left = remove(currentTree.left, data);
        return currentTree;
      }
      if (data > currentTree.data) {
        currentTree.right = remove(currentTree.right, data);
        return currentTree;
      }

      if (!currentTree.left && !currentTree.right) {
        return null;
      }
      if (!currentTree.left) {
        currentTree = currentTree.right;
        return currentTree;
      }
      if (!currentTree.right) {
        currentTree = currentTree.left;
        return currentTree;
      }
      let rightNode = currentTree.right;
      while (rightNode.left) {
        rightNode = rightNode.left;
      }
      currentTree.data = rightNode.data;
      currentTree.right = remove(currentTree.right, rightNode.data);
      return currentTree;
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.tree) {
      return null;
    }

    let currentTree = this.tree;
    while (currentTree.left){
      currentTree = currentTree.left;
    }
    return currentTree.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.tree) {
      return null;
    }

    let currentTree = this.tree;
    while (currentTree.right){
      currentTree = currentTree.right;
    }
    return currentTree.data;
  }
}

module.exports = {
  BinarySearchTree
};