class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    addLeft(value){
        this.children[0] = new Node(value);
    }

    addRight(value){
        this.children[1] = new Node(value);
    }

    *[Symbol.iterator](){
        yield this.value;
        for(let child of this.children){
            yield* child;
        }
    }
}

class Tree{
    constructor(value){
        this.root = new Node(value);
    }
}

class Observer{
    getArray(node){
        let values = [];
        for(let value of node){
            values.push(value);
        }
        return values;
    }

    sum(node){
        let values = this.getArray(node);
        let sum = 0;
        values.map(value => { sum += value; });

        return sum;
    }

    avg(node){
        let avg = 0;
        let sum = this.sum(node);
        let count = this.getArray(node).length;

        avg = sum/count;
        return avg;
    }

    med(node){
        let med = 0;

        let values = this.getArray(node);
        values.sort();
        let count = values.length;

        if(count%2 === 1){
            med = values[Math.floor(count/2)];
        }else{
            med = ((values[Math.floor(count/2 - 1)] + values[Math.floor(count/2)])/2);
        }

        return med;
    }
}

function print(node){
    const observer = new Observer();
    console.log(`nodes: [${observer.getArray(node)}]`);
    console.log(`sum = ${observer.sum(node)}`);
    console.log(`average = ${observer.avg(node)}`);
    console.log(`median = ${observer.med(node)}\n`);
}

/* 0 - Left node 1 - Right node */

(function newTree(){
    /*Exapme from email*/
    const tree = new Tree(5);
    with(tree){
        root.addLeft(3);
        root.addRight(7);

        root.children[0].addLeft(2);
        root.children[0].addRight(5);

        root.children[1].addLeft(1);
        root.children[1].addRight(0);

        root.children[1].children[1].addLeft(2);
        root.children[1].children[1].addRight(8);

        root.children[1].children[1].children[1].addLeft(5);

        print(root);
        print(root.children[0]);
        print(root.children[1].children[1]);
    }
    /*Test tree 1 */
    const tree2 = new Tree(2);
    with(tree2){
        root.addLeft(7);
        root.addRight(5);

        root.children[0].addLeft(2);
        root.children[0].addRight(6);

        root.children[0].children[1].addLeft(5);
        root.children[0].children[1].addRight(11);

        root.children[1].addLeft(9);
        root.children[1].children[0].addLeft(4);

        print(root);
        print(root.children[0].children[1]);
        print(root.children[1]);
    }

    /*Test tree 2*/
    const tree3 = new Tree(11);
    with(tree3){
        root.addLeft(6);
        root.addRight(19);

        root.children[0].addLeft(4);
        root.children[0].addRight(8);

        root.children[0].children[0].addLeft(5);
        root.children[0].children[1].addLeft(10);

        root.children[1].addLeft(17);
        root.children[1].addRight(43);

        root.children[1].children[1].addLeft(31);
        root.children[1].children[1].addRight(49);

        print(root);
        print(root.children[0]);
        print(root.children[1].children[1]);
    }
})();