import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Button,CircularProgress } from '@mui/material';

import { result_group_labels } from 'src/components/result_group_labels';

import AppSurveys from '../_app-surveys';


// ----------------------------------------------------------------------
const requestLanguage = "en";
console.log(requestLanguage)
export default function ResultJMLeadershipSurvey({ surveyname }) {
  console.log(surveyname)
  const [responde, setResponse] = useState({})
  const [isloading, setIsloading] = useState(true)
  const token = localStorage.getItem("token")
  const group_info = result_group_labels[surveyname]
  const group_info_keys = Object.keys(group_info)
  const [currentgroup , setCurrentGroup] = useState(0)
  const [btncolor , setbtncolor] = useState([1,0,0,0])
  const BTNCOLOR = ["outlined", "contained"]
  const onclickbtn =(e)=>{
    const id = e.target.id 
    setCurrentGroup(id)
    const lis = [0,0,0,0]
    lis[id] = 1
    setbtncolor(lis)
  }
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
          body: JSON.stringify({ surveyname_: surveyname, group_info_ : group_info[group_info_keys[currentgroup]] })
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
  }, [token, surveyname,group_info,currentgroup,group_info_keys]);
  console.log(responde)
  console.log(isloading)
  console.log(responde.total)
  return (<Container maxWidth="xl">
  <Typography variant="h4" sx={{ mb: 5 }}>
    {surveyname} Result
  </Typography>
  <Grid container spacing={3}>
    <Button onClick = {onclickbtn} id = {0}  variant = {BTNCOLOR[btncolor[0]]}>Personal attributes and growth mindset</Button>
    <Button onClick = {onclickbtn}id = {1}  variant = {BTNCOLOR[btncolor[1]]}>Communication ability</Button>
    <Button onClick = {onclickbtn}id = {2}  variant = {BTNCOLOR[btncolor[2]]}>Ability to grasp, judge, and solve problems</Button>
    <Button onClick = {onclickbtn}id = {3} variant = {BTNCOLOR[btncolor[3]]}>Leaderships</Button>
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




ResultJMLeadershipSurvey.propTypes = {
  surveyname: PropTypes.string
}