# DistanceDisplay

A component to display a distance value along with the units the distance is in. You can also prepend text to the beginning of the value where there is a space between the value and the text supplied

## Props

| Name             | Type                                                        | Default  | Description                                                                                                                                  |
| ---------------- | ----------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| value            | number                                                      |          | The distance value in Km or Mi                                                                                                               |
| unit?            | 'standard' &#124; 'metric' &#124; 'imperial'                | "metric" | The units to display after the distance value. This will display Km if the units are metric and Mi for standard or imperial                  |
| prepend?         | string                                                      | null     | The text to display infront of the distance value                                                                                            |
| size?            | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' &#124; | 'sm'     | The font size to display. xs is 6px, and each level up is doubled (sm is 12, lg is 24)                                                       |
| TypographyProps? | TypographyProps                                             |          | Material UI Typography props to override the Material UI Typography component. See their [docs](https://mui.com/material-ui/api/typography/) |
