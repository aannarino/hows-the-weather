# TemperatureDisplay

A component to display a temperature value along with the units the temperature is in. You can also prepend text to the beginning of the value where there is a space between the value and the text supplied

## Props

| Name             | Type                                                        | Default | Description                                                                                                                                  |
| ---------------- | ----------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| value            | number                                                      |         | The temperature value in Km or Mi                                                                                                            |
| unit?            | 'C' &#124; 'F'                                              | "C"     | The units to display after the temperature value.                                                                                            |
| prepend?         | string                                                      | null    | The text to display infront of the temperature value                                                                                         |
| size?            | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' &#124; | 'sm'    | The font size to display. xs is 6px, and each level up is doubled (sm is 12, lg is 24)                                                       |
| TypographyProps? | TypographyProps                                             |         | Material UI Typography props to override the Material UI Typography component. See their [docs](https://mui.com/material-ui/api/typography/) |
