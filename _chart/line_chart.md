---
title: Line Chart
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "data1": [30, 200, 100, 400, 150, 250],
        "data2": [50, 20, 10, 40, 15, 25]
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set bar width as 0.5')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 50, 20, 10, 40, 15, 25]
              ]
          }
      }
    title: Output
    language: json
---