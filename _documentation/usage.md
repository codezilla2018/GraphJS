---
title: Usage
position: 3
parameters:
  - name:
    content:
content_markdown: |-
  | Chart type |
  | -- |
  | LINE_CHART |
  | SIMPLE_XY_LINE_CHART |
  | STEP_CHART |
  | BAR_CHART |
  | PIE_CHART |
  | COMBINATION_CHART |
  | MULTIPLE_XY_LINE_CHART |
  | AREA_CHART |
  | STACKED_BAR_CHART |
  | DONUT_CHART |
  | SPLINE_CHART |
  | LINE_CHART_WITH_REGIONS |
  | STACKED_AREA_CHART |
  | SCATTER_PLOT |
  | GUAGE_CHART |

left_code_blocks:
  - code_block: |-
      let chart = new Graph("generate <CHART_TYPE> from <JSON_DATASOURCE>")
      chart.getOutputJson()
    title: Initialize a chart using the graph object
    language: javascript
right_code_blocks:
  - code_block:
    title:
    language:
---