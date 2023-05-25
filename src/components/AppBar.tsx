import MUIAppBar, { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import type { ToolbarProps } from '@mui/material/Toolbar';
import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface AppBarBase extends MUIAppBarProps {
  title: string;
  ToolbarProps?: ToolbarProps;
  TypographyProps?: Omit<TypographyProps, 'ref'>;
}

export interface AppBarPropsWithBackButton extends AppBarBase {
  displayBackButton?: true;
  onClickBackButton: () => void;
}

export interface AppBarPropsNoBackButton extends AppBarBase {
  displayBackButton?: false;
  onClickBackButton?: never;
}

export const AppBar = (
  props: AppBarPropsWithBackButton | AppBarPropsNoBackButton
) => {
  const {
    title,
    displayBackButton = false,
    onClickBackButton,
    ToolbarProps = {},
    TypographyProps = {},
    ...AppBarProps
  } = props;
  return (
    <MUIAppBar position="static" {...AppBarProps}>
      <Toolbar {...ToolbarProps}>
        {displayBackButton && (
          <IconButton
            onClick={onClickBackButton}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography
          variant="h4"
          variantMapping={{ h4: 'h1' }}
          sx={{ flexGrow: 1 }}
          {...TypographyProps}
        >
          {title}
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
};
