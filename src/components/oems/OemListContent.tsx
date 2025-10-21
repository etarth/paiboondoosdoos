"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Grid,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
export default function OemListContent() {
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

    {
      name: "SweetLeaf Dessert Factory",
      email: "info@sweetleaf.co.th",
      tel: "02-443-1188",
    },
    {
      name: "Bangna Protein Foods",
      email: "sales@bangnaprotein.com",
      tel: "02-991-7755",
    },
    {
      name: "Thai Herbal Extracts",
      email: "contact@thaiherbalextracts.com",
      tel: "02-664-9021",
    },
    {
      name: "EverGreen Tea OEM",
      email: "support@evergreentea.com",
      tel: "02-445-9977",
    },
    {
      name: "AroiPlus Beverage Works",
      email: "info@aroiplusbev.com",
      tel: "02-782-3321",
    },
    {
      name: "ChocoCharm Confectionery",
      email: "hello@chococharm.co.th",
      tel: "02-661-4432",
    },
    {
      name: "Riceberry Snack Co.",
      email: "sales@riceberrysnacks.com",
      tel: "02-671-8890",
    },
    {
      name: "SiamSoy Protein Foods",
      email: "contact@siamsoyfoods.co.th",
      tel: "02-234-4560",
    },
    {
      name: "Naturely Bites OEM",
      email: "info@naturelybites.com",
      tel: "02-451-7788",
    },
    {
      name: "Healthy Sip Drinks",
      email: "support@healthysip.co.th",
      tel: "02-990-3344",
    },

    {
      name: "GreenLeaf Organic OEM",
      email: "contact@greenleafoem.com",
      tel: "02-789-6543",
    },
    {
      name: "Bangkok Cereal Factory",
      email: "info@bkkcereal.co.th",
      tel: "02-778-9021",
    },
    {
      name: "Sunrise Coconut Co.",
      email: "sales@sunrisecoconut.com",
      tel: "02-774-2288",
    },
    {
      name: "NorthTaste Food Co.",
      email: "info@northtaste.co.th",
      tel: "053-882-990",
    },
    {
      name: "Krabi Beverage Works",
      email: "contact@krabibev.com",
      tel: "075-882-112",
    },
    {
      name: "GoldenPalm Snack Factory",
      email: "info@goldenpalm.co.th",
      tel: "02-881-7744",
    },
    {
      name: "FruitTime Processing Co.",
      email: "sales@fruittime.co.th",
      tel: "02-443-5599",
    },
    {
      name: "ThaiDelight Beverage",
      email: "info@thaidelightbev.com",
      tel: "02-229-7766",
    },
    {
      name: "PureDrop Water Co.",
      email: "hello@puredropwater.com",
      tel: "02-991-2211",
    },
    {
      name: "AsiaProtein Foods Ltd.",
      email: "contact@asiaprotein.com",
      tel: "02-888-7744",
    },

    {
      name: "Chiangrai Herbal Works",
      email: "sales@chiangraiherbal.co.th",
      tel: "053-772-334",
    },
    {
      name: "SnackHub Thailand",
      email: "info@snackhub.co.th",
      tel: "02-661-1123",
    },
    { name: "Ocha Tea OEM", email: "hello@ochatea.com", tel: "02-887-7766" },
    {
      name: "NutraFit Nutrition Factory",
      email: "support@nutrafit.co.th",
      tel: "02-559-3344",
    },
    {
      name: "SweetBite OEM",
      email: "orders@sweetbite.co.th",
      tel: "02-882-7788",
    },
    {
      name: "FreshField Juice Co.",
      email: "info@freshfieldjuice.com",
      tel: "02-667-1122",
    },
    {
      name: "Siam Gourmet Foods",
      email: "contact@siamgourmet.com",
      tel: "02-441-9988",
    },
    {
      name: "GoldenCup Coffee OEM",
      email: "sales@goldencupcoffee.com",
      tel: "02-888-7766",
    },
    {
      name: "VitaPlus Beverage",
      email: "info@vitaplusbev.co.th",
      tel: "02-882-1100",
    },
    {
      name: "HappySnack Foods",
      email: "hello@happysnack.co.th",
      tel: "02-443-6655",
    },

    {
      name: "OceanBite Seafoods",
      email: "sales@oceanbite.co.th",
      tel: "02-775-9900",
    },
    {
      name: "RiceHeart Foods",
      email: "info@riceheart.co.th",
      tel: "02-882-7733",
    },
    {
      name: "NatureNest OEM",
      email: "contact@naturenest.co.th",
      tel: "02-553-8899",
    },
    {
      name: "Bangkok Coffee Roasters",
      email: "info@bangkokcoffee.co.th",
      tel: "02-667-4411",
    },
    {
      name: "Smile Snack Factory",
      email: "sales@smilesnack.com",
      tel: "02-881-9900",
    },
    {
      name: "HerbCare Natural Co.",
      email: "info@herbcare.co.th",
      tel: "02-992-5533",
    },
    {
      name: "FruitJoy Processing",
      email: "orders@fruitjoy.co.th",
      tel: "02-991-4422",
    },
    {
      name: "ThaiFarm Beverage",
      email: "contact@thaifarmbev.com",
      tel: "02-993-7711",
    },
    {
      name: "SnackCraft Thailand",
      email: "info@snackcraft.co.th",
      tel: "02-887-4455",
    },
    {
      name: "PureTaste FoodTech",
      email: "hello@puretaste.co.th",
      tel: "02-881-5566",
    },

    {
      name: "Lanna Snack Works",
      email: "sales@lannasnack.co.th",
      tel: "053-443-772",
    },
    {
      name: "CocoCharm Beverage",
      email: "info@cococharm.co.th",
      tel: "02-881-7766",
    },
    {
      name: "TropicalFruit OEM",
      email: "support@tropicalfruit.co.th",
      tel: "02-771-8899",
    },
    {
      name: "FitLife Nutrition OEM",
      email: "contact@fitlife.co.th",
      tel: "02-443-1199",
    },
    {
      name: "FreshBrew Coffee Co.",
      email: "info@freshbrew.co.th",
      tel: "02-559-3311",
    },
    {
      name: "HappyHerb Drinks",
      email: "orders@happyherb.co.th",
      tel: "02-991-4477",
    },
    {
      name: "Snackify Thailand",
      email: "info@snackify.co.th",
      tel: "02-882-7766",
    },
    {
      name: "GreenHarvest Foods",
      email: "contact@greenharvest.co.th",
      tel: "02-881-3322",
    },
    {
      name: "SiamEco Juice OEM",
      email: "sales@siamecojuice.co.th",
      tel: "02-991-1188",
    },
    {
      name: "BlueOcean Drinks",
      email: "info@blueoceandrinks.co.th",
      tel: "02-443-6677",
    },
  ];

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
      sx={{ bgcolor: "grey.100", py: 4 }}
    >
      {oems.map((oem, index) => (
        <Card
          key={index}
          sx={{
            width: 320,
            borderRadius: 3,
            boxShadow: 4,
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.03)" },
          }}
        >
          <CardMedia
            component="img"
            alt={oem.name}
            image="/doosdoos_wordmark.svg"
            sx={{
              height: 120,
              width: "100%",
              objectFit: "contain",
              p: 2,
            }}
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {oem.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <EmailIcon /> {oem.email}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <LocalPhoneIcon /> {oem.tel}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              onClick={() => router.push(`/oems/${index}`)}
            >
              View
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => router.push(`/chat`)}
            >
              Contact
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
}
