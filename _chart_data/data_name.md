---
title: Data Name
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
              ],
              "names": {
              }
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set data1 data label as Name1')
      chart.do('set data2 data label as Name2')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 50, 20, 10, 40, 15, 25]
              ],
              "names": {
                  "data1": "Name 1",
                  "data2": "Name 2"
              }
          }
      }
    title: Output
    language: json
---