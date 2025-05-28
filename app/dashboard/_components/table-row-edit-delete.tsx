import { Box, Button } from "@mui/material";
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
          color="primary"
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
          color="error"
        >
          Delete
        </Button>
      )}
    </Box>
  );
};
