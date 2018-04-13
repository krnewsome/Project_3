//set focus on the name field when window loads up
window.onload = document.getElementById('name').focus();
//set payment default option to credit card
window.onload = document.getElementById('payment').options[1].selected = true;
//hide user job role text area
window.onload = document.getElementById('userJobRole').style.display = 'none';
//Variables
const nameField = document.getElementById('name');
const jobRole = document.getElementById('title');
const registerForActivities = document.querySelector('.activities');
let jobRoleTextArea = document.getElementById('userJobRole');
let activities = document.querySelectorAll('input[type=checkbox]');
let design = document.getElementById('design');
let color = document.getElementById('color');
let totalCostDiv = document.createElement('div');
let payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const bitcoin = document.querySelectorAll('p')[1];
const payPal = document.querySelectorAll('p')[0];
const form = document.querySelector('form');
let creditCardNum = document.getElementById('cc-num');
let zipNum = document.getElementById('zip');
let cvvNum = document.getElementById('cvv');
let nameLabel = document.getElementsByTagName('label')[0];
let emailLabel = document.getElementsByTagName('label')[1];
let cardLabel = document.getElementsByTagName('label')[14];
let zipLabel = document.getElementsByTagName('label')[15];
let cvvLabel = document.getElementsByTagName('label')[16];
let tShirtLabel = document.getElementsByTagName('legend')[1];
let activitiesLabel = document.getElementsByTagName('legend')[2];
let errorLabel = document.createElement('label');
let errorLabel2 = document.createElement('label');

//Functions

//reactivate color options function
const reactivateColor = () => {
   for (i = 0; i < 6; i++){
      color.options[i].disabled = false;}
}

//reactive activities options function
const reactivateActivities = (activityIndex) => {
   for (i = 0; i < 7; i++){
      activities[i].disabled = false;
   }
}
//get cost of all checked registered activities
const getCost = () => {

};

//hide payment types
const hidePayment = () => {
 creditCard.style.display = 'none';
 payPal.style.display = 'none';
 bitcoin.style.display = 'none';
}

//display payment message based on selection
const displayPayment = () => {
  for (let i = 0; i < 5; i++){
    if (payment.selectedIndex === 1){
      hidePayment();
      creditCard.style.display = 'block';
    } else if (payment.selectedIndex === 2){
      hidePayment();
      payPal.style.display = 'block';
    } else if (payment.selectedIndex === 3){
      hidePayment();
      bitcoin.style.display = 'block';
    } else {
      hidePayment();
    }
    }
  }

//FORM VALIDATION FUNCTION
const formVal = () => {

  //NAME FIELD VALIDATIONS
  if (form.name.value === '') {
    //change the name label to red and provide user with message
    nameLabel.textContent = 'Name: (please provide your name)';
    nameLabel.className = 'incorrectInput';
  } else {
    nameLabel.textContent = 'Name:';
    nameLabel.className = '';
 };
  //EMAIL FIELD VALIDATION
  let emailValue = form.mail.value;
  let atIndexPosition = emailValue.indexOf('@');
  let dotIndexPosition = emailValue.indexOf('.');
  if (atIndexPosition < 1 || dotIndexPosition < atIndexPosition + 2 || dotIndexPosition + 2 >= emailValue.length) {
     window.history.back();
     emailLabel.textContent = 'Email: (please provide a valid email address)';
    emailLabel.className = 'incorrectInput';
  } else {
    emailLabel.textContent = 'Email:';
    emailLabel.className = '';
  };

  //T-SHIRT VALIDATION
  if (design.value === 'Select Theme') {
   errorLabel.textContent = 'Don\'t forget to pick a T-Shirt';
   errorLabel.className = 'incorrectInput';
   tShirtLabel.appendChild(errorLabel);
   errorLabel.style.display = 'block';
  } else {
    errorLabel.style.display = 'none';
  }

 //REGISTER FOR ACTIVITIES VALIDATION
 let checkedBox = false;
 for (i = 0; i < activities.length; i++){
  if (activities[i].checked) {
    checkedBox = true;
  }
 }
  if (checkedBox !== true) {
   errorLabel2.textContent = 'Please select an Activity';
   errorLabel2.className = 'incorrectInput';
   activitiesLabel.appendChild(errorLabel2);
   errorLabel2.style.display = 'block';
  } else {
    errorLabel2.style.display = 'none';
  }
    //PAYMENT FIELD VALIDATION
  //check card number
  if ((creditCardNum.value.length > 16 || creditCardNum.value.length < 13) && (isNaN(parseInt(creditCardNum.value)) && payment.selectedIndex === 1)) {
    cardLabel.className = 'incorrectInput';
  } else {
    cardLabel.className ='';
  };
 //check zip code
  if ((zipNum.value.length !== 5 || isNaN(parseInt(zipNum.value))) && (payment.selectedIndex === 1)) {
    zipLabel.className = 'incorrectInput';
  } else {
    zipLabel.className ='';
  };
  if ((cvvNum.value.length !== 3 || isNaN(parseInt(cvvNum.value)))&& (payment.selectedIndex === 1)) {
    cvvLabel.className = 'incorrectInput';
  } else {
    cvvLabel.className ='';
  };
  }




//Functon Calls

/*JOB ROLE SECTION*/

//add listenr to the job role selection area
jobRole.addEventListener('change', () =>{
  //if Job Role is selected reveal text area
  if (jobRole.value === 'other') {
    //create the text area for user
    jobRoleTextArea.style.display = 'block';
  } else {
    jobRoleTextArea.style.display = 'none';
}});

/*T- SHIRT INFO*/

//compare design and color and deactivate/activate based on selection
design.addEventListener('change', () =>{
  let totalCost = 0;
  if (design.selectedIndex === 1){
     reactivateColor();
     for (i = 3; i < 6; i++){
      color.options[i].disabled = false;
      color.options[i].disabled = true;
      color.selectedIndex = 0;
    }
  } else if(design.selectedIndex === 2) {
     reactivateColor();
     for (i = 0; i < 3 ; i++){
      color.options[i].disabled = false;
      color.options[i].disabled = true;
      color.selectedIndex = 3
  }} else {
    color.selectedIndex = 0
    reactivateColor();
 }});

/*REGISTER FOR ACTIVITIES*/

//add event listener to activities section & compare registration times
//disable/enable based on times
registerForActivities.addEventListener('change', () =>{
   let totalCost = 0;
   if (activities[1].checked){
   activities[3].disabled = true;
} else {
    activities[3].disabled = false;
}
  if (activities[3].checked){
   activities[1].disabled = true;
} else {
    activities[1].disabled = false;
}
  if (activities[2].checked){
   activities[4].disabled = true;
} else {
    activities[4].disabled = false;
}
  if (activities[4].checked){
   activities[2].disabled = true;
} else {
    activities[2].disabled = false;
}
for(let i = 0; i < activities.length; i++){
  if (activities[i].checked) {
    if (activities[0].checked && totalCost === 0) {
    totalCost += 200;
      }else {
        totalCost += 100;

      }
      }
  totalCostDiv.textContent = `Total Cost: $${totalCost}`;
}

//append the total cost to the list of activities
registerForActivities.append(totalCostDiv);
});

/*PAYMENT INFO*/
//display credit card payment messages
displayPayment();

//add event listener on payment info section
payment.addEventListener('change', () => {
  displayPayment();

});

/*FORM VALIDATION*/
//add listener to form to listner for when user selects submit button
 form.addEventListener ('submit', (e) => {
  e.preventDefault();
   formVal();
 });
