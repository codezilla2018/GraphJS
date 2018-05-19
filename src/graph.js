import GrammarParser from './parser/grammar-parser'
import ChartType from './chart/chart-type'
import LineChart from "./chart/line-chart";
import SimpleXYLineChart from "./chart/simple-xy-line-chart";
import StepChart from "./chart/step-chart";
import BarChart from "./chart/bar-chart";
import PieChart from "./chart/pie-chart";
import CombinationChart from "./chart/combination-chart";
import MultipleXYLineChart from "./chart/multiple-xy-line-chart";
import AreaChart from "./chart/area-chart";
import StackedBarChart from "./chart/stacked-bar-chart";
import DonutChart from "./chart/donut-chart";
import SplineChart from "./chart/spline-chart";
import LineChartWithRegions from "./chart/line-chart-with-regions";
import StackedAreaChart from "./chart/stacked-area-chart";
import ScatterPlot from "./chart/scatter-plot";
import GaugeChart from "./chart/gauge-chart";

let _chart = undefined

export default class Graph {

    // generate <graph_type> for <datasource>
    constructor(grammar) {

        // Validate and parse the grammar
        let grammarParser = new GrammarParser(grammar)

        let chartType = grammarParser.chartType
        switch (ChartType.enumValueOf(chartType)){
            case ChartType.LINE_CHART:
                _chart = new LineChart(grammarParser.datasource)
                break

            case ChartType.SIMPLE_XY_LINE_CHART:
                _chart = new SimpleXYLineChart()
                break

            case ChartType.STEP_CHART:
                _chart = new StepChart()
                break

            case ChartType.BAR_CHART:
                _chart = new BarChart()
                break

            case ChartType.PIE_CHART:
                _chart = new PieChart()
                break

            case ChartType.COMBINATION_CHART:
                _chart = new CombinationChart()
                break

            case ChartType.MULTIPLE_XY_LINE_CHART:
                _chart = new MultipleXYLineChart()
                break

            case ChartType.AREA_CHART:
                _chart = new AreaChart()
                break

            case ChartType.STACKED_BAR_CHART:
                _chart = new StackedBarChart()
                break

            case ChartType.DONUT_CHART:
                _chart = new DonutChart()
                break

            case ChartType.SPLINE_CHART:
                _chart = new SplineChart()
                break

            case ChartType.LINE_CHART_WITH_REGIONS:
                _chart = new LineChartWithRegions()
                break

            case ChartType.STACKED_AREA_CHART:
                _chart = new StackedAreaChart()
                break

            case ChartType.SCATTER_PLOT:
                _chart = new ScatterPlot()
                break

            case ChartType.GAUGE_CHART:
                _chart = new GaugeChart()
                break
        }
    }

    generateJson(){
        return _chart.generateJson()
    }
}