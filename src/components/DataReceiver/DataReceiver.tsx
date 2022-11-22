import DataCard from "../DataCard/DataCard";
import DeviceInfo from "../DeviceInfo/DeviceInfo";
import LastValueInfo from "../LastValueInfo/LastValueInfo";
import { LineChart } from "../LineChard/LineChard";

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

const DataReceiver = (dataDevicesProps: DataReceiverProps) => {
  return (
    <>
      <DataCard title={dataDevicesProps.device.device_name}>
        <LineChart
          chartLabels={dataDevicesProps.device.variables.map(
            (v) => v.variable_name
          )}
          data={dataDevicesProps.device.variables}
          timeStamps={dataDevicesProps.device.variables[0].histories.map((h) =>
            new Date(h.timestamp).toLocaleTimeString()
          )}
          isLoading={dataDevicesProps.isLoading}
        />
      </DataCard>
      {dataDevicesProps.device.variables.map((v) => {
        return (
          <DataCard title={v.variable_name}>
            <LastValueInfo
              isLoading={dataDevicesProps.isLoading}
              data={v.value}
              unity={v.unit}
            />
          </DataCard>
        );
      })}
      <DataCard title="Device Info">
        <DeviceInfo device={dataDevicesProps.device} />
      </DataCard>
    </>
  );
};

export default DataReceiver;
