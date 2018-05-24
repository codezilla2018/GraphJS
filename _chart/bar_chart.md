---
title: Bar Chart
position: 
parameters:
  - name:
    content:
content_markdown: 

left_code_blocks:
  - code_block: |-
      {
        "data1": [30, 200, 100, 400, 150, 250],
        "data2": [130, 100, 140, 200, 150, 50]
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set bar width as 0.5')
    title: Config 1
    language: javascript
  - code_block: |-
      chart.do('set bar width as 100 pixels')
    title: Config 2
    language: javascript
  
right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 130, 100, 140, 200, 150, 50]
              ],
              "type": "bar"
          },
          "bar": {
              "width": 100
          }
      }
    title: Output 1
    language: json
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 130, 100, 140, 200, 150, 50]
              ],
              "type": "bar"
          },
          "bar": {
              "width": {
                  "ratio": 0.5
              }
          }
      }
    title: Output 2
    language: json
---