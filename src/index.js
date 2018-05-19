import Graph from './graph'

export {Graph}

let sampleData = {
    "data1": [
        30,
        200,
        100,
        400,
        150,
        250
    ],
    "data2": [
        50,
        20,
        10,
        40,
        15,
        25
    ]
}

let gf = new Graph(`generate LINE_CHART for ${JSON.stringify(sampleData)}`)
console.log(gf.generateJson())