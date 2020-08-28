let image = [[1,1,1,0],
             [1,1,0,0],
             [1,0,1,0],
             [1,1,1,0]]

let sr = 0
let sc = 2

newColor = 2

var floodFill = function(image, sr, sc, newColor) {
    // add source/first pixel to pixelMap
    let pixelMap = [[sr][sc]]
    console.log(pixelMap);

    // need an oldColor, define it as the value of source
    let oldColor = 1
    // write a neighborCheck function to check top bottom left and right pixels, 
    function neighborCheck (pixelMap) {
       // loop through pixelMap and add any matches to the pixelmap that aren't already in there
       for (let i = 0; i < pixelMap.length; i++) {
           for (let j = 0; j < pixelMap.length; j++) {
            // if pixel above matches oldColor and if pixel being checked isn't already in pixelMap
            if (pixelMap[i][j] === image[i - 1][j] && pixelMap.includes(image[i - 1][j]) === false) {
                // add it to pixelMap
                console.log("hit first conditional");
                pixelMap += image[i - 1][j]
            }
            // if pixel to the right matches oldColor, and if it isn't in 
            // if pixel to the bottom matches oldColor
            // if pixel to the left matches oldColor
            
           }
       }
    }
    console.log(pixelMap);
    // loop through pixelMapToChange matrix and run neighborCheck on each element
    // once neighborCheck is done, change each element in pixelMapToChange to new color
    // return pixelMapToChange
};

floodFill(image, sr, sc, newColor)

// let image = [[1,1,1,0],
//              [1,1*,0,0],
//              [1,0,1,0],
//              [1,1,1,0]]


