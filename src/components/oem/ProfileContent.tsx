"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Header from "./profile/Header";
import BioCard from "./profile/BioCard";
import Skills from "./profile/Skills";
import ExperienceList from "./profile/ExperienceList";
import EducationList from "./profile/EducationList";
import SidebarSummary from "./profile/SidebarSummary";
import Connections from "./profile/Connections";

export default function ProfileContent() {
  return (
    <>
      <div className="bg-red-50">
        <Header />
        <Grid container spacing={3} sx={{ mt: 1, ml: 0, pl: 0 }}>
          <Grid item xs={12} md={8}>
            <BioCard />
            <Skills />
            <ExperienceList />
            <EducationList />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarSummary />
            <Connections />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
