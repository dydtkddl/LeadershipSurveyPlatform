import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx,usef, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 5,
        py: 1,
        borderRadius: 2,
        justifyContent : "center",
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}
      <Stack direction="row" spacing={2} sx = {{textAlign:  "center", justifyContent : "center"}} >

        <Typography variant="h4" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
        {usef?<Typography variant="h4">{fShortenNumber(total)}</Typography>:<Typography variant="h4">{total}</Typography>}
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  usef : PropTypes.bool
};
