console.log("Hello from external JavaScript");
alert("Welcome to my website");
let color =  prompt("what is your favorite color");
alert(`${color} my favorite too`);
let price = 3;
console.log (`${price}` + 9)
let google = 400;
let amazon = 380;
let facebook = 350;
let googleHours = prompt("how many hours did you work for google?");
let googlePay = google * googleHours;
let amazonHours = prompt("How many hours did you work for amazon?");
let amazonPay = amazon * amazonHours;
let facebookHours = prompt("how many hours did you work for facebook?");
let facebookPay = facebook * facebookHours;
let totalPay = googlePay + amazonPay + facebookPay;
alert(`$${totalPay} is the total pay for the week.`);


let classIsFull = prompt("Is the class full?");
let scheduleConflicts = confirm("Does the class copnflict with your schedule?");

let studentCanEnroll = !classIsFull && !scheduleConflicts;
alert(`It is ${studentCanEnroll} that you can enroll in the class.`);

let personBoughtMoreThanTwoItems = false;
let  offerHasExpired = true;
let premiumMember = false;

let productOfferCanBeApplied = (personBoughtMoreThanTwoItems || premiumMember) && offerHasExpired;

