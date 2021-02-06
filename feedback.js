function nv()
{ var x=document.getElementById("name").value;
   var y=/^[A-Za-z/s/-/']{2,15}$/;
   if(y.test(x))
   {
     document.getElementById("message1").style.color="green";
     document.getElementById("message1").innerHTML=" <strong>valid</strong>";
     return true;
   }
   else
    {
     document.getElementById("message1").style.color="red";
     document.getElementById("message1").innerHTML=" <strong>First name should be 2-15 characters long</strong>";
     return false;
   }
}

function pnv()
{ var x=document.getElementById("pn").value;
   var y=/^\d{3}-\d{3}-\d{4}$/;
   if(y.test(x))
   {
     document.getElementById("message2").style.color="green";
     document.getElementById("message2").innerHTML=" <strong>valid</strong>";
     return true;
   }
   else
    {
     document.getElementById("message2").style.color="red";
     document.getElementById("message2").innerHTML=" <strong>Use xxx-xxx-xxxx format</strong>";
     return false;
   }
}

function response()
{ /* Asuuring improvement to customer*/var count=0;
   document.getElementById("final").innerHTML="<br>";
   document.getElementById("final").innerHTML+=" Thanks for your response !<br>";
   if(document.getElementById("2.2").checked||document.getElementById("2.3").checked)
    {document.getElementById("final").innerHTML+=" Sorry for lesser no. of healthy choices. We will work on it.<br>";  
    count++;}
   if(document.getElementById("3.3").checked||document.getElementById("3.4").checked)
    {document.getElementById("final").innerHTML+=" We promise to improve speed of our service.<br>"; 
 count++;}
   if(document.getElementById("4.2").checked)
    {document.getElementById("final").innerHTML+=" Sorry for the dissappointment .We mill make our place more enjoyable.<br>";
    count++;}  
  if(count==0)
    document.getElementById("final").innerHTML+=" It seems that you were quite satisfied with our service .<br>"; 
     document.getElementById("final").innerHTML+=" See you soon again .<br><br><br>"; 
}