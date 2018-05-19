import Chart from "./chart";

export default class SplineChart extends Chart {

    constructor(data) {
        super();

        this.data = data
    }

    generateJson() {
        let outputJson = {
            "data": {
                "columns": [],
                "type": "spline"
            }
        }

        let dataJson = JSON.parse(this.data)
        for(let i in dataJson){
            outputJson.data.columns.push([i, ...dataJson[i]])
        }

        return outputJson
    }
}