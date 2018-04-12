//set focus on the name field when window loads up
window.onload = document.getElementById('name').focus();

//Variables
const nameField = document.getElementById('name');
const jobRole = document.getElementById('title');
const registerForActivities = document.querySelector('.activities');
let jobRoleTextArea = document.createElement('input');
let activities = document.querySelectorAll('input[type=checkbox]');
let design = document.getElementById('design');
let color = document.getElementById('color');
let totalCostDiv = document.createElement('div');




//Functions

//create text area and append after job role
const createTextArea = () => {
  jobRoleTextArea.type = 'text';
  jobRoleTextArea.placeholder = 'Your Job Role';
  jobRoleTextArea.id = 'other-title';
  jobRole.after(jobRoleTextArea);
 ;
};

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
//get cost of al checked registered activities
const getCost = () => {

};


//Functon Calls

/*JOB ROLE SECTION*/

//add listenr to the job role selection area
jobRole.addEventListener('change', () =>{
  //if Job Role is selected reveal text area
  if (jobRole.value === 'other') {
    //create the text area for user
    createTextArea();
  } else {
    jobRoleTextArea.remove();
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
