---
title: Axis Label
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
                  ["sample", 30, 200, 100, 400, 150, 250],
                  ["sample2", 130, 300, 200, 500, 250, 350]
              ]
          },
          "axis": {
              "x": {
                  "label": "undefined"
              },
              "y": {
                  "label": "undefined"
              }
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set x axis label as my-x')
      chart.do('set Y axis label as my-y')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["sample", 30, 200, 100, 400, 150, 250],
                  ["sample2", 130, 300, 200, 500, 250, 350]
              ]
          },
          "axis": {
              "x": {
                  "label": "my-x"
              },
              "y": {
                  "label": "my-y"
              }
          }
      }
    title: Output
    language: json
---