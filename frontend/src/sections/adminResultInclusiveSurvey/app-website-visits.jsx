import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppWebsiteVisits({ interval, title, subheader,max, chart, ...other }) {
  const {  colors, series, options } = chart;
  console.log(interval)
  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    xaxis : {
      labels : {
        show : true,
        formatter(value){
          let m = value*interval 
          if (value*interval >=5.0)
            m = 5
        return `${((value-1) * interval).toFixed(1)}~${m.toFixed(1)}`
      }}
    },
    // labels,
    // xaxis: {
    //   type: 'datetime',
    // },
    yaxis :  {
      tickAmount  : max
    },
    tooltip: {
      shared: true,
      intersect: false,
      x : {
        show : true
      },
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} People`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

AppWebsiteVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
  max: PropTypes.number,
  interval: PropTypes.number,
};
