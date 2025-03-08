import {CssBaseline} from "@mui/material";
import React from "react";
import ClientWrapper from "@/app/ClientWrapper";
import HomePage from "@/pages/Home";

export default function Home() {
  return (
      <ClientWrapper>
          <CssBaseline />
          <HomePage />
      </ClientWrapper>
  );
}
