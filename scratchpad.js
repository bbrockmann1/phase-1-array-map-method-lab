//For...each itteration method
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = [];

function higherOrderFunction() {for (const variable of skiSchool){
    rollCall.push(variable, 'ree')
};
};

//.map method
const arrayOfSkiers = ['Berrnie', 'Earrnie', 'Slonga', 'Shim'];

const studentRollcall = (student) => {
    return student + ' is a skier.';
};

const rollCall1 = arrayOfSkiers.map(studentRollcall);

//map with an anonymous function
const skiSchool1 = ['Tim', "Tam", 'Ted', 'Todd'];

const rollCall2 = skiSchool.map(function(student) {
    return student + " is ready to skii.";
}
)

//.map method with arrow functions 
const newskiiSchool = ['ks0', 'remkr', 'seub', 'nonsense'];

const rollCall3 = newskiiSchool.map((student) => student + ' isa ready to skii!');

//.map method with complex data structures (nested objs in arrays)
const robotSnakes = [
    {name:'Johnny 5', modes: 5, isActivated: false},
    {name: "C3PO", modes: 3, isActivated: false},
    {name: "Sonny", modes: 2.5, isActivated: false},
    {name: "Baymax", modes: 1.5, isActivated: false},
];

const activatedRobots = robotSnakes.map((robot) => {
    return Object.assign({}, robot, {
        modes: robot.modes *2,
        isActivated: true,
    });

});

const titleCased = () => {
    return tutorials.map((line) => {
      const tokens = line.split(" ");
      const capitalizedTokens = tokens.map(
        (token) => token.charAt(0).toUpperCase() + token.slice(1)
      );
      const response = capitalizedTokens.join(" ");
      return response;
    });
  };

  const practiceArray = [
    'This is a string',
    'This is also a string'
];

function splitArrayFunction(){

};

const array = ['I want this to be split', 'I want this to be too'];

function stringSplitter(){
    return array.map((line) => {
        const tokens = line.split(" ");
        const capitalizedTokens = tokens.map(
            (token) => tokencharAt(0).toUpperCase() + token.slice(1)
        );
        const response = capitalizedTokens.join(" ")
        return response;
    });
};
console.log(stringSplitter());