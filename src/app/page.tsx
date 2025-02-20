import {
    Container,
    CssBaseline, 
    Paper
} from "@mui/material";
import React from "react";
import ClientWrapper from "@/app/ClientWrapper";

export default function Home() {
  return (
      <ClientWrapper>
          <CssBaseline />
          <Container>
              <Paper sx={{textAlign: 'center'}}>
                  Site under construction...
              </Paper>
          </Container>
      </ClientWrapper>
  );
}
