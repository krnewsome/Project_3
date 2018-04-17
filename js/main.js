//make sure the of the DOM has been loaded into the browser
document.addEventListener('DOMContentLoaded', () => {
//run following functions when the window loads
  window.onload = function () {


   //###Variables
  /*---------------------------------------------------------------------------*/
    const form = document.querySelector('form');
    const registerForActivities = document.querySelector('.activities');
    let jobRoleTextArea = document.getElementById('other-title');
    let activities = document.querySelectorAll('input[type=checkbox]');
    let totalCostDiv = document.createElement('div');
    const creditCard = document.getElementById('credit-card');
    const bitcoin = document.querySelectorAll('p')[1];
    const payPal = document.querySelectorAll('p')[0];
    let creditCardNum = document.getElementById('cc-num');
    let zipNum = document.getElementById('zip');
    let cvvNum = document.getElementById('cvv');
    let cardLabel = document.getElementById('cc-num').labels[0];
    let zipLabel = document.getElementById('zip').labels[0];
    let cvvLabel = document.getElementById('cvv').labels[0];
    let tShirtLabel = document.getElementsByTagName('legend')[1];
    let activitiesLabel = document.getElementsByTagName('legend')[2];
    let errorLabel = document.createElement('label');
    let errorLabel2 = document.createElement('label');
    let colorMenu = document.getElementById('colors-js-puns');
    const addOption = document.createElement('option');


    //###Functions
  /*---------------------------------------------------------------------------*/

  //set page defaults function
  const setPageDefaults = () => {
     //set focus on the name field when window loads up
    form.name.focus();
    //set payment default option to credit card
    form.payment.options[1].selected = true;
    //hide user job role text area
    jobRoleTextArea.style.display = 'none';
    //hide color menu
     hideColorMenu();
     // hide paypal and bitcoin p elements
      payPal.style.display = 'none';
      bitcoin.style.display = 'none';
    //add option item to color menu
     addOption.text = 'Please select a T-shirt theme'
      form.color.add(addOption);
}

    //display color options function
    const reactivateColor = () => {
       for (i = 0; i < 6; i++){
          form.color.options[i].style.display = 'block';}
    }

    //hide colorMenu function
    const hideColorMenu = () => {
    if (form.design.value === 'Select Theme') {
        form.color.value = 'Please select a T-shirt theme'
        colorMenu.style.display = 'none'
      }
    };
  //register for activities function
      const registerAct = () => {
     // create variable to hold total cost
      let totalCost = 0;
      //decide which activities coinside with each other
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
   //for each of the activities that are checked
    for(let i = 0; i < activities.length; i++){
      if (activities[i].checked) {
   //if the first activity is checked and the total cost is 0 add $200
   // for all the other events add $100 to the total cost
        if (activities[0].checked && totalCost === 0) {
        totalCost += 200;
          }else {
            totalCost += 100;
          }
          }
      //set the text of the toatal cost div
      totalCostDiv.textContent = `Total Cost: $${totalCost}`;
    }
      }
    //show payment message function
    const showPaymentMessage = (paymentType) => {
      let paymentMessages = ['Select Payment',creditCard, payPal, bitcoin];
      //hide all payment messages
      for (let i = 1; i < paymentMessages.length; i++) {
        if (paymentType.value === form.payment[i].value){
           paymentMessages[i].style.display = 'block';
          }else {
            paymentMessages[i].style.display = 'none';
        }
      }
    };

  //name field validation function
      const namefieldValidation = () => {
      if (form.name.value === '') {
        //change the name label to red and provide user with message
        form.name.labels[0].textContent = 'Name: (please provide your name)';
        form.name.labels[0].className = 'incorrectInput';
      } else {
        form.name.labels[0].textContent = 'Name:';
        form.name.labels[0].className = '';
     }
   };

//create email validation function
  const emailValidation = () => {
    let emailValue = form.mail.value;
      let atIndexPosition = emailValue.indexOf('@');
      let dotIndexPosition = emailValue.indexOf('.');
      if (atIndexPosition < 1 || dotIndexPosition < atIndexPosition + 2 || dotIndexPosition + 2 >= emailValue.length) {
        form.mail.labels[0].textContent = 'Email: (please provide a valid email address)';
        form.mail.labels[0].className = 'incorrectInput';
      } else {
        form.mail.labels[0].textContent = 'Email:';
        form.mail.labels[0].className = '';
      };
  }

  //t-shirt validation function
      const tShirtValidation = () => {
      if (form.design.value === 'Select Theme') {
       errorLabel.textContent = 'Don\'t forget to pick a T-Shirt';
       errorLabel.className = 'incorrectInput';
       tShirtLabel.appendChild(errorLabel);
       errorLabel.style.display = 'block';
      } else {
       errorLabel.remove();
      }
      };

  //activities validation function
      const activitiesValidation = () => {
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
        errorLabel2.remove();
      }
     };

   //card number validation
      const cardNumValidation = () => {
      if ((creditCardNum.value.length > 16 || creditCardNum.value.length < 13) || (isNaN(parseInt(creditCardNum.value)) && form.payment.selectedIndex === 1)) {
        cardLabel.className = 'incorrectInput';
        if (creditCardNum.value.length !== 0 ) {
          alert('Please enter a valid 13 - 16 digit credit card number')
        }
      } else {
        cardLabel.className ='';
      }
      };

  //zip code validation function
   const zipValidation = () => {
      if ((zipNum.value.length !== 5 || isNaN(parseInt(zipNum.value))) && (form.payment.selectedIndex === 1)) {
        zipLabel.className = 'incorrectInput';
        if (zipNum.value.length !== 0 ) {
          alert('Please enter a valid 5 digit zip code number')
        }
      } else {
        zipLabel.className ='';
      }
   };

  //cvv number validation function
      const cvvNumValidation = () =>{
      if ((cvvNum.value.length !== 3 || isNaN(parseInt(cvvNum.value)))&& (form.payment.selectedIndex === 1)) {
        cvvLabel.className = 'incorrectInput';
        if (cvvNum.value.length !== 0 ) {
          alert('Please enter a valid 3 cvv number')
        }
      } else {
        cvvLabel.className ='';
      }
      };

    //form validation function
    const formVal = (e) => {
    //call name field validation function
      namefieldValidation();

      // call email validation function
      emailValidation();

      //call t-shirt validation function
      tShirtValidation();

     //call activities validation function
      activitiesValidation();

      //call cardNumValidation function
      cardNumValidation();

      //call zipValidation function
      zipValidation();

      //call cvvNumValidation function
      cvvNumValidation();

    // return false if the validation did not pass
    let formLabels = document.querySelectorAll('label');
    for (let i = 0; i < formLabels.length; i++) {
      if (formLabels[i].className === 'incorrectInput') {
        return true;
      }
    }

    }


   //###Functions Calls
  /*---------------------------------------------------------------------------*/

    /*JOB ROLE SECTION*/
  //set page defaults
    setPageDefaults();
    //add listenr to the job role selection area
    form.title.addEventListener('change', () =>{
      //if Job Role is selected reveal text area
      if (form.title.value === 'other') {
        //create the text area for user
        jobRoleTextArea.style.display = 'block';
      } else {
        jobRoleTextArea.style.display = 'none';
    }});

    /*T- SHIRT INFO*/

    //compare design and color and deactivate/activate based on selection
   form.design.addEventListener('change', () =>{
         //hide color menu
      if (form.design.selectedIndex === 1){
         colorMenu.style.display = 'block';
         reactivateColor();
         for (i = 3; i < 6; i++){
          form.color.options[i].style.display = 'block'
          form.color.options[i].style.display = 'none';
          form.color.selectedIndex = 0;
          form.color.options[6].style.display = 'none';

        }
      } else if(form.design.selectedIndex === 2) {
         colorMenu.style.display = 'block'
         reactivateColor();
         for (i = 0; i < 3 ; i++){
          form.color.options[i].style.display = 'block'
          form.color.options[i].style.display = 'none';
          form.color.selectedIndex = 3
          form.color.options[6].style.display = 'none';
      }} else {
        hideColorMenu();
      }

  });

    /*REGISTER FOR ACTIVITIES*/

    //add event listener to activities section & compare registration times
    //disable/enable based on times
    registerForActivities.addEventListener('change', (e) =>{
      //call registerAct fucntion
      registerAct();
    //append the total cost to the list of activities
    registerForActivities.append(totalCostDiv);
    });

    /*PAYMENT INFO*/


    //add event listener on payment info section
    form.payment.addEventListener('change',  (e) => {
      console.log(e.target.value)
      showPaymentMessage(e.target);
    });


    /*FORM VALIDATION*/

  // add realtime form validation on email field
  form.mail.onchange = function (){
    //EMAIL FIELD VALIDATION
     emailValidation();
    }
  // add realtime form validation on name field
  form.name.onchange = function (){
    //EMAIL FIELD VALIDATION
     namefieldValidation();
    }
    //add listener to form to listner for when user selects submit button
     form.addEventListener ('submit', (e) => {
      let failedVal = formVal();
       if (failedVal){
       e.preventDefault();
         console.log('form val failed');
         return false;
       }
    });
  }
});
