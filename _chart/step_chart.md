---
title: Step Chart
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "data1": [300, 350, 300, 0, 0, 100],
        "data2": [130, 100, 140, 200, 150, 50]
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('where data1 as step')
    title: Config 1
    language: javascript
  - code_block: |-
      chart.do('where data2 as area-step')
    title: Config 2
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 300, 350, 300, 0, 0, 100],
                  ["data2", 130, 100, 140, 200, 150, 50]
              ],
              "types": {
                  "data1": "step"
              }
          }
      }
    title: Output 1
    language: json
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 300, 350, 300, 0, 0, 100],
                  ["data2", 130, 100, 140, 200, 150, 50]
              ],
              "types": {
                  "types": "area-step"
              }
          }
      }
    title: Output 2
    language: json
---