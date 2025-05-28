import { Box, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export const TableRowEditDelete: React.FC<{
  onEdit?: () => void;
  onDelete?: () => void;
  isDisableEdit?: boolean;
  isDisableDelete?: boolean;
}> = ({ onDelete, onEdit, isDisableDelete, isDisableEdit }) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {onEdit && (
        <Button
          size="small"
          variant="contained"
          onClick={onEdit}
          sx={{color:(theme)=>theme.palette.primary.main,backgroundColor:(theme)=>theme.palette.primary.light}}
          disabled={isDisableEdit}
        >
          Edit
        </Button>
      )}{" "}
      {onDelete && (
        <Button
          variant="contained"
          size="small"
          disabled={isDisableDelete}
          onClick={onDelete}
            sx={{color:(theme)=>theme.palette.error.main,backgroundColor:red[100]}}
        >
          Delete
        </Button>
      )}
    </Box>
  );
};
