import { Button, Chip, Stack, Typography } from "@mui/material";

interface ActivityMonitorProps {
  active: boolean;
  toggleInterval: () => void;
}

const ActivityMonitor = (activityMonitorProps: ActivityMonitorProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
      <Chip color={activityMonitorProps.active ? "success" : "error"} />
      <Typography>{`Comunicação ${
        activityMonitorProps.active ? "Ativa" : "Inativa"
      }`}</Typography>
      <Button variant="contained" onClick={activityMonitorProps.toggleInterval}>
        {activityMonitorProps.active ? "DESATIVAR SOCKET" : "ATIVAR SOCKET"}
      </Button>
    </Stack>
  );
};

export default ActivityMonitor;
