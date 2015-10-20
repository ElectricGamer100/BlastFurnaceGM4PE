var structureOneX = {x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, x6: 0, x7: 0, x8: 0, x9:0};
var structureOneY = {y1: 0, y2: 0, y3: 0, y4: 0, y5: 0, y6: 0, y7: 0, y8: 0, y9:0};
var structureOneZ = {z1: 0, z2: 0, z3: 0, z4: 0, z5: 0, z6: 0, z7: 0, z8: 0, z9:0};

var structureOneConfirmed = false;

function useItem(x,y,z,i,b,s,id,bd){
  if(i == 0 && b == 1 && Level.getTile(x+1,y,z) == 1 && Level.getTile(x-1,y,z) == 1 && Level.getTile(x+1,y,z+1) == 1 && Level.getTile(x-1,y,z+1) == 1 && Level.getTile(x,y,z+1) == 1 && Level.getTile(x+1,y,z+2) == 1 && Level.getTile(x-1,y,z+2) == 1 && Level.getTile(x,y,z+2) == 1){
    structureOneConfirmed = true;
    structureOneX.x1 = x;
    structureOneX.x2 = x+1;
    structureOneX.x3 = x-1;
    structureOneX.x4 = x+1;
    structureOneX.x5 = x-1;
    structureOneX.x6 = x;
    structureOneX.x7 = x+1;
    structureOneX.x9 = x-1;
    structureOneX.x9 = x;
    
    structureOneY.y1 = y;
    structureOneY.y2 = y;
    structureOneY.y3 = y;
    structureOneY.y4 = y;
    structureOneY.y5 = y;
    structureOneY.y6 = y;
    structureOneY.y7 = y;
    structureOneY.y8 = y;
    structureOneY.y9 = y;
    
    structureOneZ.z1 = z;
    structureOneZ.z2 = z;
    structureOneZ.z3 = z;
    structureOneZ.z4 = z+1;
    structureOneZ.z5 = z+1;
    structureOneZ.z6 = z+1;
    structureOneZ.z7 = z+2;
    structureOneZ.z8 = z+2;
    structureOneZ.z9 = z+2;
    clientMessage("Yay it works");
  }
}

function modTick(){
  if(structureOneConfirmed == true){
    clientMessage("yay");
  }
}

function leaveGame(){
  ModPE.saveData("structureOneConfirmed",structureOneConfirmed);
  ModPE.saveData("structureOneX",structureOneX);
  ModPE.saveData("structureOneY",structureOneY);
  ModPE.saveData("structureOneZ",structureOneZ);
}
