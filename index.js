// Your code here

class Polygon {
    constructor(arr){ 
        this.arr = arr 
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        let p=0;
        for (let i=0; i<this.arr.length; i++) {
            p+=this.arr[i]
        }
        return p
    }
}

const rumb = new Polygon([2,3,2,3])

class Triangle extends Polygon {
    get isValid() {
        let isValid;
        if (this.arr[0] + this.arr[1] > this.arr[2]){
            if (this.arr[1] + this.arr[2] > this.arr[0]) {
                if (this.arr[0] + this.arr[2] > this.arr[1]) {
                    isValid = true
                } else { isValid = false }
            }
        }
        return isValid
    }
}

class Square extends Polygon {
    get isValid() {
        let isValid;
        if (this.arr[0]===this.arr[1]) {
            if (this.arr[0]===this.arr[2]) {
                if (this.arr[0]===this.arr[3]) {
            isValid=true} else {isValid=false}}}
            return isValid
        }
    get area() {
        //console.log(this.isValid)
        //if (this.isValid===true) {
            return this.arr[0]*this.arr[1]
        }
    }



const triangle = new Triangle([4,5,6])
const triangleBad = new Triangle([4,5,1])

const square = new Square([6,6,6,6])