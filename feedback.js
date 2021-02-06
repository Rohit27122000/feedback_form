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