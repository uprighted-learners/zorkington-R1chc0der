const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// run the program in the terminal: node "filename with ext"
// Do not touch code above this line.

class treasure {
    // your code here
    constructor(item, description ){
      this.item = item;
      this.description = description;
     
    }   
  
  
    treasureInfo(){
      console.log(`Wow this is the weird ${this.item} its appears ${this.description} `)
    }
  }  
  
    const oLED = new treasure('Television', 'Bit crack as though some put a wii mote through it');
    const beer  = new treasure('bottle', 'half empty with lip stick on it');
    const linuxLaptop = new treasure('Laptop', ' 1995 lenovo, running Linux red hat');
    const randomKey = new treasure('Key','Silver mental object')


    console.log(beer);
  


//----------------------------------------------
let rooms = {
    livingRoom: ["diningRoom"],
    diningRoom: ["bedRoom"],
    bedRoom: ["secretRoom"],
    secretRoom: ["livingRoom"],
};

let currentRoom = "livingRoom";


function enterNewRoom(otherRoom){
    let doorOptions = rooms[currentRoom];

    
    console.log(`\n We are in the: ${currentRoom}`)



    if(doorOptions.includes(otherRoom)){
    currentRoom = otherRoom;
    return `We are in ${currentRoom}`;

    } else {
        throw `Not a valid path you can't go this away from ${currentRoom} to ${otherRoom}`

    }
}

    let goToDiningRoom = enterNewRoom("yellow");
    console.log(goToDiningRoom);

    let goToBedRoom = enterNewRoom("red");
    console.log(goToBedRoom);

    let goToSecretRoom = enterNewRoom("green");
    console.log(goToSecretRoom);

    let goToLivingRoom = enterNewRoom("red");
    console.log(brokenLight);









startEnteringNewRoom();

async function startEnteringNewRoom() {
    const welcomeMessage = `182 Main St.
    You are standing on Main Street between Church and South Winooski.
    There is a door here. A keypad sits on the handle.
    On the door is a handwritten sign.
    >_`;
    let answer = await ask(welcomeMessage);
    // console.log('Now write your code to make this work!');
    // /* process.exit(); */ // stops the game
    if(answer == 's' ){
        console.log("you want to go south to the dining room")

    } else {
        console.log("wow you've been drinking compose yourself")
}
  //process.exit()
}









