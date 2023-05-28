
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