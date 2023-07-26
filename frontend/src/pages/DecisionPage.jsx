/* eslint-disable import/no-extraneous-dependencies */
import { React, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Chip, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import loadData from "../services/loadData";

export default function DecisionPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData("decisions", setData);
  }, []);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "2%",
        marginLeft: "1%",
      }}
      container
      spacing={4}
    >
      <Typography variant="h5">All decisions</Typography>
      <Divider style={{ width: "100%", paddingBottom: "1%" }} />
      {data.map((decision) => (
        <Grid item key={decision.id}>
          <Card
            sx={{
              minWidth: 250,
            }}
          >
            <Chip
              variant="outlined"
              color="success"
              size="small"
              label="Décision en cours"
              sx={{ marginLeft: "5%", marginTop: "5%" }}
            />
            <Chip
              variant="outlined"
              color="error"
              size="small"
              label="Hub France"
              sx={{ marginLeft: "1%", marginTop: "5%" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {decision.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${decision.decision_content.substring(0, 30)}...`}
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepPurple[500], marginLeft: "1%" }}>
                  JD
                </Avatar>
              </Stack>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ marginLeft: "5%" }}
              >
                par Jane Doe
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
