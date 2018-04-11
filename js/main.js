//set focus on the name field when window loads up
window.onload = document.getElementById('name').focus();

//Variables
const nameField = document.getElementById('name');
const jobRole = document.getElementById('title');
let jobRoleTextArea = document.createElement('input');
let activities = document.querySelector('.activities').children;
let design = document.getElementById('design');
let color = document.getElementById('color');


//Functions

//create text area and append after job role
const createTextArea = () => {
  jobRoleTextArea.type = 'text';
  jobRoleTextArea.placeholder = 'Your Job Role';
  jobRoleTextArea.id = 'other-title';
  jobRole.after(jobRoleTextArea);
 ;
};

//reactivate color options
const reactivateColor = () => {
   for (i = 0; i < 6; i++){
      color.options[i].disabled = false;}
}

//compare design and color
design.addEventListener('change', () =>{
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

//disabled checkbox function






//Functon Calls

//add listenr to the job role selection area
jobRole.addEventListener('change', () =>{
  //if Job Role is selected reveal text area
  if (jobRole.value === 'other') {
    //create the text area for user
    createTextArea();
  } else {
    jobRoleTextArea.remove();
}});
