import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';
import { result_group_labels } from 'src/components/result_group_labels';

import AppSurveys from '../_app-surveys';


// ----------------------------------------------------------------------
const requestLanguage = "en";
console.log(requestLanguage)
export default function ResultLeadershipSurvey({ surveyname }) {
  const [responde, setResponse] = useState({})
  const [isloading, setIsloading] = useState(true)
  const token = localStorage.getItem("token")
  const group_info = result_group_labels[surveyname]
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://leadershipsurvey.pythonanywhere.com/result_data_render_admin/", {
        // const response = await fetch("http://127.0.0.1:8000/result_data_render_admin/", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ surveyname_: surveyname, group_info_ : group_info })
        });
        if (response.ok) {
          const data = await response.json();
          setResponse(data.senddata.data)
          setIsloading(false)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token, surveyname,group_info]);
  console.log(responde)
  console.log(isloading)
  console.log(responde.total)
  return (<Container maxWidth="xl">
  <Typography variant="h4" sx={{ mb: 5 }}>
    {surveyname} Result
  </Typography>
  <Grid container spacing={3}>
  
      <Grid xs={12} md={12} lg={12}>
          {isloading ? <CircularProgress/> : <AppSurveys
            list={
              Object.keys(responde).map((key) => {
                console.log(responde[key])
                return(
                  {
                    title : key,
                    data : responde[key]
                  }
                )
              })}
          />}
        </Grid>
    
  </Grid>
</Container>)


}




ResultLeadershipSurvey.propTypes = {
  surveyname: PropTypes.string
}