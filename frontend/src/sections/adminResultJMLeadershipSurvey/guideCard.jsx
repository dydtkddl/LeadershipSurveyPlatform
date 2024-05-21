import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------
const bgColor = ["#ffffff", "#00600938"]
export default function GuideCard({isSelected, title, total, icon, color = 'primary', sx,usef, ...other }) {
  const bgindex = isSelected ? 1: 0;
  console.log(bgColor[bgindex])
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      justifyContent="center"
      sx={{
        width : "22%",
        pb: 4,
        pt : 1,
        mb : -5,
        borderRadius: 2,
        backgroundColor : bgColor[bgindex],
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

      <Stack spacing={0.5} justifyContent="center" alignItems="center">
    {usef?<Typography variant="h4" sx= {{textAlign : "center"}}>{fShortenNumber(total)}/5</Typography>:<Typography variant="h4">{total} / 5</Typography>}

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title.map((key) => (
            <Box sx ={{textAlign :"center"}}>{key}</Box>
          ))}
        </Typography>
      </Stack>
    </Card>
  );
}

GuideCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  isSelected: PropTypes.number,
  usef : PropTypes.bool
};
