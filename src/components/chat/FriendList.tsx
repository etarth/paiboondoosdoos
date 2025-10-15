"use client";
import { Box, Stack, Avatar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function FriendList() {
  const router = useRouter();

  const oems = [
    {
      name: "Paiboon Snacks Co., Ltd.",
      email: "contact@paiboonsnacks.com",
      tel: "02-123-4567",
    },
    {
      name: "SEA Bridge Manufacturing",
      email: "info@seabridge.co.th",
      tel: "02-678-9012",
    },
    {
      name: "Golden Taste Food Factory",
      email: "sales@goldentaste.com",
      tel: "02-345-6789",
    },
    {
      name: "Bangkok Beverage OEM",
      email: "hello@bangkokbevoem.com",
      tel: "02-234-1122",
    },
    {
      name: "Chiangmai Natural Snacks",
      email: "cm.natural@snackthai.com",
      tel: "053-445-776",
    },
    {
      name: "FreshDay Juice OEM",
      email: "orders@freshdayjuice.co.th",
      tel: "02-991-4433",
    },
    {
      name: "ThaiCrisp FoodTech",
      email: "support@thaicrisp.com",
      tel: "02-882-3344",
    },
    {
      name: "HealthyBite Production",
      email: "contact@healthybite.com",
      tel: "02-775-8899",
    },
    {
      name: "OceanTaste Seaweed Co.",
      email: "info@oceantaste.co.th",
      tel: "02-111-2244",
    },
    {
      name: "Royal Snack Hub",
      email: "service@royalsnackhub.com",
      tel: "02-556-7788",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#1a1a1a",
        minHeight: "100vh",
        width: "100%",
        pt: 2,
        pb: 2,
      }}
    >
      <Stack direction="column" spacing={1} sx={{ mx: 2 }}>
        {oems.map((oem, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            onClick={() => router.push(`/chat/${index}`)}
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: 4,
              mx: 2,
              py: 1,
              px: 1,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
                transform: "scale(1.02)",
              },
            }}
          >
            <Avatar
              alt={oem.name}
              src="/doosdoos_icon.svg"
              sx={{ width: 70, height: 70, m: 2 }}
            />
            <Box sx={{ pl: 3, color: "white" }}>
              <Typography sx={{ mb: 0.3 }}>User Name: {oem.name}</Typography>
              <Typography sx={{ mb: 0.3 }}>Email: {oem.email}</Typography>
              <Typography>Tel: {oem.tel}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
