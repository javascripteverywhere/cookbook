const oldDay = new Date(1999, 10, 20);
const newerDay = new Date(2021, 1, 1);

if (newerDay > oldDay) {
  // This is true, because newerDay falls after oldDay.
  console.log(`${oldDay} happened before ${newerDay}`);
}

// Compare two similar dates with different times
const today = new Date();

// Create another copy of the current date, slightly later.
for (let i=0; i<1000000; i+=1) {;};
const todayDifferent = new Date();

// This is false, because the times are different
console.log(today.getTime() === todayDifferent.getTime());

// Remove all the time information
todayDifferent.setHours(0,0,0,0);
today.setHours(0,0,0,0);

// This is true, because the time has been removed from both instances
console.log(today.getTime() === todayDifferent.getTime());