"use client"
import { Box, Paper, Typography } from '@mui/material';
import React from 'react'
import { Header } from '../_components/header';
import { usePrivacyAndTerms } from '@/hooks/use-privacy-terms';
import { TermsData } from '@/models/privacy-terms';
import DataTable from 'react-data-table-component';
import { customTableHeaderStyles } from '../_components/tableheaderstyle';

export const PrivacyAndPolicyIndex = () => {
  const { privacyAndTerms,privacyAndTermsIsLoading} = usePrivacyAndTerms();
  // const [faq, setFaqs] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api/proxy/faq')
  //     .then(res => res.json())
  //     .then(data => setFaqs(data))
  //     .catch(err => console.error("error", err));
  // }, [faq]);
  const columns = [
    {
      name: `Title`,
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
        <Typography variant="body2">{row._id}</Typography>
      ),
    },
  ];
  console.log('loading ==>', privacyAndTermsIsLoading);
  console.log('privacyAndTerms ===>', privacyAndTerms);

  return (
      <Box>
        <Header
          title="Privacy & Policy"
          button={{ name: "Add new", onClick: () => null }}
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
      </Box>
  )
}
