import React from "react";
import { Box, Grid } from "@mui/material";
import TopStats from "./TopStats";
import ProductionOverview from "./ProductionOverview";
import EfficiencyChart from "./EfficiencyChart";
import QualitySummary from "./QualitySummary";
import ActivityLog from "./ActivityLog";

const Dashboard: React.FC = () => {
  return (
    <Box display="flex" minHeight="100vh" borderRadius={2}>

      <Box flex={1} p={3}>
        <TopStats />
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} md={4}>
            <ProductionOverview />
          </Grid>
          <Grid item xs={12} md={4}>
            <EfficiencyChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <QualitySummary />
          </Grid>
        </Grid>
        <ActivityLog />
      </Box>
    </Box>
  );
};

export default Dashboard;
