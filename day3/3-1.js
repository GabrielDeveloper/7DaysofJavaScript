function displayInformation() {
     // var library is defined, use it to print the information
    library.forEach(function(e){
        if (e.readingStatus === true) {
            console.log("Already read '" + e.title +"' by " + e.author + ".");
        } else {
            console.log("You still need to read '" + e.title +"' by " + e.author + ".");
        }
    });  
} 
