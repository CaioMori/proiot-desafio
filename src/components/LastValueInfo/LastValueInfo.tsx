import { CircularProgress, Typography } from "@mui/material";

interface LastValueInfoProps {
  isLoading: boolean;
  data?: number;
  unity?: string;
}

const LastValueInfo = (props: LastValueInfoProps) => {
  if (props.isLoading) {
    return <CircularProgress />;
  } else if (props.data) {
    return (
      <>
        <Typography variant="h3" component="h3" gutterBottom>
          Last Value
        </Typography>
        <Typography variant="h2">{`${props.data}${
          props.unity || ""
        }`}</Typography>
      </>
    );
  } else {
    return <Typography variant="h4">Não há dados...</Typography>;
  }
};

export default LastValueInfo;
