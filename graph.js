class Graph {
    constructor() {
        this.map = new Map();
    }
    addVertex(vertex) {
        this.map.set(vertex, []);
    }
    insert(vertex, edge, isbidirection = false) {
        if (!this.map.has(vertex)) {
            this.addVertex(vertex);
        }
        if (!this.map.has(edge)) { 
            this.addVertex(edge);
        }
        this.map.get(vertex).push(edge);
        if (isbidirection) {
            this.map.get(edge).push(vertex);
        }
    }

    delete(vertex) {
        if (this.map.has(vertex)) {

          for (let [key, value] of this.map) {
            let index = value.indexOf(vertex);
            if (index >= 0) {
              value.splice(index, 1);
            }
          }
          this.map.delete(vertex)
            // let edges = this.map.get(vertex);
            // // console.log(edges);
            // for (let edge of edges) {
            //     const edgeArray = this.map.get(edge);
            //     const index = edgeArray.indexOf(vertex);
            //     if (index >= 0) {
            //         edgeArray.splice(index, 1);
            //     }
            // }
            // this.map.delete(vertex);
        }
    }

    dfsTraversal(startVertex) {
        const visited = new Set(); // Track visited vertices
        this.dfsHelper(startVertex, visited);
      }
      
      dfsHelper(vertex, visited) {
        visited.add(vertex);
        console.log(vertex);
        
        const edges = this.map.get(vertex);
        for (const edge of edges) {
          if (!visited.has(edge)) {
            this.dfsHelper(edge, visited);
          }
        }
      }

      //=============================================

      bfsTraversal(startVertex) {
        const visited = new Set(); // Track visited vertices
        const queue = []; // Queue for BFS traversal
        queue.push(startVertex);
        visited.add(startVertex);
        
        while (queue.length > 0) {
          const vertex = queue.shift();
          console.log(vertex);
          
          const edges = this.map.get(vertex);
          for (const edge of edges) {
            if (!visited.has(edge)) {
              visited.add(edge);
              queue.push(edge);
            }
          }
        }
      }
    
    
    display() {
        for (let vertex of this.map.keys()) {
            let temp = this.map.get(vertex);
            console.log(vertex, temp);
        }
    }
}
let obj = new Graph();
obj.insert("A", 1);
obj.insert("B", 2);
obj.insert("C", 1,true);
obj.insert("D", 'A',true);
obj.display();
console.log("================");
obj.delete("A");
obj.display();

// const myGraph=new Graph()

// myGraph.insert("A",1)
// myGraph.insert("B",2)
// myGraph.insert("B",10,true)
// myGraph.insert("A",5)
// myGraph.insert("C","K",true)
// myGraph.insert("K",5)

//  myGraph.delete("C")

// myGraph.display()