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

        let x = JSON.parse(this.data)
        for(let i in x){
            outputJson.data.columns.push(x[i])
        }

        return outputJson
    }
}