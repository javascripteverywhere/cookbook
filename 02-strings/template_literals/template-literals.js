const firstName = 'Joe';
const lastName = 'Khan';
const team = 'Networking';
const hireDate = new Date("2010-01-01");

function getDaysSince(startingDate) {
    const today = new Date();
    const timeDifference = today.getTime() - startingDate.getTime(); 
    
    return Math.round(timeDifference / (1000 * 3600 * 24)); 
};

// Without template literals
let employeeDetail = 'Our team includes ' + firstName + ' ' + lastName +
 ' who works on the ' + team + " team. They/'ve been a team member since "
  + hireDate + '!';

console.log(employeeDetail);

// With template literals
employeeDetail = `Our team includes ${firstName} ${lastName} who works on the ${team} team. They've been a team member since ${hireDate}!`;

console.log(employeeDetail);

// A bit more manipulation
employeeDetail = `Our team includes ${firstName} ${lastName} who works on the ${team} team. They've been a team member since ${hireDate.getFullYear()}! That's ${getDaysSince(hireDate)} days.`;

console.log(employeeDetail);