// First Name Validation
var firstName= document.getElementById("firstName");

var firstNameValidation=function(){

   firstNameValue=firstName.value.trim(); 
   validFirstName=/^[A-Za-z]+$/;
   firstNameErr=document.getElementById('first-name-err');

   if(firstNameValue=="")
   {
    firstNameErr.innerHTML="First Name is required";

   }else if(!validFirstName.test(firstNameValue)){
     firstNameErr.innerHTML="First Name must be only string without white spaces";
     document.getElementById('first-name-err').style.color="red";
   }else{
     firstNameErr.innerHTML="";
     return true;
    
   }
}

firstName.oninput=function(){
   
   firstNameValidation();
}
  // Last Name Validation
  var lastName= document.getElementById("lastName");

  var lastNameValidation= function(){

   lastNameValue=lastName.value.trim(); 
   validLastName=/^[A-Za-z]+$/;
   lastNameErr=document.getElementById('last-name-err');

   if(lastNameValue=="")
   {
    lastNameErr.innerHTML="Last Name is required";

   }else if(!validLastName.test(lastNameValue)){
     lastNameErr.innerHTML="Only Words without white space";
     document.getElementById('last-name-err').style.color="red";
   }else{
     lastNameErr.innerHTML="";
     return true;
   }
  }

lastName.oninput=function(){

   lastNameValidation();
}
// Email Address Validation
var emailAddress= document.getElementById("emailAddress");;
var emailAddressValidation= function(){

 emailAddressValue=emailAddress.value.trim(); 
  validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailAddressErr=document.getElementById('email-err');

  if(emailAddressValue=="")
  {
   emailAddressErr.innerHTML="Email Address is required";

  }else if(!validEmailAddress.test(emailAddressValue)){
    emailAddressErr.innerHTML="Email valid formate with @ symbol";
  }else{
    emailAddressErr.innerHTML="";
    return true;
  }

}

emailAddress.oninput=function(){

  emailAddressValidation();
}
// Mobile Number Validation
var mobileNumber= document.getElementById("mobileNumber");

var mobileNumberValidation = function(){

  mobileNumberValue=mobileNumber.value.trim(); 
  validMobileNumber=/^[0-9]*$/;
  mobileNumberErr=document.getElementById('mobile-number-err');

  if(mobileNumberValue=="")
  {
   mobileNumberErr.innerHTML="Mobile Number is required";

  }else if(!validMobileNumber.test(mobileNumberValue)){
    mobileNumberErr.innerHTML="Mobile Number must be a number";
    document.getElementById('mobile-number-err').style.color="red";
  }else if(mobileNumberValue.length!=10){

     mobileNumberErr.innerHTML="Mobile Number must have 10 digits";
     document.getElementById('mobile-number-err').style.color="red";
  }
  else{
    mobileNumberErr.innerHTML="";
    return true;
  }

}
mobileNumber.oninput=function(){

  mobileNumberValidation();
}



function myfunc()
{
  alert("Data are Submitted Sucessfully Submitted");
}