// import PropTypes from 'prop-types';

// import { AppView } from 'src/sections/overview/view_';

// import { NAV } from 'src/layouts/dashboard/config-layout';

import { useState, useEffect } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// import { posts } from 'src/_mock/blog';

import Iconify from 'src/components/iconify';

import PostCard from '../post-card';
// import PostSort from '../post-sort';
// import PostSearch from '../post-search';

// ----------------------------------------------------------------------

export default function SurveyResultList() {

  const [isloading, setIsloading] = useState(true)

    const [userData, setUserData] = useState({})
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_completed_survey_list/", {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          });
          if (response.ok) {
            const data = await response.json();
            setUserData(data);
            console.log(data)
          setIsloading(false)

          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

  if (isloading) {
    return (
      <Grid xs={12} md={6} lg={4}>
        <CircularProgress />
      </Grid>
    )
  }
  console.log(userData.data.length)
  return ( <Container>
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4">Survey List</Typography>
    
      <Button variant="contained" color="inherit" href = "/" startIcon={<Iconify icon="eva:plus-fill" />}>
        Go Another Survey
      </Button>
    </Stack>

    {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
      <PostSearch posts={posts} />
      <PostSort
        options={[
          { value: 'latest', label: 'Latest' },
          { value: 'popular', label: 'Popular' },
          { value: 'oldest', label: 'Oldest' },
        ]}
      />
    </Stack> */}

    
      {isloading ? <CircularProgress/> : <>{userData.data.length !== 0 ? <
            Grid container spacing={3}> {userData.data.map((data, index) => (
            <PostCard 
            key={index} data={data} index={index} />
          ))}
        </Grid> :  
        <Grid container spacing={3} justifyContent="center"> 
        <Grid item>
          <Typography variant = "h3"gutterBottom sx = {{pb : 5, pt : 10}}>
            No Results 
          </Typography>
          <Typography variant = "subtitle1" gutterBottom>
          No survey results available.
          </Typography>
          <Link href = "/">
          <Typography variant = "body1" >
          Please conduct the survey first!
          </Typography>
          </Link>
          </Grid>
        </Grid>} </>}

      </Container>)


}




SurveyResultList.propTypes = {
}