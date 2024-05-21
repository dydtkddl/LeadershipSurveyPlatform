import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';



// ----------------------------------------------------------------------
const IMAGE_SIZE = 100
export default function AppNewsUpdate({result_analysis_data,furedata, title, subheader, imagelist,group_info, ...other }) {
  console.log(furedata)
  const userdata = furedata.user
  console.log(userdata)
  console.log(group_info)

  return (
    <Card {...other}>
      <CardHeader title={title} subheader="your survey result here" />

        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>

          {Object.keys(group_info).map((key,i) => {
            const userval = checkNumber(userdata[key])
            console.log(userval)
            const explain_text = result_analysis_data[key].level[userval]
            console.log(explain_text)
            return (
              <>
              <Rating readOnly position = "absolute" sx ={{top : "45px", left : "115px"}}
                  name="simple-controlled"
                  value={userdata[key]}
                />
            <NewsItem group_name = {key} explain_text_name = {explain_text.name} image = {imagelist[i]} />
            <Box sx= {{pl : `${IMAGE_SIZE + 18}px`}}>

            <Typography sx = {{pr : 4}} >{explain_text.detail}</Typography>
            </Box>
            </>
            )
          })}
        
        </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        made by Pillar Foundation
      </Box>
    </Card>
  );
}

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  imagelist: PropTypes.array.isRequired,
  furedata : PropTypes.any.isRequired,
  group_info : PropTypes.any.isRequired,
  result_analysis_data : PropTypes.any.isRequired
};

// ----------------------------------------------------------------------

function NewsItem({ explain_text_name,group_name, image}) {
  console.log(image)
  return (
    <Stack direction="row" alignItems="center" spacing={2} >
      <Box
        component="img"
        alt="image"
        src={image.image}
        sx={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 240,width : "100%", flexGrow: 1 }}>
        <Link color="inherit" variant="h3" underline="hover" noWrap>
          {group_name}
        </Link>

        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap >
          {explain_text_name}
        </Typography>
      </Box>
 
    </Stack>
  );
}

NewsItem.propTypes = {
  
  explain_text_name : PropTypes.string,
  group_name : PropTypes.string,
  image : PropTypes.object.isRequired,
};

// ----------------------------------
const checkNumber = (number) =>{
  if (number >3.7){
    return 2
  }
  if (number >2.3){
    return 1
  }
  return 0
}