"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function OrderHistory() {
  const router = useRouter();
  const oems = [
    {
      id: "9",
      name: "Paiboon Snacks Co., Ltd.",
      email: "contact@paiboonsnacks.com",
      tel: "02-123-4567",
      categories: ["Snacks", "Confectionery"],
      country: "Thailand",
      region: "Asia",
      rating: 4.2,
      website: "https://paiboonsnacks.com",
      priceRange: "$5,000 - $20,000",
      deliveryTime: "6-8 weeks",
      moq: "1000 units",
      certifications: ["GMP", "HACCP"],
      reliability: 88,
      description: "OEM snack manufacturer specializing in Thai-style treats.",
    },
    {
      id: "10",
      name: "SEA Bridge Manufacturing",
      email: "info@seabridge.co.th",
      tel: "02-678-9012",
      categories: ["Beverages", "Snacks"],
      country: "Thailand",
      region: "Asia",
      rating: 4.5,
      website: "https://seabridge.co.th",
      priceRange: "$10,000 - $30,000",
      deliveryTime: "4-6 weeks",
      moq: "500 units",
      certifications: ["ISO 22000", "Halal"],
      reliability: 92,
      description:
        "Trusted OEM partner for beverages and packaged snacks in SEA.",
    },
    {
      id: "11",
      name: "Golden Taste Food Factory",
      email: "sales@goldentaste.com",
      tel: "02-345-6789",
      categories: ["Snacks", "Dried Fruits"],
      country: "Thailand",
      region: "Asia",
      rating: 4.1,
      website: "https://goldentaste.com",
      priceRange: "$8,000 - $25,000",
      deliveryTime: "5-7 weeks",
      moq: "800 units",
      certifications: ["HACCP", "ISO 9001"],
      reliability: 85,
      description: "Manufacturer of high-quality dried fruits and snack foods.",
    },
    {
      id: "12",
      name: "Bangkok Beverage OEM",
      email: "hello@bangkokbevoem.com",
      tel: "02-234-1122",
      categories: ["Beverages", "Juices"],
      country: "Thailand",
      region: "Asia",
      rating: 4.3,
      website: "https://bangkokbevoem.com",
      priceRange: "$12,000 - $40,000",
      deliveryTime: "5-6 weeks",
      moq: "600 units",
      certifications: ["ISO 22000", "FDA"],
      reliability: 90,
      description:
        "OEM beverage producer with expertise in juices and RTD drinks.",
    },
    {
      id: "13",
      name: "Chiangmai Natural Snacks",
      email: "cm.natural@snackthai.com",
      tel: "053-445-776",
      categories: ["Organic Snacks", "Healthy Foods"],
      country: "Thailand",
      region: "Asia",
      rating: 4.0,
      website: "https://chiangmaisnacks.com",
      priceRange: "$6,000 - $18,000",
      deliveryTime: "7-9 weeks",
      moq: "1200 units",
      certifications: ["Organic", "GMP"],
      reliability: 82,
      description: "Chiangmai-based OEM producing organic and natural snacks.",
    },
    {
      id: "14",
      name: "FreshDay Juice OEM",
      email: "orders@freshdayjuice.co.th",
      tel: "02-991-4433",
      categories: ["Juices", "Functional Drinks"],
      country: "Thailand",
      region: "Asia",
      rating: 4.4,
      website: "https://freshdayjuice.co.th",
      priceRange: "$9,000 - $28,000",
      deliveryTime: "3-5 weeks",
      moq: "700 units",
      certifications: ["ISO 22000", "Halal"],
      reliability: 91,
      description:
        "OEM juice and beverage producer with a focus on fresh and functional drinks.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "white",
        minHeight: "100vh",
        width: "100%",
        pt: 2,
        pb: 2,
      }}
    >
      <Stack direction="column" spacing={1}>
        {oems.map((oem, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            sx={{
              border: "1px solid",
              borderRadius: 4,
              mx: 2,
              py: 1,
              px: 1,
              transition: "0.3s",
              "&:hover": {
                bgcolor: "grey.200",
                scale: 1.02,
              },
            }}
            onClick={() => router.push(`/order-history/${index}`)}
          >
            <Avatar
              alt={oem.name}
              src="/doosdoos_icon.svg"
              sx={{ width: 70, height: 70, m: 2 }}
            />
            <Box sx={{ pl: 3, width: "25vw" }}>
              <Typography sx={{ mb: 0.3, fontSize: 18 }}>
                <span className="font-bold">User Name: </span>
                {oem.name}
              </Typography>
              <Typography sx={{ mb: 0.3 }}>
                <span className="font-bold">Email: </span>
                {oem.email}
              </Typography>
              <Typography>
                <span className="font-bold">Tel:</span> {oem.tel}
              </Typography>
            </Box>
            <Typography sx={{ ml: 63 }}>
              <span className="font-bold">Delivery Time:</span>{" "}
              <span> {oem.deliveryTime}</span>
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
