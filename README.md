# ResizablePanelsReact

A simple react component to create resizable panels :D

Props:

- **bkcolor**: set a background color
- **displayDirection**: its like flex direction, you can choose "row" for horizontal resizing or "column" for vertical resizing
- **width**: set a width for you component
- **height**: set a height for you component
- **panelsSize**: a array to set your panels sizes, if you have 2 panels
- **sizeUnitMeasure**: unit used to calculate the amount to resize (px or %)
- **resizerColor**: change resizer color
- **resizerSize**: change resizer size
- **startResize**: callback function that will be called when the user starts resizing (mousedown)
- **onResize**: callback function that will be called during resize (mousemove). Number of pixels displacement is passed as the first argument
- **stopResize**: callback function that will be called when the user stops resizing (mouseup)

Code sample on CodeSandBox: https://codesandbox.io/embed/8l8lpp5nk9?fontsize=14
