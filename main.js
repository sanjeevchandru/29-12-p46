document.write("4. to find the area of a triangle where three sides are 5, 6, 7."+"<br>");
function test4(a,b,c){
    var s=(a+b+c)/2;
    var x=Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    return x;
}
document.write("area of triangle : "+test4(5,6,7)+"<br><br>");