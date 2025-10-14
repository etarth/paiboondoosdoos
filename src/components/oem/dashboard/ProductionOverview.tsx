import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Demo data for production per line
const data = [
  { line: "1", units: 230 },
  { line: "2", units: 190 },
  { line: "3", units: 320 },
  { line: "4", units: 280 },
  { line: "5", units: 150 },
  { line: "6", units: 210 },
];

const ProductionOverview: React.FC = () => {
  return (
    <Card elevation={0} sx={{ border: 1, borderColor: "grey.300", borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Production Overview
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Units produced per assembly line (Today)
        </Typography>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
            <XAxis dataKey="line" />
            <YAxis />
            <Tooltip />
            <Legend iconType="circle" />
            <Bar dataKey="units" name="Units" fill="#1976d2" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductionOverview;
