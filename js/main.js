//load DOM to the browser
document.addEventListener(`DOMContentLoaded`, () => {
  //run page when window is finished loading
  window.onload = function () {
    //###Variables
    /*---------------------------------------------------------------------------*/

    //select the form
    const form = document.querySelector(`form`);

    //select job role text area `other`
    const jobRoleTextArea = document.getElementById(`other-title`);

    /*T- SHIRT INFO Section*/
    const tShirtLabel = document.getElementsByTagName(`legend`)[1];
    const errorLabelTShirt = document.createElement(`label`);
    const colorMenu = document.getElementById(`colors-js-puns`);
    const addOption = document.createElement(`option`);

    //Register for Acvtitivties section
    const registerForActivities = document.querySelector(`.activities`);
    const activitiesLabel = document.getElementsByTagName(`legend`)[2];
    const errorLabelActivity = document.createElement(`label`);
    const activities = document.querySelectorAll(`input[type=checkbox]`);
    const totalCostDiv = document.createElement(`div`);

    //Payment Info section
    const creditCardMessage = document.getElementById(`credit-card`);
    const cardLabel = document.getElementById(`cc-num`).labels[0];
    const creditCardNum = document.getElementById(`cc-num`);
    const zipLabel = document.getElementById(`zip`).labels[0];
    const zipNum = document.getElementById(`zip`);
    const cvvLabel = document.getElementById(`cvv`).labels[0];
    const cvvNum = document.getElementById(`cvv`);
    const bitcoinMessage = document.querySelectorAll(`p`)[1];
    const payPalMessage = document.querySelectorAll(`p`)[0];

    //###Functions
    /*---------------------------------------------------------------------------*/

    /*Page Defaults*/

    //set page defaults function
    const setPageDefaults = () => {
      //set focus on the name field when window loads up
      form.name.focus();

      //hide user job role text area
      jobRoleTextArea.style.display = `none`;

      //hide color menu
      hideColorMenu();

      //set payment default option to credit card
      form.payment.options[1].selected = true;

      // hide paypal and bitcoin p elements
      payPalMessage.style.display = `none`;
      bitcoinMessage.style.display = `none`;

      //add option item to color menu
      addOption.text = `Please select a T-shirt theme`;
      form.color.add(addOption);
    };

    /*T- SHIRT INFO Section*/

    //display color menu function
    const reactivateColor = () => {
      for (i = 0; i < 6; i++) {
        form.color.options[i].style.display = `block`;}
    };

    //hide colorMenu function
    const hideColorMenu = () => {
      if (form.design.value === `Select Theme`) {
        form.color.value = `Please select a T-shirt theme`;
        colorMenu.style.display = `none`;
      }
    };

    /*REGISTER FOR ACTIVITIES*/

    //register for activities function
    const registerAct = () => {
        // create variable to hold total cost
        let totalCost = 0;

        //decide which activities coinside with each other
        if (activities[1].checked) {

          activities[3].disabled = true;
        } else {
          activities[3].disabled = false;
        }

        if (activities[3].checked) {

          activities[1].disabled = true;
        } else {
          activities[1].disabled = false;
        }

        if (activities[2].checked) {
          activities[4].disabled = true;
        } else {
          activities[4].disabled = false;
        }

        if (activities[4].checked) {
          activities[2].disabled = true;
        } else {
          activities[2].disabled = false;
        }

        //loop through each activity
        for (let i = 0; i < activities.length; i++) {
          if (activities[i].checked) {
            //if the first activity is checked and the total cost is 0 add $200
            // for all the other events add $100 to the total cost
            if (activities[0].checked && totalCost === 0) {
              totalCost += 200;
            }else {
              totalCost += 100;
            }

          }

          //set the text content property of the total cost div to
          //hold the price of the activities
          totalCostDiv.textContent = `Total Cost: $${totalCost}`;
        }
      };

    //show payment message function
    const showPaymentMessage = (paymentType) => {
      //create an array of the payment messsages
      let paymentMessages = [`Select Payment`, creditCardMessage, payPalMessage, bitcoinMessage];

      //show the payment message that the user selects and hide all other messages
      for (let i = 1; i < paymentMessages.length; i++) {
        if (paymentType.value === form.payment[i].value) {
          paymentMessages[i].style.display = `block`;
        } else {
          paymentMessages[i].style.display = `none`;
        }
      }
    };

    /*Validation*/

    //name field validation function
    const namefieldValidation = () => {
      //if the name field has no value
      if (form.name.value === ``) {
        //change the name label to red and provide user with message
        form.name.labels[0].textContent = `Name: (please provide your name)`;
        form.name.labels[0].className = `incorrectInput`;
      } else {
        //if the name field is filled set to normal
        form.name.labels[0].textContent = `Name:`;
        form.name.labels[0].className = ``;
      }
    };

    //create email validation function
    const emailValidation = () => {
      let emailValue = form.mail.value;

      //get the index postion of the `@` symbol
      let atIndexPosition = emailValue.indexOf(`@`);

      //get the index position of the `.` symbol
      let dotIndexPosition = emailValue.indexOf(`.`);

      //check the format of the emailValue
      if (atIndexPosition < 1 || dotIndexPosition < atIndexPosition + 2 || dotIndexPosition + 2 >= emailValue.length) {
        //change the email label to red and provide user with message
        form.mail.labels[0].textContent = `Email: (please provide a valid email address)`;
        form.mail.labels[0].className = `incorrectInput`;
      } else {
        //if the email field is formated correct set to normal
        form.mail.labels[0].textContent = `Email:`;
        form.mail.labels[0].className = ``;
      }
    };

    //t-shirt validation function
    const tShirtValidation = () => {
        if (form.design.value === `Select Theme`) {
          //create and append error label
          errorLabelTShirt.textContent = `Don\`t forget to pick a T-Shirt`;
          errorLabelTShirt.className = `incorrectInput`;
          tShirtLabel.appendChild(errorLabelTShirt);
          errorLabelTShirt.style.display = `block`;
        } else {
          errorLabelTShirt.remove();
        }
      };

    //activities validation function
    const activitiesValidation = () => {
      let checkedBox = false;

      //check if any of the activities checkboxes are checked
      for (i = 0; i < activities.length; i++) {
        if (activities[i].checked) {
          checkedBox = true;
        }
      }

      if (checkedBox !== true) {
        //create and append error label
        errorLabelActivity.textContent = `Please select an Activity`;
        errorLabelActivity.className = `incorrectInput`;
        activitiesLabel.appendChild(errorLabelActivity);
        errorLabelActivity.style.display = `block`;
      } else {
        errorLabelActivity.remove();
      }
    };

    //card number validation
    const cardNumValidation = () => {
        //check the format of the user credit card number
        if (((creditCardNum.value.length > 16 || creditCardNum.value.length < 13) || (isNaN(parseInt(creditCardNum.value)))) && (form.payment.selectedIndex === 1)) {
          //alert the user if the card number length is more than 0 but not in the correct format
          cardLabel.style.color = `red`;
          creditCardNum.placeholder = `Enter valid credit card #`;
          if (creditCardNum.value.length !== 0) {
            alert(`Please enter a valid 13 - 16 digit credit card #`);
          }
        } else {
          cardLabel.style.color = `black`;

        }
      };

    //zip code validation function
    const zipValidation = () => {
      if ((zipNum.value.length !== 5 || isNaN(parseInt(zipNum.value))) && (form.payment.selectedIndex === 1)) {
        //alert the user if the zip number length is more that 0 but not in the correct format
        zipLabel.style.color = `red`;
        zipNum.placeholder = `Enter zip code`;

        if (zipNum.value.length !== 0) {
          alert(`Please enter a valid 5 digit zip code number`);
        }
      } else {
        zipLabel.style.color = `black`;
      }
    };

    //cvv number validation function
    const cvvNumValidation = () => {
        if ((cvvNum.value.length !== 3 || isNaN(parseInt(cvvNum.value)))&& (form.payment.selectedIndex === 1)) {
          //alert the user if the cvv number length is more that 0 but not in the correct format
          cvvLabel.style.color = `red`;
          cvvNum.placeholder = `Enter cvv`;
          if (cvvNum.value.length !== 0) {
            alert(`Please enter a valid 3 cvv number`);
          }
        } else {
          cvvLabel.style.color = `black`;
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

      //return true if the validation did not pass to stop form submission
      let formLabels = document.querySelectorAll(`label`);
      for (let i = 0; i < formLabels.length; i++) {
        if (formLabels[i].className === `incorrectInput`) {
          return true;
        }
      }
    };

    //###Functions Calls
    /*---------------------------------------------------------------------------*/

    //set page defaults
    setPageDefaults();

    /*JOB ROLE SECTION*/

    //add listener to the job role selection area
    form.title.addEventListener(`change`, () => {
      //if Job Role `other` is selected reveal text area
      if (form.title.value === `other`) {
        //display the text area for user
        jobRoleTextArea.style.display = `block`;
      } else {
        jobRoleTextArea.style.display = `none`;
      }
    });

    /*T- SHIRT INFO Section*/

    //compare design and color and deactivate/activate based on selection
    form.design.addEventListener(`change`, (e) => {
      if (e.target.value === `js puns`) {
        colorMenu.style.display = `block`;
        reactivateColor();
        for (i = 3; i < 6; i++) {
          form.color.options[i].style.display = `block`;
          form.color.options[i].style.display = `none`;
          form.color.selectedIndex = 0;
          form.color.options[6].style.display = `none`;
        }
      } else if (e.target.value
 === `heart js`) {
        colorMenu.style.display = `block`;
        reactivateColor();
        for (i = 0; i < 3; i++) {
          form.color.options[i].style.display = `block`;
          form.color.options[i].style.display = `none`;
          form.color.selectedIndex = 3;
          form.color.options[6].style.display = `none`;
        }
      } else {
        hideColorMenu();
      }
    });

    /*REGISTER FOR ACTIVITIES*/

    //add event listener to activities section & compare registration times
    //disable/enable based on times
    registerForActivities.addEventListener(`change`, () => {
      //call registerAct fucntion
      registerAct();

      //append the total cost to the list of activities
      registerForActivities.append(totalCostDiv);
    });

    /*PAYMENT INFO*/

    //add event listener on payment info section
    form.payment.addEventListener(`change`,  (e) => {
      showPaymentMessage(e.target);
    });

    /*FORM VALIDATION*/

    //add realtime form validation on email field
    form.mail.onchange = function () {
      //EMAIL FIELD VALIDATION
      emailValidation();
    };

    //add listener to form to listner for when user selects submit button
    form.addEventListener(`submit`, (e) => {
      let failedVal = formVal();

      //if validation fails `true` will be returned and
      //function will run to prevent submission
      if (failedVal) {
        e.preventDefault();
        console.log(`form val failed`);
        return false;
      }
    });
  };
});
