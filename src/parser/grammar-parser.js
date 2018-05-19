import InvalidGrammarError from "../error/invalid-grammar-error";
import ChartType from '../chart/chart-type'

export default class GrammarParser {

    constructor(grammar) {
        this.grammar = grammar
        this.chartType = undefined
        this.datasource = undefined

        // Verify the basic structure of the grammar
        if (GrammarParser.verifyStructure(grammar)) {
            let chartTypeExtract = grammar.match(new RegExp('generate [A-Z_]+ for'))[0]
            this.chartType = chartTypeExtract.slice(9, chartTypeExtract.length - 4)
            this.datasource = grammar.match(new RegExp('for {.*}'))[0].slice(4)

            // Verify the chart type and the datasource
            if (!GrammarParser.verifyChartType(this.chartType) || !GrammarParser.verifyDatasource(this.datasource)) {
                throw new InvalidGrammarError()
            }
        } else {
            throw new InvalidGrammarError()
        }
    }

    static verifyStructure(grammar) {
        return grammar.match(new RegExp('generate [A-Z_]+ for \{.*\}'))
    }

    static verifyChartType(chartType) {
        return ChartType.enumValueOf(chartType) instanceof ChartType
    }

    static verifyDatasource(grammar) {
        // TODO : Verify datasource
        return true
    }
}