function convertMsFrameToModel(inputFrame, inputToModelMap, modelArrayLength) {
  // create "model array" and fill it with 0, supposedly fast.. https://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array

  const modelArray = [];
  modelArray.length = modelArrayLength;
  modelArray.fill(0);

  // take the INPUT values and fill them in the MODEL
  const inputToModelMapLength = Object.keys(inputToModelMap).length;
  for (let index = 0; index < inputToModelMapLength; index++) {
    if (inputToModelMap[index]) {
      const newPosition = inputToModelMap[index];
      console.log(
        "msInputFrame take value number " +
          index +
          " and put it in modelArray position " +
          newPosition
      );
      const msValue = inputFrame[index];
      modelArray[newPosition] = msValue;
    }
  }

  return modelArray;
}

const data = require("./blendShapes.js");

console.log("data[0]['BlendShapes'][0]");
const msInputFrame = data[0]["BlendShapes"][0];
console.log(msInputFrame); // [0.171, 0.164, 0.038, ... ]

// todo: maybe have different maps for different models?
// ELEMENT FROM MicrosoftAPI array goes to ELEMENT POSITION in the modelArray
const msToModelMap = {
  0 /*eyeBlinkLeft*/: 67,
  1 /*eyeLookDownLeft*/: 40,
  2 /*eyeLookInLeft*/: 44,
  3 /*eyeLookOutLeft*/: 46,
  4 /*eyeLookUpLeft*/: 42,
  5 /*eyeSquintLeft*/: 22,
  6 /*eyeWideLeft*/: 24,
  7 /*eyeBlinkRight*/: 68,
  8 /*eyeLookDownRight*/: 41,
  9 /*eyeLookInRight*/: 45,
  10 /*eyeLookOutRight*/: 47,
  11 /*eyeLookUpRight*/: 43,
  12 /*eyeSquintRight*/: 23,
  13 /*eyeWideRight*/: 25,
  14 /*jawForward*/: 26,
  15 /*jawLeft*/: 27,
  16 /*jawRight*/: 28,
  17 /*jawOpen*/: 51,
  18 /*mouthClose*/: 52,
  19 /*mouthFunnel*/: 53,
  20 /*mouthPucker*/: 31,
  21 /*mouthLeft*/: 38,
  22 /*mouthRight*/: 39,
  23 /*mouthSmileLeft*/: 64,
  24 /*mouthSmileRight*/: 65,
  25 /*mouthFrownLeft*/: 29,
  26 /*mouthFrownRight */: 30,
  27 /*mouthDimpleLeft*/: 54,
  28 /*mouthDimpleRight*/: 55,
  29 /*mouthStretchLeft*/: 56,
  30 /*mouthStretchRight*/: 57,
  31 /*mouthRollLower*/: 58,
  32 /*mouthRollUpper*/: 59,
  33 /*mouthShrugLower*/: 32,
  34 /*mouthShrugUpper*/: 33,
  35 /*mouthPressLeft*/: 62,
  36 /*mouthPressRight*/: 61,
  37 /*mouthLowerDownLeft*/: 36,
  38 /*mouthLowerDownRight*/: 37,
  39 /*mouthUpperUpLeft*/: 62,
  40 /*mouthUpperUpRight */: 63,
  41 /*browDownLeft*/: 17,
  42 /*browDownRight*/: 18,
  43 /*browInnerUp*/: 19,
  44 /*browOuterUpLeft*/: 20,
  45 /*browOuterUpRight*/: 21,
  46 /*cheekPuff*/: 48,
  47 /*cheekSquintLeft*/: 49,
  48 /*cheekSquintRight*/: 50,
  49 /*noseSneerLeft*/: 34,
  50 /*noseSneerRight*/: 35,
  51 /*tongueOut*/: 66,
};

const modelArrayLength = 71;
const frameForModel = convertMsFrameToModel(
  msInputFrame,
  msToModelMap,
  modelArrayLength
);

frameForModel.forEach((element, index) => {
  console.log("index: " + index + "--value: " + element);
});
console.log("Array for (Meta) model:");
console.log(frameForModel);
