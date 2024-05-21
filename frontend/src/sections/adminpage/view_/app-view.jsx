import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AppSurveys from '../_app-surveys';
// ----------------------------------------------------------------------
const requestLanguage = "en"
const surveyCount = 5;
export default function AdminPage() {
  const [responde, setResponse] = useState({}) 
  const [isloading, setIsloading] = useState(true) 
  const token = localStorage.getItem("token")
  const adminLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
      localStorage.removeItem('admin');
      window.location.reload()
  }
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_to_adminpage/", {
        // const response = await fetch("http://127.0.0.1:8000/send_to_adminpage/", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ language : requestLanguage, timezone :  Intl.DateTimeFormat().resolvedOptions().timeZone})
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
  const isCompletedList = responde.data ?   Object.values(responde.data).filter(item => item.isCompleted === 1) : 
  [];
  console.log(isCompletedList)
 
  return (
    <Container maxWidth="xl">
      
      <Typography variant="h4" sx={{ mb: 5 }}>
      Admin Page 👋 <Button variant = "contained" onClick ={adminLogout}>admin logout</Button>
      </Typography>

    {/* 설문조사 개수, 한거 개수, 못한거 개수 나타내는 거 */}
      <Grid container spacing={3}>
        {/* <Grid xs={12} sm={6} md={4}>
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
        </Grid> */}

        
        < Outlet />
        

        <Grid xs={12} md={12} lg={12}>
          {isloading ? <CircularProgress/> : <AppSurveys
            list={
              responde.data.sort.slice(1,surveyCount).map((element) => {
                console.log(element)
                const a = { title : responde.data[element].title,
                  date: responde.data[element].date,
                  total: responde.data[element].meta.total,
                  image : responde.data[element].image
                }
                return (
                  a
                )
              })}
              
            sort = {responde.data.sort}
          />}
        </Grid>
              
        {/* <Grid xs={12} md={6} lg={4}>
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
        </Grid> */}

      </Grid>
    </Container>
  );
}
