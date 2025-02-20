// Create a strings.html page.
// Add separate text box inputs for the user's first and last names.
// Combine the first name + space + last name into a variable.

// I need a function that will get the values of the first name and last name and combine them into a single variable

let theName = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  //  this was test to see if you have done the right thing
  console.log(`The first name of the user is: ${firstName}`);
  console.log(`The last name of the user is: ${lastName}`); 
  theUerName = firstName + "" + lastName; 
  console.log(theUerName);
  return theUerName;
   
};

let verification = () => {
    if(theName().length > 20) {
    // This is a warning message to the user
        alert("The name is too long, please enter a name with less than 20 characters");
    //
    }

}

let zipCode = () => {
 let userZipCode = document.getElementById('zip-code').value;
 console.log(`The user's zip code is: ${userZipCode}`);

}
// Check if the variable has more than > 20 characters and give a warning – do not continue the program if invalid.
// A text box input for the user's zip code
// Check if the zip code is valid and contains just 5 digits – do not continue the program if invalid
// If the inputs are valid, show the user the secret message from the website.
// Have at least 1 creative element – images, fonts, background color, etc.
// Create a nice look and feel for the user and make a great user experience!
// Comment above almost every line of your code, both HTML and JavaScript!
// Put a comment at the top of your HTML file with your name in it.
// Take one or more screen prints of your application running.

// I am make this function to call the secret message from the website

let secretMessage = () => {
  console.log(`The name of the user is: ${theName()}`);
    console.log(`The zip code of the user is: ${zipCode()}`);

};
