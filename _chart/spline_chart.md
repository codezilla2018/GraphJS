---
title: Spline Chart
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

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 130, 100, 140, 200, 150, 50]
              ],
              "type": "spline"
          }
      }
    title: Output
    language: json
---