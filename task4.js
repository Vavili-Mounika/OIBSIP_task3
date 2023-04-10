function f1(){
  var x,y,z;
  
  
  x=document.getElementById("v1").value;
  if(document.getElementById("tem1").value=="fahrenhit")
  {
      
    y=(x-32)*(5/9);
    z=Number(y)+273.15;
    document.getElementById("result").innerHTML=y+"&#8451";
    document.getElementById("result1").innerHTML=z+"&#8490";
  
      
  }
  else{
    y=(x*(9/5))+32;
    z=Number(x)+273.15;
    document.getElementById("result").innerHTML=y+"&#8457";
    document.getElementById("result1").innerHTML=z+"&#8490";
  }
  
  

}