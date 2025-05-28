"use client";
import { useFaqs } from "@/hooks/use-faq";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Header } from "../_components/header";
import { FAQItem } from "@/models/faq";
import DataTable from "react-data-table-component";
import { customTableHeaderStyles } from "../_components/tableheaderstyle";

export const FaqIndex = () => {
  const { faqs, faqIsLoading } = useFaqs();
  // const [faq, setFaqs] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api/proxy/faq')
  //     .then(res => res.json())
  //     .then(data => setFaqs(data))
  //     .catch(err => console.error("error", err));
  // }, [faq]);
  const columns = [
    {
      name: `Question`,
      selector: (row: FAQItem) => (
        <Typography variant="body2">{row.question}</Typography>
      ),
    },
    {
      name: `Answer`,
      wrap: true,
      selector: (row: FAQItem) => (
        <Typography variant="body2">{row.answer}</Typography>
      ),
    },
    {
      name: `Operations`,
      selector: (row: FAQItem) => (
        <Typography variant="body2">{row._id}</Typography>
      ),
    },
  ];
  console.log("loading ==>", faqIsLoading);
  console.log("faqs ===>", faqs);
  return (
    <Box>
      <Header
        title="FAQ's"
        button={{ name: "Add new FAQ", onClick: () => null }}
      />
      <Paper variant="outlined" sx={{ pb: 0.5 }}>
        <DataTable
          columns={columns}
          data={faqs?.data ?? []}
          progressPending={faqIsLoading}
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
    </Box>
  );
};
