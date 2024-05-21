import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';

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
  const username = localStorage.getItem("name")
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
  const group_info_keys = Object.keys(group_info)
  return (<Container maxWidth="xl">
  <Typography variant="h4" sx={{ mb: 5 }}>
    {surveyname} Result
  </Typography>
  <Grid container spacing={3}>
  {/* {isloading ? <CircularProgress/> : 
    <Grid xs={5} sm={7} md={7}>
      <AppWidgetSummary
        title="Total Score"
        total={responde.total.toFixed(1)}
        color="success"
        icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
      />
    </Grid> } */}
{/* 
    {isloading ? <CircularProgress/> :   <Grid xs={12} md={7} lg={7}>
              <AppCurrentSubject
                title="Radar Chart"
                subheader="This is your competency visualization"

                chart={{
                  categories: group_info_keys,
                  series: [
                    { name: "user", data:Object.values(responde.user) },
                    { name: 'Other', data: Object.values(responde.other) },
                  ],
                }}
              />
            </Grid>} */}

      
      <Grid item xs={12} md={12} lg={12}>
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
              
   

    
    

    {/* {isloading ? <CircularProgress/> :       

    <Grid xs={12} >
      <AppNewsUpdate
        title="Result Explain"
        furedata = {responde}
        group_info = {group_info}
        result_analysis_data = {result_analysis_data}
        imagelist={[...Array(8)].map((_, index) => ({
          image: `/assets/images/covers/cover_${index + 1}.jpg`,
          // postedAt: faker.date.recent(),
        }))}
      />
    </Grid>} */}

    

    
  </Grid>
</Container>)


}




ResultLeadershipSurvey.propTypes = {
  surveyname: PropTypes.string
}