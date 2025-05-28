import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";

export const Header: React.FC<{
  title: string;
  button?: { name: string; onClick: () => void };
}> = ({ title, button }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography component={`h3`} variant="h5">
        {title}
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      {button && (
        <Button
          variant="contained"
          onClick={button.onClick}
          size="medium"
          startIcon={<FiPlus />}
        >
          {button.name}
        </Button>
      )}
    </Box>
  );
};
