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


class room {
  // your code here
  constructor(description, connection, inventory){
    this.description = description;
    this.connection = connection;
    this.inventory = inventory;     
  }   


  roomInfo(){
    console.log(`Wow this is .. the weirdness ${this.description} exit point seem to be ${this.connection} items are ${this.inventory}`)
  }
}  

  const livingRoom = new room('living room, smells like feet', 'ES', 'couch and 96 inch OLED TV');
  const diningRoom = new room('dining room, smells like someones moms cooking', 'NE', 'half empty banks beer bottle');
  const bedRoom = new room('bed room smells, like teen spirit', 'NW', 'laptop with linux running low battery!!');
  const secretRoom = new room('room with many locks and cases', 'WS', 'One case appears to have a key on it')

  


start();

async function start() {
  const welcomeMessage = `Seem you are the last one here, looks like a had a bit to much to drink.`;
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








