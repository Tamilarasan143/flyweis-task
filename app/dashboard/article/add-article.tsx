import React, { useRef } from "react";
import CustomizedDialog from "../_components/dialog-layout";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { useArticle } from "@/hooks/use-article";
import { FaCamera } from "react-icons/fa6";
import { ImageAvatar } from "@/components/avatar";

export const AddArticleDialog: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ handleClose, open }) => {
  const { addArticle, isPostArticleLoading } = useArticle();
  const dialogTitle = "Article";
  const [titleError, setNameError] = React.useState(false);
  const [image, setImage] = React.useState<string>("");
  const [titleErrorMessage, setNameErrorMessage] = React.useState("");
  const [desError, setDesError] = React.useState(false);
  const [desErrorMessage, setDesErrorMessage] = React.useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed!");
        return;
      }
       const fileURL = URL.createObjectURL(file);
     setImage(fileURL);
    }
  };

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
      setNameErrorMessage("Please enter an Article Title");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    if (!des.value || des.value.length < 1) {
      setDesError(true);
      setDesErrorMessage("Please enter an Article Description");
      isValid = false;
    } else {
      setDesError(false);
      setDesErrorMessage("");
    }

    if (!isValid) return false;

    addArticle(
      { title: title.value, description: des.value, image },
      { onSuccess: () => handleClose() }
    );
    return isValid;
  };

  return (
    <CustomizedDialog
      open={open}
      title={"Add Article"}
      handleClose={handleClose}
      disableSubmit={isPostArticleLoading}
      handleSubmit={() => validateInputs()}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          {image ? (
            <div style={{height:40,width:40}}>
            <ImageAvatar src={image} size={40} alt="uploaded image" />
            </div>
          ) : (
            <Avatar sx={{ width: 56, height: 56 }}>
              <FaCamera color="gray" />
            </Avatar>
          )}
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <Button variant="text" onClick={() => fileInputRef.current?.click()}>
            Upload Image
          </Button>
        </Box>

        <FormControl>
          <FormLabel
            required
            htmlFor={dialogTitle.toLocaleUpperCase() + "-title"}
          >
            Title
          </FormLabel>
          <TextField
            error={titleError}
            helperText={titleErrorMessage}
            id={dialogTitle.toLocaleUpperCase() + "-title"}
            name={dialogTitle.toLocaleUpperCase() + "-title"}
            placeholder="Enter Article Title"
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
            Description
          </FormLabel>
          <TextField
            error={desError}
            helperText={desErrorMessage}
            name={dialogTitle.toLocaleUpperCase() + "-des"}
            multiline
            placeholder="Enter Article Description"
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
