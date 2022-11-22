import { Box, Grid, Typography } from "@mui/material";
import DeviceInfoProps from "./DeviceInforProps";

const DeviceInfo = (deviceInfoProps: DeviceInfoProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Useful information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Device ID
          </Typography>
          <Typography variant="body1" gutterBottom>
            {deviceInfoProps.device._id}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Device Name
          </Typography>
          <Typography variant="body1" gutterBottom>
            {deviceInfoProps.device.device_name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Device Variables
          </Typography>
          <Grid container spacing={2}>
            {deviceInfoProps.device.variables.map((variable) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={variable._id}>
                <Typography variant="body1" gutterBottom>
                  {variable.variable_name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {variable.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeviceInfo;
