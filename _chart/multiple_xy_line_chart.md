---
title: Multiple XY Line Chart
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "x1": [10, 30, 45, 50, 70, 100],
        "x2": [30, 50, 75, 100, 120],
        "data1": [30, 200, 100, 400, 150, 250],
        "data2": [20, 180, 240, 100, 190]
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set data1 for x1')
      chart.do('set data2 for x2')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "xs": {
                  "data1": "x1",
                  "data2": "x2",
              },
              "columns": [
                  ["x1", 10, 30, 45, 50, 70, 100],
                  ["x2", 30, 50, 75, 100, 120],
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 20, 180, 240, 100, 190]
              ]
          }
      }
    title: Output
    language: json
---