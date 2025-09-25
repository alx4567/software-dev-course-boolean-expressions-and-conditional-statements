/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = false;
const hasMap = false;
let hasAxe = false;
let hasShield = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const findsAxe = readline.question("You stumble upon an axe. Do you pick it up? ");
  if (findsAxe.toLowerCase() === "yes" || findsAxe.toLowerCase() === "y") {
    hasAxe = true;
    console.log("You picked up the axe.");
    const river = readline.question("You come to a river. Do you 'swim' or 'build a boat'? ");
    if (river === "swim") {
      console.log("The axe is too heavy and you drown. Game Over.")
    } else {
      const bear = readline.question("You used your axe to chop down trees and build boat. You crossed the river with ease. When you reach the far bank you see a bear with a big pile of salmon. Do you 'run' or 'talk' to the bear? ");
      if (bear === 'talk') {
        console.log("You become best friends with the bear and live happily ever after.");
      } else if ('run') {
        console.log("The bear sees you and thinks you're prey. As you run in a panic you trip and fall into a pit. Game Over.");
      }
    }
  } else {
    const river = readline.question("You come to a river. Do you 'swim' or 'build a boat'? ");
    if (river === "swim") {
      console.log("You try swimming but get swept away by the current. Game Over.");
    } else if (river === "build a boat") {
      console.log("You don't have an axe to chop down tree to build a boat. You starve waiting to cross the river. Game Over.");
    } 
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
  const camp = readline.question("When you get back it's starting to get dark. Do you 'start a fire' or 'build a shelter'?");
  if (camp === "start a fire") {
    console.log("You were able to get a fire going. But you start hearing noises in the woods.");
    const noise = readline.question("Do you 'inspect' the noise or 'stay' near the fire?");
    if (noise === "inspect") {
      console.log("You head into the dark woods and get lost.");
    } else {
      console.log("You stay put. A friend appears and you make S'mores.");
    } 
    } else if (camp === "build a shelter") {
      console.log("You have a nice rest. In the morning you start your journey over. (Restart game to play again)");
  }
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  const route = readline.question("When you arrive at the village you hear a commotion in the town square. Do you 'head towards town square' or 'go into store'? ");
  if (route === "head towards town square") {
    console.log("You run straight to the town square and see a dragon has take over. You make eye contact for too long, so he breaths fire at you burning you to a crisp. Game Over.");
  } else {
    hasShield = readline.question("You enter the store. The store clerks offers you shield. Do you take it? ('yes' or 'no') ");
    const quest =  readline.question("And another thing. My beloved pet 'biscuit' was taken and I need him back. Can you go help me out? ('yes' or 'no') ");
    if (hasShield === "yes" && quest === "yes") {
      hasShield = true;
      console.log("That sounds fantastic. Biscuit should be in the town square. Please hurry.\nYou rush to the town square and see a dragon causing mayhem. You see the dragon has a collar it with the name 'Biscuit' ");
      const biscuit = readline.question("Do you 'call out' for biscuit or 'run' straight up to him?");
      if (biscuit === "call out") {
        console.log("Biscuit look directly at you. You make eye contact for too long and he breaths fire in your direction. You stop his fire with your shield. You are able to capture Biscuit!");
      } else {
        console.log("You run swiftly at Biscuit. You get with 10 feet before he notices, but he takes your actions as a threat. You block his attempt with your shield and capture Biscuit!");
      }
      const newPet = readline.question("Now that you have Biscuit, do you 'keep him' as your new pet or 'return him' to the shopkeeper? ");
      if (newPet === "keep him") {
        console.log("You mount Biscuit and fly away with your new pet, but when you land the police are there to capture you and take you to prison. Game Over.");
      } else if (newPet !== "keep him") {
        console.log("You return Bicuit to the shopkeeper and in return you receive $1,000,000,000. Congratulation!");
      }
    } else if (hasShield === "yes" && quest ==="no") {
      hasShield = true;
      console.log("Such a party pooper. GAME OVER.");
    } else if (hasShield === "no" && quest === "yes") {
      hasShield = false;
      console.log("That sounds fantastic. Biscuit should be in the town square. Please hurry.\nYou rush to the town square and see a dragon causing mayhem. You see the dragon has a collar it with the name 'Biscuit' ");
      const biscuit = readline.question("Do you 'call out' for biscuit or 'run' straight up to him?");
      if (biscuit === "call out") {
        console.log("Biscuit look directly at you. You make eye contact for too long and he breaths fire in your direction. You have no shield to stop it. You burn to a crisp. Game Over.");
      } else {
        console.log("You run swiftly at Biscuit. You get with 10 feet before he notices, but he takes your actions as a threat. Biscuit eats you. Game Over.");
      }
    } else if (hasShield === "no" && quest === "no") {
      hasShield = false;
      console.log("Well aren't you boring. GAME OVER.");
    }
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/