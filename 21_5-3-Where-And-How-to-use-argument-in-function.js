function getFullName(firstName, lastName, ...others){
    let fullName = '';
    for (let i = 0; i < arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' +  namePart;
    }
    return fullName;
}

const name = getFullName('Hanif', 'Songkhet', 'Poribohon', 'Test');
console.log(name);
