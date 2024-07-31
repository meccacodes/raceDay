// # PROJECT: Race Day
// As a note, this project originally came from Codecademy.

// Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

// Here’s how our registration works. There are adult runners (18 years of age or over) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

// Race number:

// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:

// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).
// But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

// Step 1.
// Race numbers are assigned randomly. Here's one way to do it:

let raceNumber = Math.floor(Math.random() * 1000);

// Step 2.
// Create a variable that indicates whether a runner registered early or not.
// Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
let registeredEarly = true;

// Step 3.
// Create a variable for the runner’s age and set it equal to a number.
// You’ll change this later as you test different runner conditions.
let runnerAge = 15;

// Step 4.
// Create a control flow statement that checks whether the runner is an adult AND registered early.
if (runnerAge >= 18 && registeredEarly) {
  // Add 1000 to their raceNumber if this is true.
  raceNumber += 1000;
}

// Step 5.
// Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.
// For runners 18 and over who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
if (runnerAge >= 18 && registeredEarly) {
  console.log(`Runner ${raceNumber} will race at 9:30 am.`);
  // Step 6.
  // “Late adults run at 11:00 am”
  // Since we already checked for early adults we can write a statement like this: else if runner is 18 and over AND did not register early they will race at 11:00am
  // Write the corresponding else if statement.
} else if (runnerAge >= 18 && !registeredEarly) {
  // Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
  console.log(`Runner ${raceNumber} will race at 11:00 am.`);
  // Step 7.
  // “Youth registrants run at 12:30 pm (regardless of registration)”
  // For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30 pm.`);
}

// Step 8.
// Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!

// Step 9.
// Run your program a few times to see random results appear in the console!

// Step 10.
// Submit your project
