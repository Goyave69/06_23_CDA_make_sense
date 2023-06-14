/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Chip,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import DecisionLoader from "../components/DecisionLoader";

export default function DecisionList() {
  return (
    <Box>
      <DecisionLoader />
      <Card sx={{ maxWidth: 280 }}>
        ,
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
    </Box>
  );
}
