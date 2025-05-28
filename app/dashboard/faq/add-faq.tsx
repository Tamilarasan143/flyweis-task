import React from 'react'
import CustomizedDialog from '../_components/dialog-layout';

import { Box,  FormControl, FormLabel, TextField } from '@mui/material';
import { useFaqs } from '@/hooks/use-faq';

export const AddFaqDialog: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ handleClose, open }) => {
const { addFaq,isPostFaqLoading } = useFaqs();
  const dialogTitle = "Faq";
  const [titleError, setNameError] = React.useState(false);

  const [titleErrorMessage, setNameErrorMessage] = React.useState("");
  const [desError, setDesError] = React.useState(false);
  const [desErrorMessage, setDesErrorMessage] = React.useState("");



  const validateInputs = () => {
    const title = document.getElementById(
      dialogTitle.toLocaleUpperCase() + "-title"
    ) as HTMLInputElement;
    const des = document.getElementById(
      dialogTitle.toLocaleUpperCase() + "-des"
    ) as HTMLInputElement;

    let isValid = true;

    if (!title.value || title.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Please enter an Question");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    if (!des.value || des.value.length < 1) {
      setDesError(true);
      setDesErrorMessage("Please enter an Answer");
      isValid = false;
    } else {
      setDesError(false);
      setDesErrorMessage("");
    }

    if (!isValid) return false;

    addFaq(
      { question: title.value, answer: des.value },
      { onSuccess: () => handleClose() }
    );
    return isValid;
  };

  return (
    <CustomizedDialog
      open={open}
      title={"FAQ'S"}
      handleClose={handleClose}
      disableSubmit={isPostFaqLoading}
      handleSubmit={() => validateInputs()}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}>
       

        <FormControl>
          <FormLabel
            required
            htmlFor={dialogTitle.toLocaleUpperCase() + "-title"}
          >
           Question
          </FormLabel>
          <TextField
            error={titleError}
            helperText={titleErrorMessage}
            id={dialogTitle.toLocaleUpperCase() + "-title"}
            name={dialogTitle.toLocaleUpperCase() + "-title"}
            placeholder="Enter  Question"
            autoFocus
            required
            fullWidth
            size="small"
            variant="outlined"
            color={titleError ? "error" : "primary"}
          />
        </FormControl>

        <FormControl>
          <FormLabel
            required
            htmlFor={dialogTitle.toLocaleUpperCase() + "-des"}
          >
            Answer
          </FormLabel>
          <TextField
            error={desError}
            helperText={desErrorMessage}
            name={dialogTitle.toLocaleUpperCase() + "-des"}
            multiline
            placeholder="Enter Answer"
            minRows={3}
            maxRows={7}
            id={dialogTitle.toLocaleUpperCase() + "-des"}
            size="small"
            required
            fullWidth
            variant="outlined"
            color={desError ? "error" : "primary"}
          />
        </FormControl>
      </Box>
    </CustomizedDialog>
  );
};
