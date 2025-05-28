import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { MdClose } from "react-icons/md";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialog: React.FC<{
  open: boolean;
  title: string;
  handleClose: () => void;
  handleSubmit?: () => void;
  disableSubmit?:boolean;
  children: React.ReactNode;
}> = ({ children, handleClose, open, title, handleSubmit,disableSubmit }) => {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth={`md`}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <MdClose />
      </IconButton>
      <DialogContent>{children}</DialogContent>
      {handleSubmit && (
        <DialogActions
          sx={{
            display: "flex",
            alignItems: `center`,
            justifyContent: "center",
          }}
        >
          <Button
          disabled={disableSubmit}
            
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            sx={{ maxWidth: 200, my: 2 }}
            size="large"
          >
            Save
          </Button>
        </DialogActions>
      )}
    </BootstrapDialog>
  );
};
export default CustomizedDialog;
