let print = document.getElementById("print");
for (let i=1;i<6;i++){
    print.innerHTML+="<br>"
   for(let j=1;j<=i;j++){
    // console.log("*")
    print.innerHTML +=""+"*";
   }
  console.log(""); 
}
print.innerHTML+="<br>";
for (let i=1;i<6;i++){
    print.innerHTML+="<br>"
   for(let j=1;j<=i;j++){
    // console.log("*")
    print.innerHTML +=""+i;
   }
  console.log(""); 
}
print.innerHTML+="<br>";
let row=5;
let num;
for (let i=0;i<row;i++){
    num=1;
    print.innerHTML+="<br>"
   for(let j=0;j<=i;j++){
    print.innerHTML +=(num+"");
    num++;
   }
  console.log(""); 
}

