function selectionSort(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;  // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr; // Return the sorted array
}

const array = [10, 50, 20, 40, 80, 30, 90, 70];
console.log(selectionSort(array)); // Output: [10, 20, 30, 40, 50, 70, 80, 90]
//==========================================================================================

function insertion(a) {
  let n = a.length;
  
  for (let i = 1; i < n; i++) {
    let key = a[i];
    let j = i - 1;

    // Move elements of a[0..i-1] that are greater than key, to one position ahead
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key; // Place the key at the correct position
  }
  return a; // Return the sorted array
}

const array = [10, 50, 20, 40, 80, 30, 90, 70];
console.log(insertion(array)); // Output: [10, 20, 30, 40, 50, 70, 80, 90]



//==========================================================================================
function bubbleSort(a) {
  let n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]; // Swap elements
      }
    }
  }
  return a; // Return the sorted array
}

const array = [10, 50, 20, 40, 80, 30, 90, 70];
console.log(bubbleSort(array)); // Output: [10, 20, 30, 40, 50, 70, 80, 90]


//==========================================================================================









//sum of two is equals target

// function sumOfTwo(a,target){
//     n=a.length
//   for(i=0;i<n-1;i++)
//   {
//     for(j=i+1;j<n;j++)
//     {
//         if(a[i]+a[j]==target)
//         {
//             // console.log(a[i],a[j]);
//             return ans=[a[i],a[j]]
//         }
//     }
//   }  
// }
// let a=[6,5,4,3,9,8,0]
// let x=sumOfTwo(a,10)
// for(i=0;i<x.length;i++){
//     console.log(x[i]);
// }
//--------------------------------------------using set add 2 to get target--------------------------
// function sumOfTwoNew(array,tgt){
//     const nums=new Set()
//     for(i=0;i<array.length;i++){
//         let number=array[i]
//         let match=tgt-number
//         if(nums.has(match)){
//             let matched
//             return  matched=[number,match]
//         }
//         else{
//             nums.add(number)
//         }
//     }
//     return
// }
// let a=[6,5,4,3,9,8,0]
// x=sumOfTwoNew(a,10)
// for(i=0;i<x.length;i++){
//     console.log(x[i]);
// }

//--------------------------------------------move same no to end--------------------------

// function move(a,num){
// for(j=a.length-1;j>=0;j--){

//     if(a[j]!=num){
//         for(i=0;i<j;i++){
//             if(a[i]==num){
//                 a[i]=a[j]
//                 a[j]=num
//             }
//         }
//     }
// }
// return a
// }

// const a=[6,1,6,8,10,4,15,6,3,9,6]
// x=move(a,6)
// console.log(a)

//--------------------------------------------singly linked list--------------------------
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
// //--------------------add---------------
//     append(data){
//         const newNode= new Node(data)
        
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         this.tail.next=newNode
//         this.tail=newNode
//     }

// //--------------------delete--------------

//  remove(data){
//     if(!this.head)return;

//     if(this.head.data==data){
//         this.head=this.head.next
//          return
//     }
    
//     let currentNode=this.head

//     while(currentNode.next){
//         if(currentNode.next.data==data){
//             currentNode.next=currentNode.next.next
//             if(!currentNode.next){
//                this.tail=currentNode
//             }
//             return
//         }
//         currentNode=currentNode.next
//     } 
//  }
//  //--------------------insert after--------------

//  insertAfter(data,newData){
//     const newNode=new Node(newData)
//     let currentNode=this.head
//     while(currentNode){
//         if(currentNode.data==data){
//             newNode.next=currentNode.next
//             currentNode.next=newNode
//             if(currentNode.next==null)
//             {
//                 this.tail=currentNode
//             }
//             return
//         }
//         currentNode=currentNode.next
//     }
//     console.log("not found")
//  }




// //---------------------print--------------
//     print(){
//         let currentNode=this.head
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
// }

// const myList=new LinkedList

// myList.append(10)
// myList.append(20)
// myList.append(30)
// myList.append(40)
// myList.append(50)

// myList.print()
// console.log("--------------------------");
// myList.remove(50)

// myList.print()
// console.log("--------------------------");

// myList.insertAfter(30,35)
// myList.print()





//--------------------------------------------doubly linked list--------------------------

// class Node{
//  constructor(data) {
//     this.data=data
//     this.next=null
//     this.prev=null
//  }
// }
// class DoublyLinkedList{
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
        
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         this.tail.next=newNode
//         newNode.prev=this.tail
//         this.tail=newNode
//     }

//     delete(data){
//         let currentNode=this.head
//         if(!currentNode){

//             return
//         }


//         while(currentNode){
//             if(currentNode.data==data){
//                 if(currentNode==this.head&&currentNode==this.tail){
//                     this.tail=null
//                     this.head=null
//                 }
//                 else if(currentNode==this.head){
//                     this.head=currentNode.next
//                     this.head.prev=null
                
//                 }
//                 else if(currentNode==this.tail){
//                     this.tail=this.tail.prev
//                     this.tail.next=null
//                 }
//                 else{
//                     currentNode.prev.next=currentNode.next
//                     currentNode.next.prev=currentNode.prev
//                 }   
//                 return
//             }
//             currentNode=currentNode.next
//         }
//     }

//     insertAfter(data,newData){
//         const newNode=new Node(newData)

//         let currentNode=this.head

//         if(currentNode.data==data){
//             currentNode.next.prev=newNode
//            newNode.next=currentNode.next
//            newNode.prev=currentNode
//            currentNode.next=newNode
//            return
//         }
//         if(this.tail.data==data){
//             this.tail.next=newNode
//             newNode.prev=this.tail
//             this.tail=newNode
//             return
//         }

//         while(currentNode){
//             if(currentNode.data==data){
//                 currentNode.next.prev=newNode
//                 newNode.next=currentNode.next
//                 currentNode.next=newNode
//                 newNode.prev=currentNode

//                 if(currentNode.next==null){
//                  this.tail=currentNode
//                 }
//                 return
//             }
//             currentNode=currentNode.next
//         }
//     }
    
//     insertBefore(data,newData){
//         const newNode=new Node(newData)

//         let currentNode=this.head

//         if(!currentNode){
//             return 
//         }

//         if(currentNode.data==data){
//             newNode.next=currentNode
//             currentNode.prev=newNode
//             this.head=newNode
//             this.head.prev=null
//             return
//         }
//         while(currentNode){
//             if(currentNode.data==data){
//                 newNode.next=currentNode
//                 newNode.prev=currentNode.prev
//                 currentNode.prev.next=newNode
//                 newNode.next=currentNode
//                 return
//             }
//             currentNode=currentNode.next
//         }


//     }


//     print(){
//         let currentNode=this.head
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
//     printReverese(){
//         let currentNode=this.tail
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.prev
//         }
//     }
// }

// const myDList=new DoublyLinkedList

// myDList.add(10)
// myDList.add(20)
// myDList.add(30)
// myDList.add(40)
// myDList.add(50)

// myDList.print()
// console.log("--------------------------");
// // myDList.printReverese()
// // myDList.delete(10)
// // myDList.print()
// console.log("--------------ia------");
// // myDList.insertAfter(10,35)
// // myDList.print()
// console.log("--------------ia------");
// myDList.insertBefore(10,25)
// myDList.print()


//--------------------problems to delete duplicates numbers that are together----------------

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)

//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//       this.tail.next=newNode
//       this.tail=newNode

//     }

//     remDup(){
//         let currentNode=this.head
        
//         while(currentNode){
//             let nextNode=currentNode.next
//             while(nextNode!=null&&currentNode.data==nextNode.data){
//                 nextNode=nextNode.next
//             }
//             currentNode.next=nextNode
//             if(nextNode==this.tail&&currentNode.data==nextNode.data){
//                 this.tail=currentNode
//                 this.tail.next=null
//             }
//             currentNode=currentNode.next
//         }
//     }

//     print(){
//         let currentNode=this.head
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }

// }

// const myList=new LinkedList()

// myList.add(6)
// myList.add(10)
// myList.add(5)
// myList.add(5)
// myList.add(5)
// myList.add(8)
// myList.add(8)
// myList.print()
// console.log("---------------------------");
// myList.remDup()
// myList.print()

//----------------------------------stack -push n pop-------------------------

// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
        
//     }
// }
// class Stack{
//     constructor() {
//         this.top=null
//     }

//     push(data){
//         const newNode= new Node(data)
//         newNode.next=this.top
//         this.top=newNode
//     }

//     pop(){
//         if(this.top==null){
//             console.log("underflow");
//         }
//         else{
//             this.top=this.top.next
//         }
//     }

//     display(){
//         let currentNode=this.top
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
// }

// const myStack=new Stack()

// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.push(4)
// myStack.display()
// console.log("-------------------");
// myStack.pop()
// myStack.display()

//---------------------------------que-------------------------------
// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
        
//     }
// }
// class Queue{
//     constructor() {
//         this.front=null
//         this.rear=null
//     }

//     enqueue(data){
//         const newNode=new Node(data)
//         if(this.rear==null){
//             this.front=this.rear=newNode
            
//         }
//         else{
//             this.rear.next=newNode
//             this.rear=newNode

//         }
//     }

//     dequeue(){
//         if(this.front==null){
//             console.log("empty");
//         }
//         else{
//             this.front=this.front.next
//             if(this.front==null){
//                 this.rear=null
//             }
//         }
//     }
   

//     display(){
//         let currentNode=this.front
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
// }

// const myQueue=new Queue()

// myQueue.enqueue(1)
// myQueue.enqueue(2)
// myQueue.enqueue(3)
// myQueue.enqueue(4)
// myQueue.display()
// console.log("-------------------");
// myQueue.dequeue()


// myQueue.display()

// myQueue.display()

//----------------------------linear search----------------------------------------------------------


// let array=[2,3,4,10,40]
// let n=array.length
// let x=40
// function search(array,n,x){
//     for(i=0;i<n;i++){
//         if(array[i]==x){
//             return i
//         }
//     }
//     return -1
// }

// let result =search(array,n,x)

// result==-1?console.log("not found"):console.log("number found at index",result);

//----------------------------binary search----------------------------------------------------------

// let array =[1,2,3,4,5,6,7,8,9,10]
// let n=array.length
// let x=3

// function binary(array,n,x){
//     let l=0
//     let r=n
//     let m;

//     while(l<=r){
//         m=Math.floor((l+r)/2);

//         if(array[m]==x){
//             return m
//         }
//         if(array[m]<x){
//             l=m+1
//         }
//         else{
//           r=m-1
//         }
//     }
//     return -1
// }

// let result=binary(array,n,x)

// result==-1?console.log("not found"):console.log("foound at index",result);

//----------------------------convert array to linked list----------------------------------------------------------


// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//     append(data){
//         const newNode=new Node(data)

//         if(!this.head){
//             this.head= newNode
//             this.tail= newNode
//             return
//         }
//         this.tail.next=newNode
//         this.tail=newNode
//     }

//     print(){
//         let currentNode=this.head

//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }

//     }
// }

//  let array =[10,20,25,30,32]

//  const mylist=new LinkedList()

//   for(i=0;i<array.length;i++){
//      mylist.append(array[i])
//   }

//   mylist.print()

//------------------------------------practice----------------------------------------------------
//------------------------------------singly practice----------------------------------------------------

// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         let currentNode=this.head

//         if(!currentNode){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         this.tail.next=newNode
//         this.tail=newNode


//     }

//     print(){
//         let currentNode=this.head
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
// }


// const myList=new LinkedList()

// myList.add(10)
// myList.add(20)
// myList.add(30)
// myList.add(40)
// myList.add(50)

// myList.print()

//------------------------------------doubly practice----------------------------------------------------

// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
//         this.prev=null
//     }
// }
// class DoublyLinkedList{
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         let currentNode=this.head

//         if(!currentNode){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         this.tail.next=newNode
//         newNode.prev=this.tail
//         this.tail=newNode

//     }

//     print(){
//         let currentNode=this.head
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
// }


// const myList=new DoublyLinkedList()

// myList.add(10)
// myList.add(20)
// myList.add(30)
// myList.add(40)
// myList.add(50)

// myList.print()

//------------------------------------singly practice----------------------------------------------------
// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)

//         let currentNode=this.head

//         if(!currentNode){
//             this.head=newNode
//             this.tail=newNode
//             return        
//         }
        
//         this.tail.next=newNode
//         this.tail=newNode

        
//     }

//     addBegining(data){

//         const newNode=new Node(data)

//         let currentNode=this.head

//         newNode.next=currentNode
//         this.head=newNode

        

//     }

//     deleteValue(value){

//         let currentNode=this.head

//         if(currentNode.data==value){
//             this.head=currentNode.next
//             return}

      
//             while(currentNode.next){
//                 if(currentNode.next.data==value){
//                     currentNode.next=currentNode.next.next
            
//                 }
//                 if(currentNode.next==null){
//                     this.tail=currentNode
//                     return         

//                 }
//                 currentNode=currentNode.next
//             }  
//         }

//         nodeAfter(value,newData){
//             let currentNode=this.head

//             const newNode=new Node(newData)

//             while(currentNode){
//                 if(currentNode.data==value){

//                     if(currentNode==this.tail){
//                         this.tail=newNode
                         
//                     }
//                     newNode.next=currentNode.next
//                     currentNode.next=newNode
                
//                 }
//                 currentNode=currentNode.next
//             }       
//         }
        
//         insertBefore(value,newData){
//             const newNode=new Node(newData)

//             let currentNode=this.head

//             if(currentNode.data==value){
//                 newNode.next=currentNode
//                 this.head=newNode
//                 return
//             }
//             while(currentNode.next){
//                 if(currentNode.next.data==value){
                   
//                     newNode.next=currentNode.next
//                     currentNode.next=newNode
//                     return
//                 }
//                 currentNode=currentNode.next

//             }
//         }

//         reverse(){
//         }
    
//     display(){
//         let currentNode=this.head
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
// }

// const mylist=new LinkedList()

// mylist.add(10)
// mylist.add(15)
// mylist.add(20)
// mylist.add(25)
// mylist.add(30)

// mylist.display()
// console.log("--------------------");
// mylist.addBegining(55)
// mylist.display()

// mylist.deleteValue(30)
// mylist.display()

// mylist.nodeAfter(30,77)
// mylist.display()
// console.log(mylist.tail.data,"tail");

// mylist.insertBefore(10,77)
// mylist.display()

//--------------------------------------------------------binary search-------------------------------------

// function binary(array,value){
//     let l=0
//     let r=array.length
//     let mid

//     while(l<=r){
//         mid=Math.floor((l+r)/2)

//         if(array[mid]==value){
//             return mid
//         }
//         if(array[mid]<value)
//         {

//             l=mid+1
//         }
//         else{
      
//             r=mid-1
//         }

//     }
//     return -1
// }

// const array=[1,2,5,6,8,10,12,14,16]
// let x=1
// let result=binary(array,x)

// result==-1?console.log("not found"):console.log("value found at index",result);



// function linear(array,target){

// for(i=0;i<array.length;i++){
//     if(array[i]==target){
//         return i
//     }
   
// }
// return -1
// }

// let array=[8,1,7,3,9,11,2]
// let result=linear(array,11)

// result==-1?console.log("not found"):console.log("found at index",result);


// let count=0
// let a=[1,2,3,4,2,5,2,6,2,2]

// for(i=0;i<a.length;i++){

//     if(a[i]==2){
//         if(count==0){
//             a[i]=0
//         }
//         else{
//             a[i]=2*count
//         }
//         count++;
//     }
// }

// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// a=[1,2,3,4,5,6,7,8]
// let l=0
// let r=a.length-1

// for(i=0;i<a.length-1;i++){
//     while(l<r){
 
//         temp=a[l]
//         a[l]=a[r]
//         a[r]=temp
//         l++
//         r--
//     }
// }

// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }

//-----------------------------string---------------------------

// function replaceAlphabet(str, n) {
//     const chars = str.split('');
 
   
//     for (let i = 0; i < chars.length; i++) {
//       const charCode = chars[i].charCodeAt(0);
     
//       if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
       
//         let newCharCode = charCode + n;
 
//         if (charCode >= 65 && charCode <= 90 && newCharCode > 90 || charCode >= 97 && charCode <= 122 && newCharCode > 122) {
//           newCharCode -= 26;
//         }
 
//         chars[i] = String.fromCharCode(newCharCode);
//       }
//     }
 
//     return chars.join('');
//   }
//   const str = 'hello world';
// const n = 3;
// const result = replaceAlphabet(str, n);

// console.log(result);


// function capital(str){
//         const chars=str.split("")

//         for(let i=0;i<chars.length;i++){
                

//                 let charCode=chars[i].charCodeAt(0)
           

//                 if(charCode>=90&&charCode<=120){
//                       let newword=charCode-32
                   
//                       chars[i]=String.fromCharCode(newword)
//                 }

//         }
//         return chars.join("")
// }

// console.log(capital("abc"));


//--------------------------------
// function search(arr,target){
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]==target){
//         return i ;
//       }
//     }
//     return -1
// }
// console.log(search([1,2,3,4,5,6],6))

//----------------------------------------

// let names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
// let target = 'Dave';
// let found = false;


// for (let i = 0; i < names.length; i++) {
//   if (names[i] === target) {
//     found = true;
//     break;
//   }
// }


// if (found) {
//   console.log("Element found in the array.");
// } else {
//   console.log("Element not found in the array.");
// }
//=-----------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 1, 2, 3];
// let counts = [];


// for (let i = 0; i < arr.length; i++) {
//   if (counts[arr[i]]) {
//     counts[arr[i]]++;
//   } else {
//     counts[arr[i]] = 1;
//   }
// }


// for (let key in counts) {
//   if (counts[key] > 1) {
//     console.log(key + " appears " + counts[key] + " times.");
//   }
// }
//-------------------------------------------



        // //sum of array
        // function sumArray(arr) {
        //     if (arr.length === 0) {
        //       return 0;
        //     } else {
        //       return arr[0] + sumArray(arr.slice(1));
        //     }
        //   }
         
        //   console.log(sumArray([1, 2, 3, 4, 5]));
//------------------------------------------------------
// function fibonacci(n){
//     if(n<2){
//        return n
//     }
//                  return fibonacci(n-1)+fibonacci(n-2)
// }
//  console.log(fibonacci(0))
//  console.log(fibonacci(1))
//  console.log(fibonacci(6))  

// //------------------------------------------------
        //factorial recursion
    //     function factorial(n){
    //         if(n===0){
    //             return 1
    //          }
    //                        return n*factorial(n-1)
    //   }
    //         console.log(factorial(0))
    //         console.log(factorial(1))
    //          console.log(factorial(5))
    
    
//              //big O= O(n)

//=============================================================================================

//factorial

// let fact=1

// function factorial(n){

//         if(n<2){
//                 return n
//         }
//         for(let i=2;i<=n;i++){
//                 fact=fact*i
                
//         }
//         return fact
// }

// console.log(factorial(3));

// function recfact(n){

//         if(n==0){
//                 return 1
//         }
//         return n*recfact(n-1)
// }

// console.log(recfact(5));

// function linear(array,target){
//         for(let i=0;i<array.length;i++){
//                 if(array[i]==target)
//                 {
//                         return i
//                 }
//         }
//         return -1
// }

// let array=[0,1,2,3,4,5,6,7]
// let target=5

// let result=linear(array,target)

// console.log(result);
//================================================

// function binary(array,target){

//         let l=0
//         let r=array.length-1
//         let mid;

//         while(l<=r)
//         {
//                 mid=Math.floor((l+r)/2)

//                 if(array[mid]==target){
//                         return mid
//                 }
//                 if(target>mid){
                        
//                         l=mid+1
//                 }
//                 else{
//                         r=mid-1
//                 }
//         }

// }
// let array=[0,1,2,3,4,5,6,7]
// let target=5

// let result=binary(array,target)
// console.log(result);

//========================================================================
//prime number

// function isPrime(n){

//         if(n<2){
//                 return false
//         }
//         for(i=2;i<n;i++){
//                 if(n%i==0){
//                         return false
//                 }
//         }
//         return true;
// }

// console.log(isPrime(10))

// function recPrime(n){

// }

//========================================================
//power of two

// function isPoweroftwo(n){
        
//         if(n<1){
//                 return false;
//         }

//         while(n>1){
//                 if(n%2!=0){
//                         return false
//                 }
//                 else{
//                         n=n/2
//                 }
//         }
//         return true
// }
// console.log(isPoweroftwo(20));
//=================================================================
// let a=[1,2,3,4,5,6,7,8,9,10]
// let n=a.length
// let p=4
// let x=99

// for(let i=n;i>=p;i--){

//         a[i]=a[i-1]

//         if(i==p){
//                 a[i]=x
//         }
// }


// for(i=0;i<=n;i++){
//         console.log(a[i]);
// }
//==========================================================================

// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class LinkedList{
//         constructor() {
//                 this.head=null
//                 this.tail=null
//         }

//         add(data){
                
//                 const newNode=new Node(data)

//                 let currentNode=this.head
//                 if(!currentNode){
                        
//                     this.head=newNode
//                     this.tail=newNode           
//                 }
//                 else{

//                         this.tail.next=newNode
//                         this.tail=newNode
//                 }
//         }

//         addIndex(pos,data){
//                 let currentNode=this.head
//                 count=0
//                 while(currentNode){
//                    count++

//                    if(count==pos){
//                         const newNode=new Node(data)

//                         newNode.next=currentNode.next
//                         currentNode.next=newNode
//                         if(currentNode==this.tail){
//                                 this.tail=newNode
//                         }
//                         return

//                    }
//                    currentNode=currentNode.next
//                 }
                
//         }

//         addHead(data){
//                 const newNode=new Node(data)

//                 newNode.next=this.head
//                 this.head=newNode
//         }

//         addTail(data){
//                 const newNode=new Node(data)

//                 this.tail.next=newNode
//                 this.tail=newNode
//         }

//         addAfter(nextTo,data){
//                 const newNode=new Node(data)

//                let currentNode=this.head
//                 while(currentNode){
//                         if(currentNode.data==nextTo){
//                                 newNode.next=currentNode.next
//                                 currentNode.next=newNode

//                                 if(currentNode==this.tail){
//                                         this.tail=newNode
//                                 }
//                         }
//                         currentNode=currentNode.next
//                 }
//         }



//         delete(data){
//                 let currentNode=this.head

//                 if(currentNode.data==data){
//                         this.head=currentNode.next
//                         return
//                 }
        

//                 while(currentNode.next){
//                         if(currentNode.next.data==data){
//                                 if(currentNode.next==this.tail){
//                                        this.tail= currentNode
//                                 }
//                                 currentNode.next=currentNode.next.next
//                                 return
//                         }
//                         currentNode=currentNode.next

//                 }

//                 console.log("invalid");
//         }


//         display(){
             
//                 let currentNode=this.head
//                 while(currentNode){
//                         console.log(currentNode.data);
//                         currentNode=currentNode.next
//                 }
//         }
// }

// const myList=new LinkedList()

// myList.add(10)
// myList.add(20)
// myList.add(30)
// myList.add(40)
// myList.add(50)
// myList.display()
// console.log("===========================");


// // myList.addIndex(3,99)
// // myList.addHead(777)
// // myList.addTail(111)
// // myList.addAfter(50,999)

// myList.delete(90)
// myList.display()



// console.log(myList.tail.data,"tail");

//================================================================================

// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//                 this.prev=null
//         }
// }
// class doubly{
//         constructor(){
//                 this.head=null
//                 this.tail=null
//         }

//         add(data){
//                 const newNode =new Node(data)

//         }
// }


//==========================recursive binary search============================

// function recursiveBinary(array,l,r,x)
// {
//         if(l<=r){
               
//                let mid = Math.floor((l+r)/2)

//                 if(array[mid]==x){
//                         return mid
//                 }

//                 if(array[mid]>x){

//                         return recursiveBinary(array,l,mid-1,x)
                        
//                 }
                 
//                 return recursiveBinary(array,mid+1,r,x)
        
//         }
//         return -1
// }

// let array=[1,2,4,6,7]
// let n=array.length-1
// let result=recursiveBinary(array,0,n,2)

// console.log(result);


//===================================

// function factorial(n){
// if(n==0){
//         return 1
// }

//         let fact=1
//         for(i=2;i<=n;i++){
//                 fact=fact*i
//         }
// return fact
// }

// console.log(factorial(1));

// function binarySearch(arr, l, r, x){
// 	if (l <= r) {
// 		let mid = Math.floor((r + l) / 2);

// 		if (arr[mid] == x)
// 			return mid;

// 		if (arr[mid] < x)
//                 return binarySearch(arr, mid + 1, r, x);

// 			return binarySearch(arr, l, mid - 1, x);

// 	}
	
// 	return -1;
// }

// let arr = [ 2, 3, 4, 10, 40 ];
// let x = 10;
// let n = arr.length 
// let result = binarySearch(arr, 0, n - 1, x);

// console.log(result);

//=================================fib=====

// function fib(n){
//         const fib=[0,1]

//         for(i=2;i<n;i++)
//         {
//                 fib[i]=fib[i-1]+fib[i-2]
//         }
//         return fib
// }

// console.log(fib(5));

//===========================================

// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }
// class LinkedList{
//         constructor() {
//                 this.head=null
//                 this.tail=null
//         }

//         add(data){
//                 const newNode=new Node(data)

//                 if(!this.head){
//                         this.head=newNode
//                         this.tail=newNode
//                         return
//                 }
//                 this.tail.next=newNode
//                 this.tail=newNode
//                 return

//         }

//         delete(index){
//                 if(index==1){
//                         this.head=this.head.next
//                         return
//                 }
//                 let currentNode=this.head
//                 let count=1
//                 while(currentNode.next){
//                         count++
//                         if(index==count){
//                                 currentNode.next.data=index
//                                 return
//                         }
//                         currentNode=currentNode.next
//                 }
//         }
//         display(){
//                 let currentNode=this.head

//                 while(currentNode){
//                         console.log(currentNode.data);
//                         currentNode=currentNode.next
//                 }
//         }
// }

// const myList=new LinkedList()

// myList.add(10)
// myList.add(20)
// myList.add(30)
// myList.add(40)
// myList.add(50)

// myList.display()
// console.log("===========================");
// // myList.delete(3)
// myList.display()

//=================================

// function fact(n){
//         if(n<2){
//                 return 1
//         }
//         return n*fact(n-1)
// }

// console.log(fact(5));

// function fib(n){
//         const f=[0,1]
//         for(i=2;i<n;i++){
//                 f[i]=f[i-1]+f[i-2]

//         }
//         return f
// }

// console.log(fib(5));

// function fib(n){
//         if(n<2){
//                 return n
//         }
//         return fib(n-1)+fib(n-2)
// }

// console.log(fib(5));

// function binary(array,x,l,r){
      

//         while(l<=r){
//                 mid=Math.floor((l+r)/2)

//                 if(array[mid]==x){
//                         return mid
//                 }
//                 if(array[mid]<x){
//                         return binary(array,x,mid+1,r)
//                 }
//                 return binary(array,x,l,mid-1)
//         }
//         return -1
// }
// let array=[1,2,3,4,5,6,7,8,9]
// x=5
// l=0
// r=array.length-1
// console.log(binary(array,x,l,r));

// const array=[0,1,2,3,4,5,6,7,8,9]
// let n=array.length
// console.log(array,"old");
// let p=5
// let data=5

// for(i=n;i>p;i--){
//         array[i]=array[i-1]
// }
// array[p]=data

// console.log(array,"neww");

// for(i=p;i<n;i++){
//         array[i]=array[i+1]
// }
// for(i=0;i<n-1;i++){
//         console.log(array[i]);
// }

// for(i=0;i<n;i++){
//         if(array[i]==data){

//                  for(j=i;j<n;j++){

//                          array[j]=array[j+1]
//                  }
//                 n--
//         }       
// }
// for(i=0;i<n;i++){
//         console.log(array[i]);
// }

// a=[10,20,10,15,25,35,20,50,80]
// let n=a.length
// let count=0

// for(let i=0;i<n;i++){
//         count=0
//         for(let j=0;j<n;j++){
//                 if(a[i]==a[j]&&i!=j){
//                         count++
//                         break
//                 }
//         }
//         if(count==0){
//                 console.log(a[i]);
//         }

// }


// a=[1,2,3,4,5,6,7,8,9]
// let n=a.length
// let count


// for(i=0;i<n;i++){
//         count=0
//         if(a[i]<2){
//                 count++
//         }
//         for(j=2;j<a[i];j++){
//                 if(a[i]%j==0){
//                         count++
//                         break
//                 }
//         }

//         if(count==0){
//                 console.log(a[i]);
//         }
// }


// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=this.next
//         }
// }
// class LinkedList{
//         constructor() {
//                 this.head=null
//                 this.tail=null
//         }

//         add(data){
//                 const newNode=new Node(data)

//                 if(!this.head){
//                         this.head=newNode
//                         this.tail=newNode
//                         return
//                 }
//                 this.tail.next=newNode
//                 this.tail=newNode
//                 return
//         }

//         delete(data){
//                 if(data==this.head.data){
//                         this.head=this.head.next
//                         return
//                 }
//                 let currentNode=this.head

//                 while(currentNode.next){
//                         if(currentNode.next.data==data){
//                                 if(currentNode.next==this.tail){
//                                         this.tail=currentNode
                                       
//                                 }
//                                 currentNode.next=currentNode.next.next
//                                 return
//                         }
//                         currentNode=currentNode.next
//                 }
//         }

//         addAfter(data,newdata){
//                 const newNode=new Node(newdata)
//                 let currentNode=this.head
//                 while(currentNode){

//                         if(currentNode.data==data){
//                                 if(currentNode==this.tail){
//                                         this.tail=newNode
//                                 }
//                                 newNode.next=currentNode.next
//                                 currentNode.next=newNode
//                                 return
//                         }
//                         currentNode=currentNode.next
//                 }
//         }

//         display(){
//                 let currentNode=this.head
//                 while(currentNode){
//                         console.log(currentNode.data);

//                         currentNode=currentNode.next
//                 }
//         }
// }

// const myList=new LinkedList()

// myList.add(10)
// myList.add(20)
// myList.add(30)
// myList.add(40)

// // myList.display()
// // console.log("------------------");

// // // myList.delete(40)
// // myList.addAfter(40,99)
// // myList.display()
// // console.log(myList.tail.data,"kkkkkk");


// // function factorial(n){
// //         if(n<2){
// //                 return 1
// //         }
// //         return n*factorial(n-1)
// // }

// // let result=factorial(5)
// // console.log(result);

// // function fibonacci(n){
// //         if(n<2){
// //                 return n
// //         }
// //         return fibonacci(n-1)+fibonacci(n-2)
// // }

// // console.log(fibonacci(7));

// //binary search========================================

// // function binary(array,target){
// //         let l=0
// //         let r=array.length-1
// //         let mid

// //         while(l<=r){
// //                 mid=Math.floor((l+r)/2)

// //                 if(array[mid]==target){

// //                         return mid
// //                 }
// //                 if(array[mid]<target){
// //                         l=mid+1

// //                 }
// //                 else{
// //                         r=mid-1
// //                 }
// //         }
// //         return -1
// // }

// function recBinary(array,target,l,r){

//         while(l<=r){
//                 let mid=Math.floor((l+r)/2)

//                 if(array[mid]==target){
//                         return mid
//                 }
//                 if(array[mid]<target){
//                         return recBinary(array,target,mid+1,r)
//                 }
//                 else{
//                         return recBinary(array,target,l,mid-1)
//                 }
//         }
//         return -1
// }


// const array =[0,1,2,3,4,5,6,7,8]
// let target=5
// let l=0
// let r=array.length-1

// console.log(recBinary(array,target,l,r));

//===============================palindrome=====================
// function palindrome(n){

//         let reversed=0
//         let number=n

//         while(n!=0){
//                 let remainder=n%10
//                 reversed=reversed*10+remainder
//                 n=Math.floor(n/10) 
//         }
//         if(reversed==number){
//                 console.log("palindrome");
//         }
//         else{
//                 console.log("not");
//         }
// }

// palindrome(12521)

//===============================reverse=======================
// function reverse(str){
//     let reversed=""
//     for(i=str.length-1;i>=0;i--){
//          reversed=reversed+str[i]
//     }
//     return reversed
// }

// console.log(reverse("hai"));




// function reverse(str){

//         const char=str.split('')
    
//         // for(i=0;i<char.length;i++){
    
//         // }
    
//         let l=0
//         let r=char.length-1
    
//         while(l<r){
//             temp=char[l]
//             char[l]=char[r]
//             char[r]=temp
    
//             l++
//             r--
//         }
//         let str=char.join("")
//         return str
//     }
    
//     let str="hai"
//     console.log(reverse(str));

//==========================================================//week2 ds//================================================

//========================================================buybble sort===================================================

// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }

//   const array=[10,50,20,40,80,30,90,70]
//   console.log(bubbleSort(array));

//========================================================insertion sort===================================================


// function insertion(a){
//     let n=a.length

//     for(i=1;i<n;i++){
        
//         let value=a[i]
//         for(j=i-1;j>=0&&a[j]>value;j--){
//             a[j+1]=a[j]
//         }
//         a[j+1]=value
//     }
//     return a
// }

// const a=[4,2,6,1,9,8]
// console.log(insertion(a));

//========================================================================

// function bubble(array){

//     let n=array.length

//     for(i=0;i<n;i++){

//         for(j=0;j<n-1-i;j++){
//             if(array[j]>array[j+1]){
                
//                 temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//             }
//         }
//     }
//     return array
// }

// const array=[5,3,7,2,9,1,8]

// console.log(bubble(array));

//=======================================selection sort==========================

// function selection(array){

//     let n= array.length

//     for(i=0;i<n-1;i++){

//         let min=array[i]

//         for(j=i+1;j<n;j++){
//             if(array[min]>array[j]){

//                min=j

//                 temp=array[min]
//                 array[min]=array[i]
//                 array[i]=temp
//             }
//         }
//     }
//     return array
// }

// const array=[5,3,7,4,9,2,11,8]

// console.log(selection(array));
//===========================================selection sort correct method================

// function selection(array){
//     let n=array.length

//     for(i=0;i<n-1;i++){
//         let min=i
//         for(j=i+1;j<n;j++){
//             if(array[j]<array[min]){
//                 min=j
//             }
//         }
//         if(i!=j){
//             temp=array[i]
//             array[i]=array[min]
//             array[min]=temp
//         }
//     }
//     return array
// }

// const array=[10,5,25,12,8,22,24]

// console.log(selection(array));

//======================================= practice===================================

//bubble sort

// function bubble(array){
//     let n=array.length
//     for(i=0;i<n;i++){
    
//         for(j=0;j<n-1-i;j++){
//             if(array[j]>array[j+1]){
//                 temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//             }
//         }
//     }
//     return array
// }

// const array=[10,5,25,12,8,22,24]
// console.log(bubble(array));

//insertion sort

// function insertion(a){
//     let n=a.length

//     for(i=1;i<n;i++)
//     {
//        let value=a[i]

//         for(j=i-1;j>=0&&a[j]>value;j--)
//         {
//            a[j+1]=a[j]
//         }
//         a[j+1]=value
//     }
//     return a
// }

// const array=[10,5,25,12,8,22,24]
// console.log(insertion(array));


//selection sort

// function selection(array){

//     let n=array.length

//     for(i=0;i<n-1;i++){

//         let min=i
        
//         for(j=i+1;j<n;j++){
//             if(array[j]<array[min]){
//                 min=j
//             }
//         }
//         if(i!=j){
//             temp=array[i]
//             array[i]=array[min]
//             array[min]=temp
//         }
//     }
//     return array
// }

// const array=[10,5,25,12,8,22,24]

// console.log(selection(array));

//==============================================quick sort====================
// function partition(a, l, r) {
//     let pivot = a[l];
//     let i = l + 1;
//     let j = r;
  
//     while (i <= j) {
//       while (a[i] < pivot) {
//         i++;
//       }
//       while (a[j] > pivot) {
//         j--;
//       }
  
//       if (i <= j) {
//         let temp = a[i];
//         a[i] = a[j];
//         a[j] = temp;
//         i++;
//         j--;
//       }
//     }
  
//     let temp = a[l];
//     a[l] = a[j];
//     a[j] = temp;
  
//     return j;
//   }
  
//   function quicksort(a, l, r) {
//     if (l < r) {
//       let p = partition(a, l, r);
//       quicksort(a, l, p - 1);
//       quicksort(a, p + 1, r);
//     }
//     return a;
//   }
  
//   const array = [5, 2, 7, 4, 9, 3, 6, 12];
//   let l = 0;
//   let r = array.length - 1;
  
//   const sortedArray = quicksort(array, l, r);
//   console.log(sortedArray);
  
//==============================merge sort==========================


// function mergeSort(a,lb,ub){
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)

//         mergeSort(a,lb,mid)
//         mergeSort(a,mid+1,ub)
//       merge(a,lb,mid,ub)
//     }
// }

// function merge(a,lb,mid,ub){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     const b=[]


//     while(i<=mid&&j<=ub){
//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }
//         else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }

    
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//         while(j<=ub){
//             b[k]=a[j]
//             j++
//             k++
//         }
    
//         for(let x=lb;x<=ub;x++){
//             a[x]=b[x]
//         }
   
    
   
// }

// const array=[5,2,7,8,3,11,6,12]

// let lb=0
// let ub=array.length-1

// mergeSort(array,lb,ub)

// console.log(array);

//================================================merge sort==============================


// function mergeSort(a,lb,ub){

//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)

//         mergeSort(a,lb,mid)
//         mergeSort(a,mid+1,ub)
//         merge(a,lb,mid,ub)
//     }
// }

// function merge(a,lb,mid,ub){
    
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid&&j<=ub){
//         if(a[i]<a[j]){
            
//             b[k]=a[i]
//             i++
//         }
//         else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }

//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub)
//     {
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }
// }



// const array=[3,6,1,8,4,9,7,2]

// let lb=0
// let ub=array.length-1

// mergeSort(array,lb,ub)
// console.log(array);


//========================================bubble sort==========================


// function bubbleSort(array){

//     let n=array.length

//     for(i=0;i<n;i++){

//         for(j=0;j<n-1-i;j++){

//             if(array[j]>array[j+1]){
//                 temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//             }

//         }
//     }
//     return array
// }

// const array=[2,7,3,9,4,6,5,1]
// console.log(bubbleSort(array));

//========================================insertion sort=========================


// function insertionSort(a){

//     let n=a.length

//     for(i=1;i<n;i++){
//         let value=a[i]

//         for(j=i-1;j>=0&&a[j]>value;j--){
            
//             a[j+1]=a[j]
//         }
//         a[j+1]=value
//     }
//     return a
// }

// const array=[2,7,3,9,4,6,5,1]

// console.log(insertionSort(array));

//=======================================selection sort========================


// function selectionSort(a){

//     let n=a.length

//     for(i=0;i<n-1;i++){

//         let min=i

//         for(j=i+1;j<n;j++){

//             if(a[j]<a[min]){
//                 min=j
//             }
//         }
//         if(min!=i){

//             temp=a[i]
//             a[i]=a[min]
//             a[min]=temp
//         }
//     }
// }

// const array=[2,7,3,9,4,6,5,1]
// selectionSort(array)
// console.log(array);

//================================quick sort======================

// function partition(a,l,r){
//     let pivot=a[l]
//     let i=l+1
//     let j=r

//     while(i<=j){

//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }

//         if(i<=j){
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//             i++
//             j--
//         }
//     }

//     temp=a[j]
//     a[j]=a[l]
//     a[l]=temp
// return j
// }

// function quicksort(a,l,r){
//     if(l<r){
//         let p=partition(a,l,r)

//         quicksort(a,l,p-1)
//         quicksort(a,p+1,r)
//     }
// }

// const array=[10,3,27,5,12,19,2,11,200]

// let l=0
// let r=array.length-1

// quicksort(array,l,r)
// console.log(array);

//======================================bubble sort====================


// function bubble(a){

// let n=a.length

//     for(i=0;i<n;i++)
//     {
//         for(j=0;j<n-1-i;j++){

//             if(a[j]>a[j+1]){
                
//                 temp=a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp
//             }
//         }
//     }
// }

//  const array=[10,3,27,5,12,19,2,11,200]

//  bubble(array)
//  console.log(array);

//=======================================insertion sort===================

// function insertion(a){

//     let n=a.length

//     for(i=1;i<n-1;i++){

//         let value=a[i]

//         for(j=i-1;j>=0&&a[j]>value;j--){
//             a[j+1]=a[j]
//         }
//         a[j+1]=value
//     }
// }

// const array=[10,3,27,5,12,19,2,11,200]
// insertion(array)
// console.log(array);

//====================================selection sort===============================

// function selection(a)
// {
//     let n=a.length

//     for(i=0;i<n;i++){
//        min=i
//         for(j=i+1;j<n;j++){

//             if(a[j]<a[min]){

//                 min=j

//             }
//         }
//         if(min!=i){
//             temp=a[i]
//             a[i]=a[min]
//             a[min]=temp
//     }
//     }

// }

// const array=[10,3,27,5,12,19,2,11,200]
// selection(array)
// console.log(array);

///==========================================merge sort=======================

// function mergeSort(a,lb,ub){
    
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)

//         mergeSort(a,lb,mid)
//         mergeSort(a,mid+1,ub)

//         merge(a,lb,mid,ub)
    
//     }
// }

// function merge(a,lb,mid,ub){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid&&j<=ub){

//         if(a[i]<=a[j]){
//             b[k]=a[i]
//             i++
//         }
//         else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }

// }

// const array=[10,3,27,5,12,19,2,11,200]
// let lb=0
// let ub=array.length-1

// mergeSort(array,lb,ub)
// console.log(array);



//==================================================stack ===================================

// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class Stack{
//         constructor() {
//                 this.top=null
//         }

//         push(data){
//                 const newNode=new Node(data)
//                 if(!this.top){
//                      this.top=newNode
//                 }
//                 else{
//                         newNode.next=this.top
//                         this.top=newNode
//                 }
//         }

//         pop(){
//                 if(!this.top){
//                         console.log("underflow");
//                 }
//                 else{
//                       const  popedValue=this.top.data        
//                         this.top=this.top.next
//                         return popedValue
//                 }
//         }
//         display(){
//                 let currentNode=this.top
//                 while(currentNode){
//                         console.log(currentNode.data);
//                         currentNode=currentNode.next
//                 }
//         }
// }


// const myStack=new Stack()

// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)

// myStack.display()
// console.log("==================");
// popedValue=myStack.pop()
// myStack.display()
// console.log("=====================");

//  console.log("poped value:",popedValue);


//=======================================undo redo===============================

// class Stack{
//         constructor(data) {
//                 this.array1=[]
//                 this.array2=[]
//         }

//         push(data){
//                 this.array1.push(data)
//         }
        
//         undo(){
//                 this.array2.push(this.array1.pop())
//         }
//         redo(){
//                 if (this.array2.length > 0) {
//                         this.array1.push(this.array2.pop());
//                       }
                  
//         }

//         display(){
//                 for(let i=0;i<this.array1.length;i++){
//                         console.log(this.array1[i]);
//                 }
//         }
// }

// const myStack=new Stack()

// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)

// myStack.display()
// console.log("==================");
// // myStack.undo()
// myStack.redo()
// myStack.display()

//===================================undo redo===============================

// class Stack{
//         constructor() {
//                 this.array=[]
//                 this.tempArray=[]
//         }

//         push(data){
//                 this.array.push(data)
//         }
//         pop(){
//                 this.array.pop()
//         }
//         undo(){
//                 this.tempArray.push(this.array.pop())
//         }
//         redo(){
//                 if(this.tempArray>0){
//                         this.array.push(this.tempArray.pop())
//                 }
//         }

//         display(){
//                 for(let i=0;i<this.array.length;i++){
//                      console.log(this.array[i]);
//                 }
//         }
// }


// const myStack=new Stack()

// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)

// myStack.display()
// console.log("=========================");

// // myStack.undo()
// // myStack.display()
// // console.log("-----------------------------");
// // myStack.redo()
// // myStack.display()

// myStack.pop()
// myStack.display()

//=========================================queue===========================


// class Node{

//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class Queue{
//         constructor() {
//                 this.front=null
//                 this.rear=null
//         }

//         enqueue(data){
//                 const newNode=new Node(data)
//                 if(!this.front){
//                      this.front=this.rear=newNode

//                 }
//                 else{
//                         this.rear.next=newNode
//                         this.rear=newNode
//                 }
//         }

//         dequeue(){
                
//                 if(this.front==null){
//                         console.log("empty");
//                 }
//                 else{
//                         this.front=this.front.next
//                         if(this.front==null){
//                                 this.rear=null
//                         }
//                 }
//         }

//         display(){
//                 let currentNode=this.front
//                 while(currentNode){
//                         console.log(currentNode.data);
//                         currentNode=currentNode.next
//                 }
//         }
// }


// const myQueue=new Queue()

// myQueue.enqueue(10)
// myQueue.enqueue(20)
// myQueue.enqueue(30)
// myQueue.enqueue(40)
// myQueue.enqueue(50)

// myQueue.display()
// console.log(myQueue.front.data,"of");
// console.log("--------------------");

// myQueue.dequeue()
// console.log(myQueue.front.data,"nf");

// myQueue.display()

//=======================================stack string=============================


// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class Stack{
//         constructor() {
//                 this.top=null
//         }

//         push(data){
//                 const newNode=new Node(data)
//                 if(!this.top){
//                         this.top=newNode
                        
//                 }
//                 else{
//                         newNode.next=this.top
//                         this.top=newNode
//                 }
//         }

//         pop(){
//                 if(!this.top){
//                         console.log("underflow");
//                 }
//                 else{
//                       let  poped=this.top.data
//                         this.top=this.top.next
//                         return poped
                        
//                 }
//         }
//         display(){
//                 let currentNode=this.top
//                 while(currentNode){
//                         console.log(currentNode.data);
//                         currentNode=currentNode.next
//                 }
//         }
// }

// const myStack=new Stack()

// let str="KERALA"



// for(let i=0;i<str.length;i++)
// {
//         myStack.push(str[i])
// }

// myStack.display()

// console.log("===============================");

// let reversed=""
// for(i=0;i<str.length;i++){
//         reversed+=myStack.pop()
// }



// console.log(reversed,"reversed name");

//========================================================================stack reverse array=====================


// class stack{
//         constructor() {
//                 this.array=[]
//         }

//         push(data){
//                 this.array.push(data)
//         }

//         pop(){

//                 return this.array.pop()
                
//         }

//         display(){
//                 for(i=0;i<this.array.length;i++){
//                         console.log(this.array[i]);
//                 }
//         }
// }

// const myStack=new stack()

// let str="KERALA"

// for(i=0;i<str.length;i++){
//         myStack.push(str[i])
// }

// myStack.display()

// console.log("----------------");


// let reversed=""
// for(i=0;i<str.length;i++){
//         reversed+=myStack.pop()
// }

// console.log(reversed);

//===============================================

//bubble sort


// function bubble(arr){

//         let n=arr.length

//         for(i=0;i<n;i++){

//                 for(j=0;j<n-1-i;j++){

//                         if(arr[j]>arr[j+1]){
                                
//                                 temp=arr[j]
//                                 arr[j]=arr[j+1]
//                                 arr[j+1]=temp
//                         }
//                 }
//         }
// }

// const arr=[10,20,15,25,30,22,18,50]

// bubble(arr)

// console.log(arr);
//============================================================================

//insertion sort

// function insert(a){

//         let n=a.length

//         for(i=1;i<n;i++){

//                 let value=a[i]

//                 for(j=i-1;j>=0&&a[j]>value;j--){

//                         a[j+1]=a[j]

//                 }
//                 a[j+1]=value
//         }
// }

// const arr=[10,20,15,25,30,22,18,50]

// insert(arr)

// console.log(arr);

//=======================selection sort=================

// function selection(a){

//         let n=a.length

//         for(i=0;i<n;i++){
                
//                 let min=i

//                 for(j=i+1;j<n;j++){
//                         if(a[j]<a[min])
//                         min=j
//                 }

//                 if(min!=i){
//                         temp=a[i]
//                         a[i]=a[min]
//                         a[min]=temp
//                 }
//         }
// }

// const arr=[10,20,15,25,30,22,18,50]

// selection(arr)

// console.log(arr);

//================================= quick sort =============================


// function partition(a,l,r){
//         let pivot=a[l]
//         let i=l+1
//         let j=r

//         while(i<j){
//                 while(a[i]<pivot){
//                         i++
//                 }
//                 while(a[j]>pivot){
//                         j--
//                 }

//                 if(i<=j){
//                         temp=a[i]
//                         a[i]=a[j]
//                         a[j]=temp
//                 }
//         }

//         temp=a[l]
//         a[l]=a[j]
//         a[j]=temp

//         return j

// }

// function quicksort(a,l,r){
//         if(l<r){
//                 let p=partition(a,l,r)

//                 quicksort(a,l,p-1)
//                 quicksort(a,p+1,r)
//         }
// }

// const arr=[10,20,15,25,30,22,18,50]

// let l=0
// let r=arr.length-1
// quicksort(arr,l,r)

// console.log(arr);

//==========================merge sort======================


// function mergeSort(a,lb,ub){
//         if(lb<ub){

//                 let mid=Math.floor((lb+ub)/2)

//                 mergeSort(a,lb,mid)
//                 mergeSort(a,mid+1,ub)

//                 merge(a,lb,mid,ub)
//         }
// }

// function merge(a,lb,mid,ub){

//         let i=lb
//         let j=mid+1
//         let k=lb
//         let b=[]

//         while(i<=mid&&j<=ub){

//                 if(a[i]<=a[j]){
//                         b[k]=a[i]
//                         i++
//                 }
//                 else{
//                         b[k]=a[j]
//                         j++
//                 }
//                 k++
//         }

//         while(i<=mid){

//                 b[k]=a[i]
//                 i++
//                 k++
//         }
//         while(j<=ub){
//                 b[k]=a[j]
//                 j++
//                 k++
//         }

//         for(let x=lb;x<=ub;x++){
//                 a[x]=b[x]
//         }
// }


// const arr=[10,20,15,25,30,22,18,50]

// let lb=0
// let ub=arr.length-1

// mergeSort(arr,lb,ub)

// console.log(arr);

//======================================================================hash table===========================


// class hashTable{
//         constructor(size) {

//                 this.table=new Array(size)
//                 this.size=size
                
//         }

//         hash(key){
//                 let total=0

//                 for(let i=0;i<key.length;i++){
                        
//                         total+=key.charCodeAt(i)
//                 }
//                 return total%this.size
//         }

//         set(key,value){
                
//                 const index=this.hash(key)
//                 this.table[index]=value
//         }

//         get(key){
//                 const index=this.hash(key)
//                 return this.table[index]
//         }

//         remove(key){
//                 const index=this.hash(key)
//                 this.table[index]=undefined
//         }

//         display(){
//                 for(let i=0;i<this.table.length;i++){
//                         if(this.table[i])
//                         console.log(i,this.table[i]);
//                 }
//         }
// }

// const table=new hashTable(20)

// table.set("names","ridin")
// table.set("place","kannur")
// table.set("age",29)

// table.display()


//=============================================hash table collision handled=====================


// class hashTable{
//         constructor(size) {
//                 this.table=new Array(size)
//                 this.size=size
//         }

//         hash(key){
//                 let total=0
//                 for(let i=0;i<key.length;i++){
//                         total+=key.charCodeAt(i)
//                 }
//                 return total%this.size
//         }

//         set(key,value){

//                 const index=this.hash(key)

//                 const bucket=this.table[index]

//                 if(!bucket){
//                         this.table[index]=[[key,value]]
//                 }
//                 else{
//                         const sameKey=bucket.find((item)=>item[0]===key)

//                         if(sameKey){
//                                 sameKey[1]=value
//                         }
//                         else{
//                                 bucket.push([key,value])
//                         }

//                 }
//         }

//         get(key){
//                 const index=this.hash(key)

//                 const bucket=this.table[index]
//                 if(bucket){
//                         const sameKey=bucket.find((item)=>item[0]===key)

//                         if(sameKey){
//                                 return sameKey[1]
//                         }
//                 }
//                 return undefined
//         }

//         remove(key){
//                 const index=this.hash(key)

//                 const bucket=this.table[index]

//                 if(bucket){
//                         const sameKey=bucket.find((item)=>item[0]===key)
//                         if(sameKey){
//                                 bucket.splice(bucket.indexOf(sameKey),1)
//                         }
//                 }
//         }

//         display(){
                
//                 for(let i=0;i<this.table.length;i++){
//                         if(this.table[i]){
//                                 console.log(i,this.table[i]);
                               
//                         }
//                 }
//         }
// }

// const table=new hashTable(50)

// table.set("name","ridin")
// table.set("mane","mizhi")
// table.set("district","kannur")
// table.set("age",20)

// // table.display()
// console.log("------------------------");
// // console.log(table.get("age"));
// table.remove("age")
// table.display()
// // console.log(table.get("age"));

//======================================================hash practice=========================


// class hashTable{
//         constructor(size) {
//                 this.table=new Array(size)
//                 this.size=size
//         }

//         hash(key){
//                 let total=0

//                 for(i=0;i<key.length;i++){
//                         total+=key.charCodeAt(i)
//                 }
//                 total%this.size
//         }

//         set(key,value){
        
//                 const index=this.hash(key)

//                 const bucket=this.table[index]

//                 if(!bucket){
//                         this.table[index]=[[key,value]]
//                 }
//                 else{
//                         const sameKey=bucket.find((item)=>item[0]===key)
//                         if(sameKey){
//                                 sameKey[1]=value
//                         }
//                         else{
//                                 bucket.push([key,value])
//                         }
//                 }
//         }


//         get(key){
//                 const index=this.hash(key)
//                 const bucket=this.table[index]

//                 if(bucket){
//                         const sameKey=bucket.find((item)=>item[0]===key)

//                         if(sameKey){
//                                 return sameKey[1]
//                         }
//                 }
//                 return undefined
//         }

//         remove(key){
//                 const index=this.hash(key)

//                 const bucket =this.table[index]

//                 if(bucket){
//                         const sameKey=bucket.find((item)=>item[0]===key)
//                         if(sameKey){
//                                 bucket.splice(bucket.indexOf(sameKey),1)
//                         }
//                 }
//         }

//         display(){
//                 for(i=0;i<this.table.length;i++){
//                         if(this.table[i]){
//                                 console.log(i,this.table[i]);
//                         }
//                 }
//         }
// }

//=======================================stack middle element======================


// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class Stack{
//         constructor() {
//                 this.top=null
//                 this.size=0
//         }

//         push(data){
//                 const newNode=new Node(data)

//                 if(!this.top){
//                         this.top=newNode
//                 }
//                 else{
//                         newNode.next=this.top
//                         this.top=newNode
//                 }
//                 this.size++
                
//         }
//         deletemiddle(){
//                 let currentNode=this.top
//                 let cout=0
//                 let mid=Math.floor(this.size/2)
//                 console.log(mid,"mid");
//                 while(currentNode){
//                         cout++
//                         if(mid==cout){
//                                 currentNode.next=currentNode.next.next
//                         }
//                         currentNode=currentNode.next

//                 }
//         }

//         display(){
//                 let currentNode=this.top
//                 while(currentNode){
//                         console.log(currentNode.data);

//                         currentNode=currentNode.next
//                 }
//         }
// }


// const myStack=new Stack()

// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)
// myStack.push(60)


// myStack.display()
// console.log("-------------------");
// myStack.deletemiddle()
// myStack.display()


//===============================================stack using array====================\\

// class Stack{
//         constructor() {

//                 this.array=[]
//                 this.array2=[]
//         }

//         push(data){
//                 this.array.push(data)
//         }
//         pop(){
//                 this.array.pop()
//         }
//         undo(){
//                 this.array2.push(this.array.pop())
//         }
//         redo(){
//                 this.array.push(this.array2.pop())
//         }
//         display(){
//                 for(let i=0;i<this.array.length;i++){
//                         console.log(this.array[i]);
//                 }
//         }
// }

// const myStack=new Stack()

// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)

// myStack.display()

// console.log("===================");

// myStack.undo()
// myStack.display()
// console.log('-----------------------');

// myStack.redo()
// myStack.display()

//=================================================bubble sort =============================

// function bubble(a){
//         let n=a.length
//         for(i=0;i<n;i++){

//                 for(j=0;j<n-1-i;j++){
                        
//                         if(a[j]>a[j+1]){
//                                 temp=a[j]
//                                 a[j]=a[j+1]
//                                 a[j+1]=temp
//                         }
//                 }
//         }
// }

// const arr=[10,5,25,12,29,2,18]

// bubble(arr)
// console.log(arr);

//================================================insertin =========================

// function insertion(a){
//         let n=a.length

//         for(i=1;i<n;i++){
                
//                 let value=a[i]

//                 for(j=i-1;j>=0&&a[j]>value;j--){
                        
//                 a[j+1]=a[j]                
                        
//                 }
//                 a[j+1]=value
//         }
// }

// const arr=[10,5,25,12,29,2,18]
// insertion(arr)

// console.log(arr);

//==============================================selection========================

// function selection(a){

//         let n=a.length

//         for(i=0;i<n-1;i++){
                
//                 let min=i

//                 for(j=i+1;j<n;j++){

//                         if(a[j]<a[min]){
//                                 min=j
//                         }
//                 }
//                 if(i!=min){
//                         temp=a[i]
//                         a[i]=a[min]
//                         a[min]=temp
//                 }
//         }
// }

// const arr=[10,5,25,12,29,2,18,1,99]

// selection(arr)

// console.log(arr);

//====================================== sample workout====================

// function bubbleSort(a){
//         let n=a.length

//         for(let i=0;i<n;i++){

//                 for(j=0;j<n-1-i;j++){
//                         if(a[j]>a[j+1]){
//                                 temp=a[j]
//                                 a[j]=a[j+1]
//                                 a[j+1]=temp
//                         }
//                 }
//         }
// }

// const arr=[20,10,15,18,2,28,12,11]
// bubbleSort(arr)

// console.log(arr);

//=======================================

// function insertionSort(a){

//         let n=a.length

//         for(i=1;i<n;i++){
//                 let value=a[i]

//                 for(j=i-1;j>=0&&a[j]>value;j--){

//                         a[j+1]=a[j]
//                 }
//                 a[j+1]=value
//         }
// }

// const arr=[20,10,15,18,2,28,12,11]
// insertionSort(arr)
// console.log(arr);

//=================================selection

function selection(a){
        let n=a.length

        for(i=0;i<n;i++){
                
                let min=i
                for(j=i+1;j<n;j++){

                        if(a[j]<a[min]){
                            
                                min=j
                        }
                        
                }
                if(i!=min){
                        temp=a[i]
                        a[i]=a[min]
                        a[min]=temp
                }
        }
}

const arr=[20,10,15,18,2,28,12,11]
selection(arr)
console.log(arr);
