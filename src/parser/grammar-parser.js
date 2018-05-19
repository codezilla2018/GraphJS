import ChartType from '../chart/chart-type'

export default class GrammarParser{

    constructor(grammar) {
        this.grammar = grammar

        if(GrammarParser.verifyGrammar(grammar)){

        }else{
            // TODO : Throw error
        }
    }

    static verifyGrammar(grammar){
        // TODO : Validate the grammar
        return true
    }

    getChartType(){
        // TODO : Return chart type
    }

    getDatasource(){
        // TODO : Return datasource
    }

    getXLabel(){
        // TODO : Return X label
    }

    getYLabel(){
        // TODO : Return Y label
    }
}