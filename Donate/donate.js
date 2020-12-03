/* Lab 5 JavaScript File 
   Place variables and functions in this file */
/* This function makes sure that none of the  boxes are not filled out */
function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements

  if (formObj.firstName.value == "") {
     alert("You must enter your name");
     formObj.firstName.focus();
     return false;
   }  if (formObj.lastName.value == "") {
        alert("You must enter your credit card number");
        formObj.lastName.focus();
        return false;
   }  if (formObj.title.value == "") {
        alert("You must enter your CVV");
        formObj.title.focus();
        return false;
   }  if (formObj.org.value == "") {
        alert("You must enter amount to donate");
        formObj.org.focus();
        return false;
   }  if (formObj.pseudonym.value == "") {
        alert("You must enter a zip code");
        formObj.pseudonym.focus();
        return false;
   }  if (formObj.comments.value == "") {
        alert("You must enter a billing address");
        formObj.comments.focus();
        return false;
   }  if (formObj.comments.value == "Please enter your comments") {
        alert("You must enter a comment");
        formObj.comments.focus();
        return false;
  }
  alert("Success, you did it.");
}  
/*This function clears the "Please Enter your comments" in the comments text area */
function clearIt(list) {
  if(list.comments.value == "Please enter your comments") {
    list.comments.value='';
   }
   return comments
}
/* This function takes the firstname,lastname and nickname to create the button that gives off first name last name is pseudonym */
function punch(list){
  alert(list.firstName.value +" "+ list.lastName.value + " is "+list.pseudonym.value)
}