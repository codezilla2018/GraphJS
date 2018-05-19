import {Enum} from 'enumify';

export default class ChartType extends Enum{}

ChartType.initEnum([
    'LINE_CHART',
    'SIMPLE_XY_LINE_CHART',
    'STEP_CHART',
    'BAR_CHART',
    'PIE_CHART',
    'COMBINATION_CHART',
    'MULTIPLE_XY_LINE_CHART',
    'AREA_CHART',
    'STACKED_BAR_CHART',
    'DONUT_CHART',
    'SPLINE_CHART',
    'LINE_CHART_WITH_REGIONS',
    'STACKED_AREA_CHART',
    'SCATTER_PLOT',
    'GAUGE_CHART'
]);