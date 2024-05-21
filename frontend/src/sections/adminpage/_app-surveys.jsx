import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Scrollbar from 'src/components/scrollbar';

import AppWebsiteVisits from './app-website-visits';
import AppWidgetSummary from './app-widget-summary';


// ----------------------------------------------------------------------
const CaptionWidth = 100;
export default function AppSurveys({  image,subheader, list,sort, ...other }) {
  console.log(list)
  return (
    <Card {...other}>
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((datas, index) => { 
            console.log(datas) 
            return(
                 <SurveyItem key={index} news = {datas} image = {image}/>
          )})}
        </Stack>
      </Scrollbar>

      <Divider sx={{ borderStyle: 'dashed' }} />
    </Card>
  );
}

AppSurveys.propTypes = {
  subheader: PropTypes.string,
  list: PropTypes.any.isRequired,
  sort : PropTypes.array.isRequired,
  image : PropTypes.string
};

// ----------------------------------------------------------------------

function SurveyItem({ news }) {
  const { image, title,date, total } = news;
  console.log(Object.keys(date))
  console.log(Object.values(date))
  return (

    <Stack direction = "column">

    {/* // <Stack direction="row" alignItems="center" spacing={2} position = "relative"  onClick = {()=>LinkSurvey(surveyPath)}> */}
    <Stack direction="row" alignItems="center" spacing={2} position = "relative"  justifyContent="left">
      {/* 이미지  */}
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0
          ,objectFit: 'contain' // 이미지를 컨테이너에 맞춰서 비율을 유지하도록 설정합니다.
        
        }}
      />
            {/* 타이틀 */}
      <Box sx={{ minWidth: 240  }}>

        <Link color="inherit" href = {`/adminpage/${title}Result`}variant="subtitle2" underline="hover" noWrap>
          {title} 
        </Link>
      </Box>

        <Stack direction="column" sx =  {{ maxWidth: CaptionWidth}} >
        {/* 질문 수 */}
          <AppWidgetSummary
              title="Total"
              total={total}
              color="success"
              // icon={<img alt="icon" src="/assets/images/total2.png" />}
              usef = {1}
            />
          
        </Stack>
        
    </Stack>
        

    <AppWebsiteVisits
            title="Daily Hits"
            subheader="Daily Hits"
            chart={{
              labels: Object.keys(date),
              series: [
                {
                  name: 'Daily Hits',
                  type: 'column',
                  fill: 'solid',
                  data:Object.values(date),
                },
               
              ],
            }}
            max = {Math.max.apply(null,Object.values(date))}
          />
    </Stack>
  );
}

SurveyItem.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    total : PropTypes.number,
    date : PropTypes.object
  }),
  image : PropTypes.string
};

// 0----------------------------------------------
function LinkSurvey(path){
  console.log(1)
  window.location.href = path
}