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
import AppWebsiteVisits from '../app-website-visits';
// import AppWidgetSummary from '../app-widget-summary';
import AppCurrentSubject from '../app-current-subject';
import {data as result_text_data} from "../result_data"
import AppConversionRates from '../app-conversion-rates';
// import { AppView } from 'src/sections/overview/view_';
// import { NAV } from 'src/layouts/dashboard/config-layout';


// ----------------------------------------------------------------------
const requestLanguage = "en";
console.log(requestLanguage)
export default function ResultUN17Goal({ surveyname }) {
  const [responde, setResponse] = useState({})
  const [isloading, setIsloading] = useState(true)
  const token = localStorage.getItem("token")
  const group_info = result_group_labels[surveyname]
  const username = localStorage.getItem("name")
  console.log(username)
  console.log(result_text_data)
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
  return (<Container maxWidth="xl">
  <Typography variant="h4" sx={{ mb: 5 }}>
    {surveyname} Result
  </Typography>
  <Grid container spacing={3}>
  {isloading ? <CircularProgress/> : 
     <Grid xs={12} md={12} lg={12}>
     <AppWebsiteVisits
       title="UN 17 Goals"
       subheader="We compare your level of interest in each of the UN 17 Goals topics with others."
       chart={{
         labels: group_info_keys,
         series: [
           {
             name: 'You',
             type: 'column',
             fill: "gradient",

             data: group_info_keys.map((key)=>(responde.user[key])),
           },
           {
             name: 'Others',
             type: 'area',
             fill: 'gradient',
             data: group_info_keys.map((key)=>(responde.other[key])),
           },
           
         ],
       }}
       result_analysis_data = {result_analysis_data}
     />
   </Grid>}

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
            </Grid>}

      

            {isloading ? <CircularProgress/> :       
             <Grid xs={12} md={5} lg={5}>
                                    <AppConversionRates
                    title="Bar Chart"
                    subheader="This is your competency visualization"
                    chart={{
                        series: group_info_keys.map(key => ({
                            label: key,
                            value: responde.user[key] // Assuming 'responde' is the data object and 'user' is the key for user data
                        }))
                    }}
                />
    </Grid>}
   

    
    

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




ResultUN17Goal.propTypes = {
  surveyname: PropTypes.string
}