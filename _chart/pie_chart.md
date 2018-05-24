---
title: Pie Chart
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "data1": [30],
        "data2": [120]
      }
    title: Input JSON
    language: json

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30],
                  ["data2", 120],
              ],
              "type" : "pie"
          }
      }
    title: Output
    language: json
---