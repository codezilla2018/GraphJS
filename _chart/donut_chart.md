---
title: Donut Chart
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
  - code_block: |-
      chart.do('set title as my-donut')
    title: Config 1
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30],
                  ["data2", 120],
              ],
              "type" : "donut"
          },
          "donut": {
              "title": "my-donut"
          }
      }
    title: Output
    language: json
---