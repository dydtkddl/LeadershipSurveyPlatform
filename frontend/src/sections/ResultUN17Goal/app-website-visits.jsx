import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppWebsiteVisits({ title, subheader,result_analysis_data, chart, ...other }) {
  const { labels, colors, series, options } = chart;
  console.log(series.map((i) => i.fill))
  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '44%',
      },
    },
    fill: {
      type: ["gradient", "gradient"],
      colors: ['#1A73E855', '#B32824']
      
    },
    labels,
    xaxis: {
      title : {text : "UN 17 GOALS"},
      categorys : ["1", "2", "3"],
      type: 'category',
      labels: {
        rotate: -45
      }

    },
    yaxis : {
      max : 5,
      min : 0
    },
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: [2,4],
      dashArray: 0, 
  },
    tooltip: {
      shared: true,
      intersect: false,
      x : {
        formatter(value) {
          return [`Goal ${value}`, "<br/>", `${result_analysis_data[Object.keys(result_analysis_data)[value-1]].title}`];
      }
        },
      y: {
        
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `interest of ${value.toFixed(0)}`;
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
  result_analysis_data : PropTypes.object
};
