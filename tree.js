
class Node{
        constructor(data) {
                this.data=data
                this.left=null
                this.right=null
        }
}
class Bst{
        constructor() {
                this.root=null
        }

        insert(data){
                const  newNode=new Node(data)

                let currentNode=this.root

                if(!currentNode){
                        this.root=newNode
                }
                else{
                        while(true){
                                
                                if(data<currentNode.data){
                                        if(currentNode.left==null){
                                                currentNode.left=newNode
                                                break
                                        }
                                        else{
                                                currentNode=currentNode.left
                                        }
                                }
                                else{
                                        if(currentNode.right==null){
                                                currentNode.right=newNode
                                                break
                                        }
                                        else{
                                                currentNode=currentNode.right
                                        } 
                                }
                        }
                }
        }

        min(){
                let currentNode=this.root
                let min;
                while(currentNode){
                         min=currentNode.data
                        currentNode=currentNode.left
                }
                return min
        }

        contains(data){

                let currentNode=this.root
                while(currentNode){
                        if(data<currentNode.data){
                                currentNode=currentNode.left
                        }
                        else if(data>currentNode.data){
                                currentNode=currentNode.right
                        }
                        else{
                                return true
                        }
                }
                return false
        }

        isBst(){
                return this.isBstHelper(this.root,0,Infinity)

        }
        isBstHelper(node,min,max){
                if(!node){
                        return true
                }
                if(node.data<min||node.data>max)
                        return false
                return (
                        (this.isBstHelper(node.left, min, node.data - 1)) &&
                        (this.isBstHelper(node.right, node.data + 1, max))
                    );
                                
        }

        inOrder(){
                this.inOrderHelper(this.root)
        }
        inOrderHelper(node){
                if(node){
                        this.inOrderHelper(node.left)
                        console.log(node.data);
                        this.inOrderHelper(node.right)
                }
        }

}


const myBst =new Bst()

myBst.insert(20)
myBst.insert(50)
myBst.insert(10)
myBst.insert(40)
myBst.insert(5)
myBst.insert(55)
myBst.insert(15)

myBst.inOrder()

console.log(myBst.min(),"min value");

console.log(myBst.isBst());

console.log(myBst.contains(10));