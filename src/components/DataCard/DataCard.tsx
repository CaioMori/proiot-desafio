import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import { CardContentBase } from "./DataCardBase";
import DataCardProps from "./DataCardProps";

const DataCard = (props: DataCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader title={props.title} />
        <Divider />

        <CardContent sx={CardContentBase}>{props.children}</CardContent>
      </Card>
    </Grid>
  );
};

export default DataCard;
