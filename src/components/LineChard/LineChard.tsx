import { CircularProgress, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import LineChartProps from "./LineChartProps";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getColorBasedOnString = (string: string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
};

export function LineChart(props: LineChartProps) {
  const data = {
    labels: props.timeStamps,
    datasets: props.data.map((item) => {
      return {
        label: item.variable_name,
        data: item.histories.map((item: any) => item.value),
        fill: false,
        backgroundColor: getColorBasedOnString(item.variable_name),
        borderColor: getColorBasedOnString(item.variable_name),
      };
    }),
  };

  if (props.isLoading) {
    return <CircularProgress />;
  } else if (props.data) {
    return <Line data={data} />;
  } else {
    return <Typography variant="h4">Não há dados...</Typography>;
  }
}
