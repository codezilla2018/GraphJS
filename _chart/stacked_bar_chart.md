---
title: Stacked Bar Chart
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "data1": [-30, 200, 200, 400, -150, 250],
        "data2": [130, 100, -100, 200, -150, 50],
        "data3": [-230, 200, 200, -300, 250, 250]
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('group data1, data2')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", -30, 200, 200, 400, -150, 250],
                  ["data2", 130, 100, -100, 200, -150, 50],
                  ["data3", -230, 200, 200, -300, 250, 250]
              ],
              "type": "bar",
              "groups": [
                  ["data1", "data2"]
              ]
          }
      }
    title: Output
    language: json
---