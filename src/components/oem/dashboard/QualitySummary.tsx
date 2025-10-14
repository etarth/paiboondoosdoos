import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const defects = [
  { type: "Misalignment", count: 8 },
  { type: "Paint Issue", count: 5 },
  { type: "Electrical Fault", count: 2 },
];

const QualitySummary: React.FC = () => {
  return (
    <Card elevation={0} sx={{ border: 1, borderColor: "grey.300", borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Quality Summary
        </Typography>
        <List dense>
          {defects.map((d, i) => (
            <React.Fragment key={i}>
              <ListItem>
                <ListItemText
                  primary={d.type}
                  secondary={`Count: ${d.count}`}
                  secondaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
              {i < defects.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default QualitySummary;
