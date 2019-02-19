/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  if (data.length === 0) return true;

  // convert to boolean
  var byteList = [];
  for(var i=0; i<data.length; i++) {
    var decVal = data[i];
    var binaryVal = []
    while (decVal>0) {
      binaryVal.push(decVal%2);
      decVal = Math.floor(decVal/2);
    }

    while (binaryVal.length < 8) {
      binaryVal.push(0);
    }
    if (binaryVal.length > 8) return false;
    byteList.push(binaryVal.slice(0,8).reverse());
  }

  while (byteList.length > 0) {
    // figure out the byte by looking at the first n bits
    // 010, 110, 1110, 11110 -> 1, 2, 3, 4
    var byte1 = byteList.shift();
    var [bitPointer, numBytes] = [0,0]
    while (byte1[bitPointer]===1) {
      bitPointer += 1;
      numBytes += 1;
    }
    var bit1 = byte1[0];
    var bit2 = byte1[1];
    if (bit1===1 && bit2===0) return false;
    if (bit1===0 && bit2===1) numBytes=1;
    if (numBytes > 4) return false;

    processedList = validateBytes(numBytes, byteList);
    if (processedList === false) return false;
    byteList = processedList;
  }

  return true;
};

function validateBytes(numBytes, byteList) {
  // need exactly n-1 bytes starting w/10's after first byte
  var bytesCounted = 0;
  while(bytesCounted < numBytes-1) {
    if (byteList.length === 0) return false;
    var continuationByte = byteList[0]; 
    byteList.shift();
    var bit1 = continuationByte[0];
    var bit2 = continuationByte[1];
    if (bit1 !== 1 || bit2 !== 0) {
      return false;
    }
    bytesCounted += 1;
  }

  return byteList;
}
