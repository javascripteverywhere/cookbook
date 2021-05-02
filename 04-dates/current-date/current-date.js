const today = new Date();

console.log(today);
console.log(`Year: ${today.getFullYear()}`);
console.log(`Month: ${today.getMonth()}`);
console.log(`Day: ${today.getDay()}`);

// Do a little extra string processing to make sure minutes are padded with
// a leading 0 if needed to make a two-digit value (like '05' in the time 4:05)
const hours = today.getHours();
const minutes = today.getMinutes().toString().padStart(2, '0');
console.log(`Time ${hours}:${minutes}`);

// Remove all the time information
today.setHours(0,0,0,0);
console.log(`Same date with no time: ${today}`);