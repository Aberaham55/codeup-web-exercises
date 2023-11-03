function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}

function dateFromTimeStamp(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    // dateTime.toString();
    // dateTime.toDateString();
    let year = dateTime.getFullYear();
    let month = appendLeadingZeroes(dateTime.getMonth() + 1);
    let day = dateTime.getUTCDate();
    let hours = dateTime.getHours();
    return `${month}/${day}`;
    // return dateTime;
}

// function dateFromTimeStamp(timeStamp){
//     let dateTime = new Date(timeStamp * 1000);
//     let year = dateTime.getFullYear();
//     let month = appendLeadingZeroes(dateTime.getMonth() + 1);
//     let day = dateTime.getUTCDate();
//     let hours = dateTime.getHours();
//     return `${year}-${month}-${day} ${hours}:00`;
// }

const daysOfWeekAbbreviated = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dayOfWeekFromDayAbbreviated(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeekAbbreviated[dateTime.getDay()];
}

const getDayNameByDate = (dt) => {
    const newDate =new Date(dt * 1000).toString().substring(4, 15);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    const dayIndex = new Date( newDate ).getDay();
    return days[dayIndex]


}
