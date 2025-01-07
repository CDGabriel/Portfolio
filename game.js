const prompt = require("prompt-sync")();
const name = prompt("Tell me, what is your name? ")
console.log ("Hello " + name + " , I'm the Narrator.")

const shouldWePlay = prompt("Would you like to play a game, " + name + " ?")

if (shouldWePlay.toLowerCase() === "yes") {
    const leftOrRight = prompt("You enter a dungeon with two wooden doors on each side. Left or right?")
    if (leftOrRight.toLowerCase() == "left") {
        console.log(`▬▬ι═══════ﺤ You found a sword behind the door! Not just any sword, a katana!
Next on your path is a wooden bridge to the left and a random flight of stairs with tiny spikes right ahead.`)
        const leftOrAhead = prompt("Left or ahead?")
        if (leftOrAhead.toLowerCase() === "left") {
            console.log("As you cross the bridge, two wooden planks break and a pair of hands drag into the darkness. Your existence soon ceases. Game Over")
        }
        else if (leftOrAhead.toLowerCase() === "ahead") {
            console.log ("You bear the pain of the spikes until you enter another room with a giant furry green monster. It sees you and wastes no time swinging its claws at you.You dodge the attack and have one chance to end this beast")
            const lastFight = prompt("Do you use the sword to go for its 'head', or for its 'heart'?")
            if (lastFight.toLowerCase() === "head") {
                console.log(`The sword makes contact with the monster's neck. You didn't expect the sword to be so sharp that it would go through the flesh like butter. 
The head falls to the ground and the body shortly follows. Congratulations! You got one hell of a story to tell people! Except...
The ceiling falls down on the stairs, the only exit out of this awful smelling room. Great...I'm stuck here with you!`)
            }
            else if (lastFight.toLowerCase() === "heart") {
                console.log(`You try to pierce the monster's heart with the tip of your sword. The sword gets stuck in the chest and the monster doesn't seem to be bothered.
A quickly slash of dark-red claws sends your neck away from your body. You should've gone for the head.`)
            }
            else {
                console.log("Not bothering anymore.")
            }
        }
        else {
            console.log("Really?")
        }
    }
    else if (leftOrRight.toLowerCase() === "right") {
        console.log("٩(̾●̮̮̃̾•̃̾)۶ A...Weird monster beheads you and you die. Game over.")
    }
    else {
        console.log("LEFT OR RIGHT! NOTHING ELSE.")
    }
}
else if (shouldWePlay.toLowerCase() == "no") {
    console.log("You are no fun.")
    
}
else {
    console.log("It's either a 'yes' or a 'no'. Try again.")
}