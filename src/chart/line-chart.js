import Chart from "./chart";

export default class LineChart extends Chart {

    constructor(data) {
        super();

        this.data = data
    }

    generateJson() {
        let outputJson = {
            data: {
                columns: [this.data]
            }
        }
    }
}