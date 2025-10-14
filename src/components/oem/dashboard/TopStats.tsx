import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const stats = [
  { label: "Daily Output", value: "1,245 Units" },
  { label: "Machine Uptime", value: "96.4%" },
  { label: "Defect Rate", value: "1.8%" },
  { label: "Active Lines", value: "12 / 15" },
];

const TopStats: React.FC = () => {
  return (
    <Grid container spacing={2} mb={3}>
      {stats.map((stat, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Card elevation={0} sx={{ border: 1, borderColor: "grey.300", borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {stat.label}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopStats;
