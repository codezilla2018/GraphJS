---
title: Legend Position
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 50, 20, 10, 40, 15, 25]
              ]
          },
          "legend": {
              "position": "bottom"
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('move legend to right')
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
          },
          "legend": {
              "position": "right"
          }
      }
    title: Output
    language: json
---