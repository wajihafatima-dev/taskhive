import React from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import theme from "../../theme";

const InputField = ({
  label,
  style,
  type,
  placeholder,
  icon,
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1.2 }}
    >
      {label && (
        <Typography
          component={"label"}
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color:"#000",
          }}
        >
          {label}
        </Typography>
      )}
      {type && (
        <OutlinedInput
          required
          fullWidth
          placeholder={placeholder}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          inputProps={{ style: { height: "8px" } }}
          startAdornment={
            icon ? (
              <InputAdornment position="start">{icon}</InputAdornment>
            ) : null
          }
          endAdornment={
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  disableRipple
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{
                    color: "#888888",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#888888",
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null
          }
          sx={{
            pt: 0.1,
            width: style?.width || "100%",
            height: style?.height || "40px",
            color: style?.color || "black",
            backgroundColor: style?.backgroundColor || "#fff",
            fontSize: style?.fontSize || "15px",
            paddingY: style?.paddingY || 3,
            marginBottom:style?.marginBottom|| 2,
            fontWeight: style?.fontWeight || 400,
            borderRadius: style?.borderRadius || "auto",
            "& fieldset": { border: style?.border || "2px solid lightgray" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: style?.border || "1px solid black",
            },
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: style?.border || "1px solid black",
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default InputField;
