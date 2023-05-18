
class MinHeap {
	constructor() {
		this.heap = [];
	}

	// Helper Methods
	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1;
	}
	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2;
	}
	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	hasLeftChild(index) {
		return this.getLeftChildIndex(index) < this.heap.length;
	}
	hasRightChild(index) {
		return this.getRightChildIndex(index) < this.heap.length;
	}
	hasParent(index) {
		return this.getParentIndex(index) >= 0;
	}
	
	leftChild(index) {
		return this.heap[this.getLeftChildIndex(index)];
	}
	rightChild(index) {
		return this.heap[this.getRightChildIndex(index)];
	}
	parent(index) {
		return this.heap[this.getParentIndex(index)];
	}

	// Functions to create Min Heap
	
	swap(indexOne, indexTwo) {
		const temp = this.heap[indexOne];
		this.heap[indexOne] = this.heap[indexTwo];
		this.heap[indexTwo] = temp;
	}

	peek() {
		if (this.heap.length === 0) {
			return null;
		}
		return this.heap[0];
	}
	
	// Removing an element will remove the
	// top element with highest priority then
	// heapifyDown will be called
	remove() {
		if (this.heap.length === 0) {
			return null;
		}
		const item = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.pop();
		this.heapifyDown();
		return item;
	}

	add(item) {
		this.heap.push(item);
		this.heapifyUp();
	}

	heapifyUp() {
		let index = this.heap.length - 1;
		while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
			this.swap(this.getParentIndex(index), index);
			index = this.getParentIndex(index);
		}
	}

	heapifyDown() {
		let index = 0;
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index);
			if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
				smallerChildIndex = this.getRightChildIndex(index);
			}
			if (this.heap[index] < this.heap[smallerChildIndex]) {
				break;
			} else {
				this.swap(index, smallerChildIndex);
			}
			index = smallerChildIndex;
		}
	}
	
	printHeap() {
		var heap =` ${this.heap[0]} `
		for(var i = 1; i<this.heap.length;i++) {
			heap += ` ${this.heap[i]} `;
		}
		console.log(heap);
	}

	heapSort() {
		const sortedArray = [];
		const heapSize = this.heap.length;
	
		for (let i = heapSize - 1; i >= 0; i--) {
		  this.swap(0, i);
		  sortedArray.push(this.heap.pop());
		  this.heapifyDown();
		}
	
		this.heap = sortedArray;
	  }
}

// Creating the Heap
var heap = new MinHeap();

// Adding The Elements
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(100);
heap.add(40);

// const array=[10,20,40,67,88]

// for(let i=0;i<array.length;i++){
// 	heap.add(array[i])
// }
// Printing the Heap
heap.printHeap();

// Peeking And Removing Top Element
console.log(heap.peek());
console.log(heap.remove());

// Printing the Heap
// After Deletion.
heap.printHeap();
