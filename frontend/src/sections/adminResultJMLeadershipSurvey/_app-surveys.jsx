import {useState} from "react"
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import Scrollbar from 'src/components/scrollbar';
import AppWebsiteVisits from './app-website-visits';

function countElementsByInterval(array, interval) {
  const counts = {};
  console.log(counts)
  // 사용자가 설정한 간격에 따라서 모든 가능한 키 미리 생성
  for (let i = 0; i < Math.ceil(5/ interval); i+=1) {
    let key = `${i * interval}~${(i + 1) * interval}`;
    if ((i + 1) * interval >= 5.0){
      key = `${i * interval}~5`;
    }
      counts[key] = 0; // 초기화
  }
  console.log(counts)
  // 배열의 요소를 확인하고 각 요소를 적절한 구간에 할당
  array.forEach((element) => {
    const quetient = Math.floor((element-0.00001)/interval)
    console.log(quetient)
    let key = `${interval * quetient}~${(interval) * (quetient  +1)}`
    // var key = Math.floor(element / interval) * interval + '~' + (Math.floor(element / interval) + 1) * interval;
    if ( (interval) * (quetient+1) >= 5.0)
      key =  `${interval * quetient}~5`
      
    console.log(key)
    counts[key]+=1;
  });
  delete counts["0~0"]
  return counts;
}

// ----------------------------------------------------------------------
const CaptionWidth = 100;
export default function AppSurveys({  list, ...other }) {
  const marks = [
    {
      value: 0.1,
      label: '0.1',
    },
    {
      value: 0.2,
      label: '0.2',
    },
    {
      value: 0.3,
      label: '0.3',
    },
    {
      value: 0.4,
      label: '0.4',
    },
    {
      value: 0.5,
      label: '0.5',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 1.5,
      label: '1.5',
    },
    {
      value: 2.5,
      label: '2.5',
    },
  ];
  const [intervals , setIntervals ] = useState(Array(list.length).fill(1))
  const handleChange =(e,number)=> {
    console.log(number)
    console.log(e.target.name)
    const newlist = [...intervals]
    newlist[e.target.name] = number
    setIntervals(newlist)
  }
  console.log(list)
  return (
    <Card {...other}>
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((datas, index) => { 
            console.log(list[datas]) 
            console.log(intervals[index]) 
            const hist = countElementsByInterval(datas.data, intervals[index]);
            console.log(hist)
            return(<>
              <Slider
                    name = {index}
                    aria-label="Restricted values"
                    defaultValue={1}
                    valueLabelDisplay="auto"
                    step={null}
                    marks ={marks}
                    max = {2.5}
                    onChange={handleChange}
                  />
                 <SurveyItem interval={intervals[index]} title = {datas.title} hist = {hist} /></>
          )})}
        </Stack>
      </Scrollbar>

      <Divider sx={{ borderStyle: 'dashed' }} />
    </Card>
  );
}

AppSurveys.propTypes = {
  list: PropTypes.any.isRequired,
};

// ----------------------------------------------------------------------

function SurveyItem({ title, hist , interval}) {
  console.log(hist, title)
  return (

    <Stack direction = "column">



    <AppWebsiteVisits
            title={title}
            // subheader="Daily Hits"
            chart={{
              labels: Object.keys(hist),
              series: [
                {
                  name: "Peoples",
                  type: 'column',
                  fill: 'solid',
                  data:Object.values(hist),
                },
              ],
            }}
            max = {Math.max.apply(null,Object.values(hist))}
            interval = {interval}
          />
    </Stack>
  );
}

SurveyItem.propTypes = {
  hist: PropTypes.object,
  title: PropTypes.string,
  interval: PropTypes.number,
};

// 0----------------------------------------------
function LinkSurvey(path){
  console.log(1)
  window.location.href = path
}