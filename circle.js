const Shape = require('./shape');
class Circle extends Shape{
    constructor(color){
        super(color);
    }
    calculateArea(){
        console.log('called from extended class');
    }

}

module.exports = Circle;
