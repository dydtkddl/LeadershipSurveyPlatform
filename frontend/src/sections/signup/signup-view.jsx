import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';


// const pwReg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/);
const yyReg = /^(19[0-9][0-9]|20\d{2})$/;
const dReg = /^([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
const mReg = /^(1[0-2]|[1-9]|0[1-9])$/; // 월 검사용 정규식

// ----------------------------------------------------------------------

export default function SignupView() {
  const theme = useTheme();



// My Code
const [signupData, setSignupData] = useState({
  name: '',
  birthdate_YY: '',
  birthdate_MM: '',
  birthdate_DD: '',
  userid: '',
  password: '',
  passwordConfirm: '',
  ispasswordMatch: true,
  isyearOk : true,
  ismonthOk : true,
  isdayOk : true,
  submitokay : false,
  passwordMatchError : "",
  birYearError: '',
  birMonthError: '',
  birDayError: ''
});

const changeValue = (e) => {
  const { name, value } = e.target;
  const updatedSignupData = { ...signupData, [name]: value };

  if (name === 'passwordConfirm') {
    updatedSignupData.submitokay = true
    updatedSignupData.ispasswordMatch = value === signupData.password;
    
  }

  if (name.slice(0, -3) === "birthdate") {
    if (name === 'birthdate_YY' && !yyReg.test(value)) {
      updatedSignupData.isyearOk = false;
      updatedSignupData.birYearError = "태어난 년도 4자리를 정확하게 입력하세요."
      
    } else {
      updatedSignupData.isyearOk = true;
      updatedSignupData.birYearError = ""
    updatedSignupData.submitokay = true
    }

    if (name === 'birthdate_MM' && !mReg.test(value)) {
      updatedSignupData.ismonthOk =false;
      updatedSignupData.birMonthError = "태어난 월을 정확하게 입력해주세요"
    } else {
      updatedSignupData.ismonthOk = true;
      updatedSignupData.birMonthError = ""

      updatedSignupData.submitokay = true
    }

    if (name === 'birthdate_DD' && !dReg.test(value)) {
      updatedSignupData.isdayOk =false;
      updatedSignupData.birDayError = "태어난 일을 정확하게 입력해주세요"
    } else {
      updatedSignupData.birDayError = ""
      updatedSignupData.isdayOk =true;
      updatedSignupData.submitokay = true
    }

  }
  setSignupData(updatedSignupData);
};

const onSubmit = async (e) => {
  e.preventDefault();

  // Check if any required field is empty
  const requiredFields = ['name', 'birthdate_YY', 'birthdate_MM', 'birthdate_DD', 'userid', 'password', 'passwordConfirm'];
  const isAnyFieldEmpty = requiredFields.some(field => !signupData[field]);

  if (isAnyFieldEmpty) {
    window.alert("Please fill in all required fields.");
    return;
  }

  // Form data is complete, proceed with submission
  const { birthdate_YY, birthdate_MM, birthdate_DD, ...rest } = signupData;
  const birthdate = `${birthdate_YY}/${birthdate_MM}/${birthdate_DD}`;
  const updatedUserData = { ...rest, birthdate };

  try {
    console.log(updatedUserData)
    const response = await fetch("https://leadershipsurvey.pythonanywhere.com/signup_backend/", {
    // const response = await fetch("http://localhost:3030/signup_backend/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUserData)
    });

    const data = await response.json();
    if (data.message === "EXISTS_ID") {
      console.log(data)
      window.alert("The same ID exists");
    } else if (data.message === "success") {
      window.alert("success");
      window.location.href = "/signin";
    } else {
      console.log("서버오류 : ", response.status);
    }
  } catch (error) {
    console.error('오류:', error);
  }
}
// END



  const renderForm = (
    <>
      <Stack spacing={3}>
      <TextField
            label="name"
            name="name"
            margin="dense"
            required
            fullWidth
            autoFocus
            onChange={changeValue}
          />
          <Grid container>
            <Grid item xs={4} paddingRight="4px">
              <TextField
                label="birthyear"
                name="birthdate_YY"
                margin="dense"
                required
                fullWidth
                value={signupData.birthdate_YY}
                onChange={changeValue}
                error={signupData.isyearOk ===false}
                helperText={signupData.birYearError}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="birthmonth"
                name="birthdate_MM"
                margin="dense"
                required
                fullWidth
                value={signupData.birthdate_MM}
                onChange={changeValue}
                error={signupData.ismonthOk ===false}
                helperText={signupData.birMonthError}
              />
            </Grid>
            <Grid item xs={4} paddingLeft="4px">
              <TextField
                label="birthdate"
                name="birthdate_DD"
                margin="dense"
                required
                fullWidth
                value={signupData.birthdate_DD}
                onChange={changeValue}
                error={signupData.isdayOk ===false}
                helperText={signupData.birDayError}
              />
            </Grid>
          </Grid>
          <TextField label="ID" name="userid" margin="dense" required fullWidth onChange={changeValue} />
          <TextField
            label="PassWord"
            type="password"
            name="password"
            required
            fullWidth
            onChange={changeValue}
            margin="dense"
          />
          <TextField
            label="Password Confirm"
            type="password"
            name="passwordConfirm"
            required
            fullWidth
            margin="dense"
            onChange={changeValue}
            error={signupData.ispasswordMatch===false}
            helperText={
              signupData.errormessage
            }
          />
      </Stack>

      

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={onSubmit} sx  = {{mt : 3}}
      >
        SignIn
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />


          
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        > 
          <Stack direction="row" spacing={2} alignItems="center" position = "relative">
            <Link href = "signin">
            <Iconify  position = "absolute" sx = {{top : 9}}
              icon="ic:twotone-arrow-back-ios"
            /></Link>
            <Typography variant="h4" sx = {{pl : 2, pb : 5}}>Sign Up</Typography>
          </Stack>
         

          

          {/* <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider> */}
          <form>
          {renderForm}
          </form>
        </Card>
      </Stack>
    </Box>
  );
}
