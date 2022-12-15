/*var a,b;
a=["A","B","C","D","E"];
b="";
for(i=1;i<=a.length;i++){
    for(j=0;j<i;j++){
        document.write(a[j])
    }
    document.write("<br>")
}*/ 
 let a=5;
 
 for(let i=1;i<=a;i++){
    let b=65;
    for(let j=0;j<i;j++){
       document.write(String.fromCharCode(b+j))
       
    }
    document.write("<br>")
 }
