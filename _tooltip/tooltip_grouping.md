---
title: Tooltip Grouping
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
                  ["data2", 50, 20, 10, 40, 15, 25],
                  ["data3", 500, 320, 210, 340, 215, 125]
              ]
          },
          "tooltip": {
              "grouped": true
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('ungroup tooltip')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 50, 20, 10, 40, 15, 25],
                  ["data3", 500, 320, 210, 340, 215, 125]
              ]
          },
          "tooltip": {
              "grouped": false
          }
      }
    title: Output
    language: json
---