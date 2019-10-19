function findNumberPos(numToFind, arr, startingPos) {
   const middlePos = Math.floor(arr.length / 2);
   const middle = arr[middlePos];
   
   if (middle === numToFind) {
      return startingPos + middlePos;
   } else if (numToFind > middle) {
      return findNumberPos(numToFind, arr.slice(middlePos), middlePos)
   } else {
     return findNumberPos(numToFind, arr.slice(0, middlePos), startingPos)
   }
}

// findNumberPos(5, [1,2,4,5,6,7,8], 0)
module.exports = findNumberPos;