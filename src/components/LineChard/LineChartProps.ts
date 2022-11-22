interface LineChartProps {
  isLoading: boolean;
  chartLabels: string[];
  timeStamps?: string[];
  data: dataItems[];
}

interface dataItems {
  _id: string;
  variable_name: string;
  value: number;
  unit: string;
  histories: {
    timestamp: number;
    value: number;
  }[];
}

export default LineChartProps;
