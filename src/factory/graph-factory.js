import GrammarParser from '../parser/grammar-parser'
import ChartType from '../chart/chart-type'

export default class GraphFactory {

    // generate <graph_type> for datasource <abc> with x as <x> and y as <y>
    constructor(grammar) {

        // Validate and parse the grammar
        let grammarParser = new GrammarParser(grammar)

        let chartType = grammarParser.getChartType()
        switch (chartType){
            case ChartType.LINE_CHART:
                console.log('Line Chart')
                break;
            case ChartType.SIMPLE_XY_LINE_CHART:
                console.log('Simple XY line Chart')
                break;
            case ChartType.STEP_CHART:
                console.log('Step Chart')
                break;
            case ChartType.BAR_CHART:
                console.log('Bar Chart')
                break;
            case ChartType.PIE_CHART:
                console.log('Pie Chart')
                break;
            case ChartType.COMBINATION_CHART:
                console.log('Combination Chart')
                break;
            case ChartType.MULTIPLE_XY_LINE_CHART:
                console.log('Multiple XY Line Chart')
                break;
            case ChartType.AREA_CHART:
                console.log('Area Chart')
                break;
            case ChartType.STACKED_BAR_CHART:
                console.log('Stacked Bar Chart')
                break;
            case ChartType.DONUT_CHART:
                console.log('Donut Chart')
                break;
            case ChartType.SPLINE_CHART:
                console.log('Spline Chart')
                break;
            case ChartType.LINE_CHART_WITH_REGIONS:
                console.log('Line Chart With Regions')
                break;
            case ChartType.STACKED_AREA_CHART:
                console.log('Stacked Area Chart')
                break;
            case ChartType.SCATTER_PLOT:
                console.log('Scatter Plot')
                break;
            case ChartType.GAUGE_CHART:
                console.log('Gauge Chart')
                break;
        }
    }
}