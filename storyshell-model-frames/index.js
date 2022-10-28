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
            console.log('msInputFrame take value number ' + index + ' and put it in modelArray position ' + newPosition);
            const msValue = inputFrame[index];
            modelArray[newPosition] = msValue;
        }
    }

    return modelArray;
}


// ELEMENT FROM MicrosoftAPI array goes to ELEMENT POSITION in the modelArray

const data = require('./blendShapes.js');

console.log('data[0][\'BlendShapes\'][0]');
const msInputFrame = data[0]['BlendShapes'][0];
console.log(msInputFrame); // [0.171, 0.164, 0.038, ... ]

// todo: maybe have different maps for different models?
const msToModelMap = {
    0 /*eyeBlinkLeft*/: 67,
    1 /*eyeLookDownLeft*/: 40,
    //todo: ...fill in the rest...
}
const modelArrayLength = 72;
const frameForModel = convertMsFrameToModel(msInputFrame, msToModelMap, modelArrayLength);
console.log('Array for (Meta) model:')
console.log(frameForModel);


