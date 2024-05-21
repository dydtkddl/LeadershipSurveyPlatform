import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';

import AppSurveys from '../_app-surveys';
import AppWidgetSummary from '../app-widget-summary';
import AppParticipatedTimeline from '../_app-participated-timeline';


// ----------------------------------------------------------------------
const requestLanguage = "en"
export default function AppView() {
  const [responde, setResponse] = useState({}) 
  const [isloading, setIsloading] = useState(true) 
  const token = localStorage.getItem("token")
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_to_home/", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ surveycount: 5, language : requestLanguage })
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setResponse(data)
          setIsloading(false)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);


  const username = localStorage.getItem("name")
  const isCompletedList = responde.data ?   Object.values(responde.data).filter(item => item.isCompleted === 1) : 
  [];
  console.log(isCompletedList)
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" >
        Hi {username}  !
      </Typography>
      <Typography variant="h4" sx={{ mb: 5 }}>
      Welcome To Survey Platform 👋
      </Typography>

    {/* 설문조사 개수, 한거 개수, 못한거 개수 나타내는 거 */}
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          {isloading ? <CircularProgress/>:<AppWidgetSummary
            title="Total Surveys"
            total={responde.meta.total_survey_count}
            color="success"
            icon={<img alt="icon" src="/assets/images/total2.png" />}
            usef = {1}
          />  }
          
        </Grid>

        <Grid xs={12} sm={6} md={3}>
        {isloading ?<CircularProgress/>: <AppWidgetSummary
            title="Done"
            total={responde.meta.done_survey_count}
            color="info"
            usef = {0}
            icon={<img alt="icon" src="/assets/images/Done1.png" />}
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />}
        </Grid>

        <Grid xs={12} sm={6} md={3}>
           {isloading ? <CircularProgress/>:<AppWidgetSummary
            title="not Done"
            total={responde.meta.total_survey_count-responde.meta.done_survey_count}
            usef = {0}
            color="warning"
            icon={<img alt="icon" src="/assets/images/NotDone1.png" />}
          />}
        </Grid>

        
        < Outlet />
        

        <Grid xs={12} md={6} lg={8}>
          {isloading ? <CircularProgress/> : <AppSurveys
            title="Take Survey"
            list={Object.keys(responde.data).map((key, index) => {
              console.log(key)
              return(
              {
              id: responde.data[key].survey_number,
              title: responde.data[key].survey_title[requestLanguage],
              description: responde.data[key].survey_index_description[requestLanguage],
              image: responde.data[key].survey_img,
              isParticipated : responde.data[key].isCompleted,
              estimatedTime : responde.data[key].survey_ETAmin,
              questionsCount : responde.data[key].questionsCount,
              surveyPath :`/${responde.data[key].survey_name}`
            })})}
          />}
        </Grid>
              
        <Grid xs={12} md={6} lg={4}>
          <AppParticipatedTimeline
            title="Participated Timeline"
            list={isCompletedList.map((target, index) => ({
              id: target.isCompleted,
              title: target.survey_title[requestLanguage],
              type: `order${index + 1}`,
              time: target.completedAt,
            }))}
            subheader="Timeline of your Participated Surveys "
            
          />
        </Grid>

      </Grid>
    </Container>
  );
}
