var message = "Help me, Obi-Wan";
console.log(message);
var episode = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next is episode " + episode);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 12;
isEnoughToBeatMF(distance);
var call = function (name) { return console.log("Do you copy, " + name); };
