function welcomeGuest(name, greetHandler){
    greetHandler(name);
}
const actorName = 'Tom Hanks';
welcomeGuest(actorName, greetUserEvening);

function greetUserMorning(name){
    console.log('Good Morning', name);
}

function greetUserEvening(name){
    console.log('Good Evening', name);
}
