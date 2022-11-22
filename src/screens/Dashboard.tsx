import { Box, Grid, Stack } from "@mui/material";
import Header from "../components/Header/Header";
import { BoxContainer, StackContainer } from "./DashboardBase";
import useDataInfo from "../hooks/useDataInfo";
import { useEffect, useState } from "react";
import DataReceiver from "../components/DataReceiver/DataReceiver";
import device from "../mocks/device";
import getRandomValue from "../utils/getRandomValue";
import ActivityMonitor from "../components/ActivityMonitor/ActivityMonitor";

function Dashboard() {
  const dataInfo = useDataInfo();
  const [mainDevice, setMainDevice] = useState(device);

  useEffect(() => {
    if (dataInfo.timestamp) {
      device.variables.forEach((variable) => {
        const randomValue = getRandomValue(0, 100);
        variable.value = randomValue;
        variable.histories.push({
          timestamp: dataInfo.timestamp!,
          value: randomValue,
        });
      });
      setMainDevice(JSON.parse(JSON.stringify(device)));
    }
  }, [dataInfo.timestamp]);

  return (
    <Box sx={BoxContainer}>
      <Header />
      <Stack direction="column" sx={StackContainer}>
        <ActivityMonitor
          active={dataInfo.active}
          toggleInterval={dataInfo.toggleInterval}
        />
        <Grid container maxWidth="100vw" spacing={2}>
          <DataReceiver device={mainDevice} isLoading={dataInfo.loading} />
        </Grid>
      </Stack>
    </Box>
  );
}

export default Dashboard;
