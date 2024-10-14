import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, InputAdornment, Typography } from '@mui/material';
import { json, Link, useNavigate } from 'react-router-dom';
import { EmailOutlined, LockOutlined } from '@mui/icons-material';
import SubmitButton from '../globalComponents/SubmitButton';
import theme from '../../theme';
import InputField from '../globalComponents/InputField';
import { authConstant } from '../../authConstant';

const Login = () => {
  const { text, checkbox_text,  button_text, fields, link } =
  authConstant?.login || {};
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    remember_me: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  };
  const handleChangeRemember = (event) => {
    setRememberMe(event.target.checked);
    setUserData({
      ...userData,
      remember_me: event.target.checked,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setRememberMe(false)
      try {
        if (user) {
          localStorage.setItem('token', JSON.stringify(user));
          // navigate('/dashbosr');
        } else {
          navigate('/');
          setUserData({email:'',password:''})
        }
        const response = await loginUser({ email, password });
        console.log(user)
        // Assuming the response contains user data and redirect to home
        navigate('/dashboard');
      } catch (err) {
        setError('Invalid credentials');
      }
    
  };
  
  return (
    <>
      <Box
        action="#"
        component={'form'}
        type={'submit'}
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          maxWidth: '500px',
        }}
      >
        <Box>
        <Typography
            sx={{
              fontSize: { md: '22px', lg: '24px', xl: '26px' },
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
            gap: 2,
          }}
        >
          {fields?.map(({ type, label, place_holder,icon}) => (
            <InputField
              icon={
                  <InputAdornment position="start">
                    {type === 'email' && <EmailOutlined fontSize='20px' />}
                    {type === 'password' && <LockOutlined fontSize='20px'/>} 
                  </InputAdornment>
              }
              key={type}
              type={type}
              label={label}
              placeholder={place_holder}
              onChange={handleInputChange}
              name={type}
              value={userData[type]}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: '#888888',
                border: '2px solid #E4E4E4',
                height: '40px',
                backgroundColor: "#fff"
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <FormControlLabel
            sx={{
              fontSize: '14px',
              fontFamily: 400,
              '@media (max-width: 400px)': {
                order: { xs: 2, sm: 1 },
                width: '100%',
              },
              width: 'auto',
              color:  `${theme?.palette?.main_color?.main}`,
              '& .MuiCheckbox-root': {
                color: `${theme?.palette?.main_color?.main}`,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&.Mui-checked': {
                  color: 'success !important',
                },
              },
            }}
            control={
              <Checkbox
                disableRipple
                checked={rememberMe}
                onChange={handleChangeRemember}
                border='1px solid success'
              />
            }
            label={
              <>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#404040',
                  }}
                >
                  {checkbox_text}
                </Typography>
              </>
            }
          />
            <Link to={link?.reset}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                pt:1.5,
                color: `${theme?.palette?.main_color?.main}`,
                textDecoration: 'underLine',
              }}
            >
              Forget password?
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 0.4,
            alignItems: 'center',
            pt: 5,
            px: 4,
          }}
        >
          <SubmitButton
            disabled={!userData?.email || !userData?.password || !rememberMe}
            text={button_text}
            type={'submit'}
            style={{
              width: '70%',
              height: '40px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 500,
              color:
                !userData?.email || !userData?.password || !rememberMe
                  ? `${theme?.palette?.main_color?.main} !important` 
                  : '#ffffff',
              backgroundColor:
                !userData?.email || !userData?.password || !rememberMe
                  ? `${theme?.palette?.main_color?.main}`
                  : "#000",
              '&:hover': {
                backgroundColor: `${theme?.palette?.main_color?.dark}`,
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
                fontWeight: 500,
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
}

export default Login;
