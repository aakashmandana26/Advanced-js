function anotherAddEventListener(typeOfEvent, callback){
    var eventThatHappened = {
        type : "keydown",
        durationOfEvent : 2
    }
    if(eventThatHappened.type = typeOfEvent){
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keydown", function(event){
    console.log(event);
})