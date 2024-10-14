import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import theme from '../../theme';
import { authConstant } from '../../authConstant';
import InputField from '../globalComponents/InputField';
import SubmitButton from '../globalComponents/SubmitButton';

const Signup = () => {
  const { text, button_text, fields, link } = authConstant?.signup || {};
  const navigate = useNavigate()
  const [disbled, setDisabled] = useState(true);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
 
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      userData?.firstName &&
      userData?.lastName &&
      userData?.email &&
      userData?.password
    ) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  }, [userData]);
  const handleSubmit = async (e) => {
  
  };
  return (
    <>
      <Box
        action="#"
        component={'form'}
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          width: '110%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '500px',
          px: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { md: '22px', lg: '24px', xl: '26px'  ,pb:1},
              fontWeight: 500,
              color: '#404040',
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {fields?.map(({ type, label, place_holder, name }, index) => (
            <InputField
              key={index}
              type={type}
              label={label}
              placeholder={place_holder}
              onChange={handleInputChange}
              name={name}
              value={userData[name]}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: '#888888',
                border: '1px solid #E4E4E4',
                height: '40px',
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 0.4,
            alignItems: 'center',
          }}
        >
          <SubmitButton
            // disabled={disbled}
            text={button_text}
            type={'submit'}
            style={{
              width: '70%',
              height: '40px',
              border: '1px solid #FAFAFA',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 500,
              color:  '#fff',
              backgroundColor: "#000",
              '&:hover': {
                backgroundColor: `${theme?.palette?.main_color?.dark}`,
                color:'#fff !important'
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#404040',
            }}
          >
            {'Or'}
          </Typography>
          <Link to={link?.href}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                color:`${theme?.palette?.main_color?.main}`,
                textDecoration: 'underLine',
              }}
            >
              {link?.text}
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
