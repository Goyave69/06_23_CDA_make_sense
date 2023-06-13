/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Chip } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";

export default function DecisionItem() {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <Chip
        variant="outlined"
        color="success"
        size="small"
        label="Décision en cours"
        sx={{ marginLeft: "5%", marginTop: "1%" }}
      />
      <Chip
        variant="outlined"
        color="error"
        size="small"
        label="Hub France"
        sx={{ marginLeft: "1%", marginTop: "1%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Décision factice
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Texte factice d'une decision factice dans ma vie factice...
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
  );
}
