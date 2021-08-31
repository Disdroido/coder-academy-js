function repeatMessage(message, repeatCount){
    if(typeof(message) != "string") {
        throw ("message is not a string");
    }

    // if(typeof(repeatCount) != "integer") {
    //     throw ("repeatCount is not a number");
    // }

    if(isNaN(repeatCount)) {
        throw ("repeatCount is not a number");
    }

    let messageToShow = "";
        for (let index = 0; index < repeatCount; index++) {
        messageToShow += message;
    }
    return messageToShow;
}

console.log(repeatMessage("Ethan was here", 4));

module.exports = {
    repeatMessage
}