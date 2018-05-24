---
title: Area Chart
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "data1": [300, 350, 300, 0, 0, 0],
        "data2": [130, 100, 140, 200, 150, 50]
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('where data1 as area')
      chart.do('where data2 as area-spline')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          data: {
              columns: [
                  ['data1', 300, 350, 300, 0, 0, 0],
                  ['data2', 130, 100, 140, 200, 150, 50]
              ],
              types: {
                  data1: 'area',
                  data2: 'area-spline'
              }
          }
      }
    title: Output
    language: json
---