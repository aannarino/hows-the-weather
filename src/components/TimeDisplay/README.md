# TimeDisplay

A component to display a time value.

## Props

| Name             | Type                                                        | Default | Description                                                                                                                                  |
| ---------------- | ----------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| time             | number                                                      |         | A unix timestamp from the Epoch                                                                                                              |
| size?            | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' &#124; | 'sm'    | The font size to display. xs is 6px, and each level up is doubled (sm is 12, lg is 24)                                                       |
| TypographyProps? | TypographyProps                                             |         | Material UI Typography props to override the Material UI Typography component. See their [docs](https://mui.com/material-ui/api/typography/) |
