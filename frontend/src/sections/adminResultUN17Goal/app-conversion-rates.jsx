import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppConversionRates({ title, subheader, chart, ...other }) {
  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);
  const chartLabels = series.map((i) => i.label);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
      x : {
        show : false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
        borderRadius: 2,
      },
    },
    xaxis: {
      type : "category",
      categories : chartLabels,
      labels : {
        show : true
      },
      title: {text : "Score"}
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: ["#a8a8a8"],
          fontSize: "14px",
          fontFamily: 'Arial'
        }
      }
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }}>
        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          width="100%"
          height={550}
        />
      </Box>
    </Card>
  );
}

AppConversionRates.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
