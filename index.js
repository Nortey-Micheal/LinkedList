module.exports.LinkedList = function () {
    this.value = 'head';
    this.nextNode = null;
    const append = (value) => {
        if (this.nextNode === null) return this.nextNode = new Node(value);
        else {
            let temp = this.nextNode
            while (temp.nextNode != null) temp = temp.nextNode;
            temp.nextNode = new Node(value);
        }

    }

    const prepend = (value) => {
        let newNext = this.nextNode;
        let newNode = new Node(value);
        newNode.nextNode = newNext;
        return this.nextNode = newNode;
    }

    const toString = () => {
        let message = '( ' +  this.value + " ) -> ";
        if (this. value === null) return null;
        else {
            let temp = this.nextNode;
            while (temp != null) {
                message += '( ' + `${temp.value}` + ' ) -> ';
                temp = temp.nextNode
            }
            message += 'null';
        }
        return message
    }

    const size = () => {
        let count = 0;
        let temp = this.nextNode;
        while (temp != null) {
            count++;
            temp = temp.nextNode;
        }
        return count;
    }

    const head = () => {
        return this.nextNode.value;
    }

    const tail = () => {
        let tail;
        let temp = this.nextNode;
        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }
        return tail = temp.value;
    }

    const at = (index) => {
        let num = 0;
        let temp = this.nextNode
        while (num < index) {
            if ( temp != null) {
                temp = temp.nextNode;
                num++;
            } else {
                return new Error("Index out of bound")
            }
        }
        return temp.value;
    }

    const pop = () => {
        let temp = this.nextNode;
        let newNode;
        while (temp.nextNode.nextNode != null) {
            temp = temp.nextNode;
        }
        temp.nextNode = null
    }

    const contains = (value) => {
        let temp = this.nextNode;
        while (temp != null) {
            if (temp.value === value) {
                return true;
            } else {
                temp = temp.nextNode;
            }
        }
        if (temp === null) return false
    }

    const find  = (value) => {
        let index = 0
        let temp = this.nextNode;
        while (temp != null) {
            if (temp.value === value) {
                return index;
            } else {
                index++;
                temp = temp.nextNode;
            }
        }
        if (temp === null) return false;
    }

    const insertAt = (value,index) => {
        let count = 1;
        let temp = this.nextNode;
        while (count < index) {
            temp = temp.nextNode;
            count++;
        }

        if (count == index) {
            let contNode = temp.nextNode;
            let newNode = new Node(value);
            newNode.nextNode = contNode;
            return temp.nextNode = newNode
        }
        if (count > index) {
            let contNode = this.nextNode;
            let newNode = new Node(value);
            newNode.nextNode = contNode;
            return this.nextNode = newNode
        }
    }

    const removeAt = (index) => {
        let count = 1;
        let temp = this.nextNode;
        while (count < index) {
            temp = temp.nextNode;
            count++;
        }

        return temp.nextNode = temp.nextNode.nextNode;
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }

}

function Node (value = null,next = null) {
    this.value = value;
    this.nextNode = next;
}

