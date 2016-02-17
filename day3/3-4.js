function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    if(myDate != -1){
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
         var d = new Date(myDate);
        console.log(days[d.getDay()]);
    }
} 
