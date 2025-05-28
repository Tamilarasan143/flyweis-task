"use client";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Header } from "../_components/header";
import { usePrivacyAndTerms } from "@/hooks/use-privacy-terms";
import { TermsData } from "@/models/privacy-terms";
import DataTable from "react-data-table-component";
import { customTableHeaderStyles } from "../_components/tableheaderstyle";
import { TableRowEditDelete } from "../_components/table-row-edit-delete";
import { AddPrivacyAndTermsDialog } from "./add-privacy-terms";

export const PrivacyAndPolicyIndex = () => {
  const { privacyAndTerms, privacyAndTermsIsLoading ,deletePrivacyAndTerms,isDeletePrivacyAndTermsLoading} = usePrivacyAndTerms();
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  // const [faq, setFaqs] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api/proxy/faq')
  //     .then(res => res.json())
  //     .then(data => setFaqs(data))
  //     .catch(err => console.error("error", err));
  // }, [faq]);
  // const handleEdit = (id: TermsData[`_id`]) => {
  //   console.log("id", id);
  // };
  const handleDelete = (id: TermsData[`_id`]) => {
    console.log("id", id);
    deletePrivacyAndTerms(id)
  };
  const columns = [
    {
      name: `Title`,
      wrap: true,
      selector: (row: TermsData) => (
        <Typography variant="body2">{row.title}</Typography>
      ),
    },
    {
      name: `Description`,
      wrap: true,
      selector: (row: TermsData) => (
        <Typography variant="body2">{row.description}</Typography>
      ),
    },
    {
      name: `Operations`,
      selector: (row: TermsData) => (
        <TableRowEditDelete
          // onEdit={() => handleEdit(row._id)}
          onDelete={() => handleDelete(row._id)}
          isDisableDelete={isDeletePrivacyAndTermsLoading}
        />
      ),
    },
  ];
  console.log("loading ==>", privacyAndTermsIsLoading);
  console.log("privacyAndTerms ===>", privacyAndTerms);

  return (
    <Box>
      <Header
        title="Privacy & Policy"
        button={{ name: "Add new", onClick: () => handleClickOpen() }}
      />
      <Paper variant="outlined" sx={{ pb: 0.5 }}>
        <DataTable
          columns={columns}
          data={privacyAndTerms?.data ? [privacyAndTerms?.data] : []}
          progressPending={privacyAndTermsIsLoading}
          selectableRows
          // pagination
          responsive
          highlightOnHover
          pointerOnHover
          // paginationServer
          // paginationTotalRows={totalRows}
          // onChangeRowsPerPage={onChangeRowsPerPage}
          // onChangePage={onChangePage}
          // onRowClicked={handleRowClick}
          customStyles={customTableHeaderStyles}
        />
      </Paper>
      {open && <AddPrivacyAndTermsDialog open={open} handleClose={handleClose}/>}
    </Box>
  );
};
