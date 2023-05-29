# AppBar

A component to display the page title and an optional back button at the top of each page.

## Props

This component extends Material UIs AppBarProps. You can pass any of the props from AppBarProps as a prop to this AppBar component. See Material UI's [docs](https://mui.com/material-ui/api/app-bar/)

| Name               | Type            | Default | Description                                                                                                                                  |
| ------------------ | --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| title              | string          |         | The oage title to display at the top of the page                                                                                             |
| displayBackButton? | boolean         | false   | A flag to tell the component if it should display a back button. When set to true, the onClickBackButton prop will be required               |
| onClickBackButton? | () => void      |         | Required when the displayBackButton prop is set to true. This is a callback to be fired when the back button is clicked.                     |
| ToolBarProps?      | ToolBarProps    |         | Material UI ToolBar props to override the Material UI ToolBar component. See their [docs](https://mui.com/material-ui/api/toolbar/)          |
| TypographyProps?   | TypographyProps |         | Material UI Typography props to override the Material UI Typography component. See their [docs](https://mui.com/material-ui/api/typography/) |
