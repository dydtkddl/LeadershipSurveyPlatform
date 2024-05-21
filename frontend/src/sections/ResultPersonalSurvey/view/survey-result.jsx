import PropTypes from 'prop-types';
// import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';
import { result_group_labels } from 'src/components/result_group_labels';

// import AppNewsUpdate from '../app-news-update';
import AppWidgetSummary from '../app-widget-summary';
import {data as result_text_data} from "../result_data"
// import { AppView } from 'src/sections/overview/view_';
// import { NAV } from 'src/layouts/dashboard/config-layout';


// ----------------------------------------------------------------------
const requestLanguage = "en";
console.log(requestLanguage)
export default function ResultPersonalSurvey({ surveyname }) {
  const [responde, setResponse] = useState({})
  const [isloading, setIsloading] = useState(true)
  const token = localStorage.getItem("token")
  const group_info = result_group_labels[surveyname]
  const username = localStorage.getItem("name")
  console.log(username)
  const result_analysis_data = result_text_data[requestLanguage].data
  console.log(result_analysis_data)
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://leadershipsurvey.pythonanywhere.com/result_data_render/", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ surveyname_: surveyname, group_info_ : group_info })
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setResponse(data.senddata)
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
  console.log(group_info_keys)
  const grid_val = {"xs" : [6,6,6,6,6,6,12],"sm" : [4,4,4,4,4,4,12], "md" : [3,3,3,3,3,3,6]}
  const img_name = ["nation", "gender", "age", "occupation", "graduation_cap", "school", "leader"]
  return (<Container maxWidth="xl">
  <Typography variant="h4" sx={{ mb: 5 }}>
    {surveyname} Result
  </Typography>
  {isloading ? <CircularProgress/> : 
  <Grid container spacing={3}>
    {group_info_keys.map( (key ,index) =>(


    <Grid item xs={grid_val.xs[index]} md={grid_val.md[index]} sm={grid_val.sm[index]}>
      <AppWidgetSummary
        title={key}
        total={responde.user[key]}
        color="success"
        icon={<img alt="icon" src={`/assets/icons/ic_${img_name[index]}.png`}/>}
      />
    </Grid> 

    )  )}

   
{/* 
    
    

    {isloading ? <CircularProgress/> :       

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

    

    
  </Grid>}
</Container>)


}




ResultPersonalSurvey.propTypes = {
  surveyname: PropTypes.string
}