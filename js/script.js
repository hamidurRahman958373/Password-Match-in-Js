 $("#login").click(function(){
     var password1 = $("#pass1").val();
     var password2 = $("#pass2").val();
     if(password1 != "" && password2 != ""){
       if(password1 == password2){
           alert("successfully login");
       } 
         else{
            alert(" Password not match");    
         }
     }
     else{
         alert("Please inter password");
     }
 });
        