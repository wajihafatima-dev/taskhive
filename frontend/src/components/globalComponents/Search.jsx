import { React, useEffect, useState } from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

export default function Search({
  data ,
  find,
  placeHolder,
  setFilteredData,
}) {
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredData && setFilteredData(data);
    }
  }, [searchValue]);

  const handleSearch = (data) => {
    const filteredData =
      data &&
      data?.filter((item) =>
        item?.[find]
          ?.toString()
          ?.toLowerCase()
          ?.includes(searchValue && searchValue?.toLowerCase().toString())
      );
    return (
      setFilteredData &&
      setFilteredData(filteredData?.length > 0 ? filteredData : data)
    );
  };

  return (
    <>
      <Box
        sx={{
          p: "0px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "350px",
         boder:'2px solid gray'  
        }}
      >
        <InputBase
          onChange={(e) => setSearchValue(e?.target?.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeHolder ? placeHolder : "Search"}
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          onClick={() => handleSearch(data)}
          disableFocusRipple
          sx={{
            p: "8px",
            backgroundColor: "#efefef",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "darkgray",
              color: "#fff",
            },
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </>
  );
}
