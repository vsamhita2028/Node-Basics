// nodeorg git variable
var rect = require("./rectangle")

function solveRect(l,b){
    console.log("Length of the rectangle : " +l+ ", breadth of the rectangle : "+b)

   rect(l,b,(err,rectangle)=>{
       if(err){
           console.log(err.message)
       }else{
           console.log("Area of rectangle with l = "+ l+ "and b = "+b+" : " +rectangle.area)
           console.log("perimeter of rectangle with l = "+ l+ "and b = "+b+" : " +rectangle.perimeter)

       }
   })
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
