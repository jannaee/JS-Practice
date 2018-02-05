// Question: Make function to close and open an umbrella
var umbrella = {
    color: "pink",
    isOpen: true,
        open: function() {
        if (umbrella.isOpen === true){
            console.log("Umbrella is already open.");
        }
        else {
            umbrella.isOpen = true;
            console.log("You opened the umbrella.");
        }
    },
    close: function(){
        if (umbrella.isOpen === false){
            console.log("Umbrella is already closed.");
        }
        else {
            umbrella.isOpen = false;
            console.log("You closed the umbrella.");
        }
    }
};
umbrella.close();
umbrella.close();
umbrella.open();
umbrella.open();
