import React from 'react';
import { IconButton } from '@mui/material';

const SubmitButton = ({
  text,
  style,
  startIcon,
  showPopUp,
  endIcon,
  onClick,
  variant,
  disabled,
  type,
}) => {
  return (
    text && (
      <IconButton
        type={type}
        variant={variant}
        showPopUp={showPopUp}
        sx={style}
        text={text}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        disableRipple
      >
        {text}
      </IconButton>
    )
  );
};

export default SubmitButton;
