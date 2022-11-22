interface DataReceiverProps {
  isLoading: boolean;
  device: {
    _id: string;
    device_name: string;
    variables: {
      _id: string;
      variable_name: string;
      value: number;
      unit: string;
      histories: {
        timestamp: number;
        value: number;
      }[];
    }[];
  };
}

export default DataReceiverProps;
