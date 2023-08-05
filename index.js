// Code your solution in this file!

function distanceFromHqInBlocks(pickupLoc) {
  const headQuarterLoc = 42; 
  return Math.abs(pickupLoc - headQuarterLoc);
}

/*console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));*/
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

const feetOfABlock = 264;

function distanceFromHqInFeet(pickupLoc) {
  const distanceInFeet = distanceFromHqInBlocks(pickupLoc);
  return  distanceInFeet * feetOfABlock;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(pickupLoc, headQuarterLoc) {
  return Math.abs(pickupLoc - headQuarterLoc) * feetOfABlock;
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(pickupLoc, headQuarterLoc) {
  const distance = distanceTravelledInFeet(pickupLoc, headQuarterLoc);
  if (distance <= 400){
    return 0;
  }else if (distance > 400 && distance <= 2000){
    return 2.56;
  }else if (distance > 2000 && distance <= 2500){
    return 25;
  }else {
    return 'cannot travel that far';
  }
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);







