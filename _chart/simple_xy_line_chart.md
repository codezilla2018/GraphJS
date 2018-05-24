---
title: Simple XY line Chart
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "myX": [30, 50, 100, 230, 300, 310],
        "data1": [30, 200, 100, 400, 150, 250],
        "data2": [130, 300, 200, 300, 250, 450]
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('where myX as x')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "x": "myX",
              "columns": [
                  ["x", 30, 50, 100, 230, 300, 310],
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 130, 300, 200, 300, 250, 450]
              ]
          }
      }
    title: Output
    language: json
---