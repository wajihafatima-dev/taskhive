import React, { useEffect, useState } from "react";
import { Box,Typography,} from "@mui/material";
import InputField from "../../components/global/InputField";
import SubmitButton from "../../components/global/SubmitButton";
import { useNavigate } from "react-router-dom";
import {constant } from "../../constants/constant";
import theme from "../../theme";
import { getDatabase, push, ref, set } from "firebase/database";

const Form = () => {
  const { text, button_text, fields, redio } = constant?.form || {};
  const [disbled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    customer_id: "",
    name: "",
    email: "",
    address: "",
    contact:''
  });
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (
      userData?.customer_id &&
      userData?.name &&
      userData?.email &&
      userData?.address &&
      userData?.contact 
   
    ) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  }, [userData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const db = getDatabase();
    const Ref = push(ref(db, "customers"));
    try {
        await set(Ref, {
            name: userData.name,
            address: userData.address,
            email: userData.email,
            contact: userData.contact,
        });
        console.log("Data successfully submitted to Firebase");
        setUserData({
          customer_id: "",
          name: "",
          email: "",
          address: "",
          contact:''
        });
        navigate('/roomdetail')

    } catch (error) {
        console.error("Error sending data:", error.message);
    }
  }
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 4,
        }}
      >
        <Box
          action="#"
          component={"form"}
          type={"submit"}
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            gap: 2,
            boxShadow: "3px 5px 5px 5px #00000040",
            // background: 'linear-gradient(to bottom right,#5D5FEF, #4079ED )',
            backgroundColor: "#fff",
            padding: "25px",
            maxWidth: "500px",
          }}
        >
          <Box sx={{ color: "#000" }}>
            <Typography variant="h5">{text}</Typography>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {fields?.map(({ name, type, label, place_holder }) => (
              <InputField
                key={name}
                type={type}
                label={label}
                placeholder={place_holder}
                onChange={handleInputChange}
                name={name}
                value={userData[name]}
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  borderRadius: "6px",
                  color: "#000",
                  border: "2px solid gray",
                  height: "40px",
                  backgroundColor: "#fff",
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              gap: 1.4,
              alignItems: "center",
              pb: 5,
              px: 4,
            }}
          >
            <SubmitButton
              text={button_text}
              type={"submit"}
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#fff !important",
                boxShadow: "5px 5px 5px -1px #00000040",
                backgroundColor: `${theme?.palette?.main_color?.main}`,
                "&:hover": {
                  backgroundColor: `${theme?.palette?.main_color?.dark}`,
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Form;
