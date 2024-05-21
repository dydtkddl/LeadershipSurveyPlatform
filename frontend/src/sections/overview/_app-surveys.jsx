import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

// import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------
const CaptionWidth = 100;
export default function AppSurveys({ title, subheader, list, ...other }) {

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((news) => (
            <SurveyItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          Learn Survey Detail
        </Button>
      </Box>
    </Card>
  );
}

AppSurveys.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

// ----------------------------------------------------------------------

function SurveyItem({ news }) {
  const { image, title, description, estimatedTime,questionsCount, isParticipated,surveyPath } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2} position = "relative"  onClick = {()=>LinkSurvey(surveyPath)}>
      {/* 이미지  */}
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0
          ,objectFit: 'contain' // 이미지를 컨테이너에 맞춰서 비율을 유지하도록 설정합니다.
        
        }}
      />
      {isParticipated ? 
      <Box
        component="img"
        position="absolute"
        alt={title}
        src="/assets/icons/flaticon/check.png"
        sx={{ width: 30, height: 30, borderRadius: 1.5, flexShrink: 0, bottom : -10, left : 10
        ,objectFit: 'contain' // 이미지를 컨테이너에 맞춰서 비율을 유지하도록 설정합니다.
      }}
      /> : ""}


      {/* 타이틀 */}
      <Box sx={{ minWidth: 240 ,flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title} 
        </Link>
      {/* 요약 */}
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

        <Stack direction="column" sx =  {{ maxWidth: CaptionWidth}} >
        {/* 질문 수 */}
          <Typography variant="caption" sx={{fontSize : 18, textAlign : "center", fontWeight : 900,   flexShrink: 0, color: 'text.secondary' }}>
            {questionsCount}
          </Typography>
          <Typography variant="caption" sx={{  textAlign : "center",flexShrink: 0, color: 'text.secondary' }}>
            Questions
          </Typography>
        </Stack>
        <Stack direction="column" sx =  {{ maxWidth: CaptionWidth, pr : 3}}  >
        {/* 예상 소요시간 */}
          <Typography variant="caption" sx={{fontSize : 18,fontWeight : 900,textAlign : "center",   flexShrink: 0, color: 'text.secondary' }}>
          {estimatedTime}min
          </Typography>
          <Typography  variant="caption" sx={{textAlign : "center",flexShrink: 0, color: 'text.secondary' }}>
            ETA
          </Typography>
        </Stack>
    </Stack>
  );
}

SurveyItem.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    surveyPath : PropTypes.string,
    isParticipated : PropTypes.bool,
    estimatedTime : PropTypes.number,
    questionsCount : PropTypes.number
  }),
};

// 0----------------------------------------------
function LinkSurvey(path){
  console.log(1)
  window.location.href = path
}