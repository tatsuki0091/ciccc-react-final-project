import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Layout = () => {
  // Appbar's style
  const AppBarButton = styled(AppBar)`
    background: #3f51b5;
    color: #fff;
  `;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarButton position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MatTable CRUD Example
            </Typography>
            <Button color="inherit">Reload data:</Button>
          </Toolbar>
        </AppBarButton>
      </Box>
    </>
  );
};

export default Layout;
