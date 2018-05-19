import Chart from "./chart";

export default class LineChart extends Chart {

    constructor(data) {
        super();

        this.data = data
    }

    generateJson() {
        let outputJson = {
            "data": {
                "columns": []
            }
        }

        let dataJson = JSON.parse(this.data)
        for(let i in dataJson){
            outputJson.data.columns.push([i, ...dataJson[i]])
        }

        return outputJson
    }
}