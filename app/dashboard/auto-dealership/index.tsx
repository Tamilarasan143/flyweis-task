"use client";
import { useAutoDealerShip } from "@/hooks/use-auto-dealership";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Header } from "../_components/header";
// import Image from 'next/image';
import { customTableHeaderStyles } from "../_components/tableheaderstyle";
import { AutoDealershipEntry } from "@/models/auto-dealership";
import DataTable from "react-data-table-component";
import { ImagePlaceholder } from "../_components/image-placeholder";
export const AutoDealershipIndex = () => {
  const { autoDealerShips, autoDealerShipsIsLoading } = useAutoDealerShip();
  // const [article, setArticle] = React.useState(null);

  // React.useEffect(() => {
  //     fetch('https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/Article/getArticle')
  //         .then(res => res.json())
  //         .then(data => setArticle(data))
  //         .catch(err => console.error("error", err));
  // }, []);
  const columns = [
    {
      name: `Image`,
      selector: (row: AutoDealershipEntry) => (
        <ImagePlaceholder key={row._id} />
      ),
    },
    {
      name: `Title`,
      selector: (row: AutoDealershipEntry) => (
        <Typography variant="body2">{row.title}</Typography>
      ),
    },
    {
      name: `Description`,
      wrap: true,
      selector: (row: AutoDealershipEntry) => (
        <Typography variant="body2">{row.description}</Typography>
      ),
    },
    {
      name: `Operations`,
      selector: (row: AutoDealershipEntry) => (
        <Typography variant="body2">{row._id}</Typography>
      ),
    },
  ];
  console.log("loading ==>", autoDealerShipsIsLoading);
  console.log("autoDealerShips ===>", autoDealerShips);
  return (
    <Box>
      <Header
        title="Auto dealership"
        button={{ name: "Add auto dealership", onClick: () => null }}
      />
      <Paper variant="outlined" sx={{ pb: 0.5 }}>
        <DataTable
          columns={columns}
          data={autoDealerShips?.data ?? []}
          progressPending={autoDealerShipsIsLoading}
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
