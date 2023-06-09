import {
  Box,
  Stack
} from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />
      {/* Msg */}
      <Box
        width={"100%"}
        className="scrollbarChat"
        sx={{ flexGrow: 1, heigh: "100%", overflowY: "scroll" }}
      >
        <Message menu={true}/>
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
