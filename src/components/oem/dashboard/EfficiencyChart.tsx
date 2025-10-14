import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hour: "08:00", efficiency: 89 },
  { hour: "10:00", efficiency: 92 },
  { hour: "12:00", efficiency: 95 },
  { hour: "14:00", efficiency: 97 },
  { hour: "16:00", efficiency: 93 },
  { hour: "18:00", efficiency: 91 },
];

const EfficiencyChart: React.FC = () => {
  return (
    <Card elevation={0} sx={{ border: 1, borderColor: "grey.300", borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Line Efficiency (%)
        </Typography>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="efficiency" stroke="#1976d2" strokeWidth={2} />
            <XAxis dataKey="hour" />
            <YAxis domain={[80, 100]} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EfficiencyChart;
