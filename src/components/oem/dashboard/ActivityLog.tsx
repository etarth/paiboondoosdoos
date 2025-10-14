import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Stack,
  Chip,
} from "@mui/material";

interface Activity {
  message: string;
  source: string;
  timestamp: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | undefined;
}

// Example data with timestamps
const logs: Activity[] = [
  {
    message: "Line 5 maintenance completed.",
    source: "Maintenance",
    color: "success",
    timestamp: "2025-10-14 08:45",
  },
  {
    message: "Quality alert: Minor paint defect detected.",
    source: "Quality Control",
    color: "error",
    timestamp: "2025-10-14 09:15",
  },
  {
    message: "Production target for Shift A achieved.",
    source: "Production",
    color: "primary",
    timestamp: "2025-10-14 12:30",
  },
  {
    message: "Inventory restocked for Part #K23.",
    source: "Inventory",
    color: "secondary",
    timestamp: "2025-10-14 14:00",
  },
  {
    message: "New automation software deployed on Line 3.",
    source: "System",
    color: "warning",
    timestamp: "2025-10-14 16:10",
  },
];

const ActivityLog: React.FC = () => {
  return (
    <Card elevation={0} sx={{ border: 1, borderColor: "grey.300", borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Recent Activity
        </Typography>

        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {logs.map((log, i) => (
            <ListItem
              key={i}
              sx={{
                bgcolor: "grey.50",
                borderRadius: 3,
                px: 2,
                py: 1.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack spacing={0.3}>
                <Typography variant="body2">{log.message}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {log.timestamp}
                </Typography>
              </Stack>

              <Chip
                label={log.source}
                size="small"
                color={log.color}
                sx={{ fontWeight: 500 }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityLog;
