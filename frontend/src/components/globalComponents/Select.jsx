import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import theme from "../../theme";

const SelectValue = ({ selectValue, setSelectValue, data, label }) => {
  return (
    <Box sx={{ width: { lg: "45%", md: "35%" }, maxWidth: "300px", my: 0.5,backgroundColor: `${theme?.palette?.background.default}` }}>
      <FormControl fullWidth>
        {label && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label={label || null}
          onChange={(e) => setSelectValue(e.target.value || "")}
        >
          {data &&
            data?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default SelectValue;
{
  /* <MuiSelect
  selectValue={selectValue}
  setSeletValue={setSeletValue}
  data={name}
  label="Select"
/>
*/
}
