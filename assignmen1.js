function SimpleInterest(amount, time) {
    var Interest;
    var principal = amount;
    var duration = time;
    var rate = 20;
    Interest = (principal * rate * time) / 100;
    console.log("the amount is=" + Interest);
    return Interest;
}
console.log("this is my first debug code");
SimpleInterest(4000, 5);
//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk






function BenueState() {
    console.log("local govt in Benue:\n makurdi \n Gboko \n Guma \n otukpo \n oju ");
}


function DeltaState() {
    console.log("local Govt in Delta:\n Ethiope west \n sapele \n isoko north \n Burutu \n Bomadi");
}


function AnambraState() {
    console.log("Local Govt in Anambra:\n Aguata\n Ihiala\n nnewi south\n nnewi north");
}


function BornoState() {
    console.log("Local Govt in Borno:\n Abadam\n Bama\n Biu\n Bayo\n Chibok")
}

var state = " ";

if (state == "Benue") {
    BenueState();
} else if (state == "Delta") {
    DeltaState();
} else if (state == "Anambra") {
    AnambraState();
} else if (state == "Borno") {
    BornoState()
}