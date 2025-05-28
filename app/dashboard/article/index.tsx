"use client";
import { useArticle } from "@/hooks/use-article";
import React from "react";
import { Header } from "../_components/header";
import { Box, Paper, Typography } from "@mui/material";
import DataTable from "react-data-table-component";
import { Article } from "@/models/article";
import Image from "next/image";
import { customTableHeaderStyles } from "../_components/tableheaderstyle";
import { ImagePlaceholder } from "../_components/image-placeholder";
import { TableRowEditDelete } from "../_components/table-row-edit-delete";
// import { AddArticleDialog } from "./add-article";

export const ArticleIndex = () => {
  const { articles, articlesIsLoading, deleteArticle, isDeleteArticleLoading } = useArticle();
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const [article, setArticle] = React.useState(null);

  // React.useEffect(() => {
  //     fetch('https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/Article/getArticle')
  //         .then(res => res.json())
  //         .then(data => setArticle(data))
  //         .catch(err => console.error("error", err));
  // }, []);
  // const handleEdit = (id: Article[`_id`]) => {
  //   console.log("id", id);
  // };
  const handleDelete = (id: Article[`_id`]) => {

    deleteArticle(id)
  };
  const columns = [
    {
      name: `Image`,
      selector: (row: Article) =>
        row.image ? (
          <Image
            // src={URL.createObjectURL(file)}
            src={row.image}
            alt={row.title}
            width={40}
            height={40}
            className="h-10 w-10 rounded border object-cover"
          />
        ) : (
          <ImagePlaceholder />
        ),
    },
    {
      name: `Title`,
      selector: (row: Article) => (
        <Typography variant="body2">{row.title}</Typography>
      ),
    },
    {
      name: `Description`,
      wrap: true,
      selector: (row: Article) => (
        <Typography variant="body2">{row.description}</Typography>
      ),
    },
    {
      name: `Operations`,
      selector: (row: Article) => (
        <TableRowEditDelete
          // onEdit={() => handleEdit(row._id)}
          isDisableDelete={isDeleteArticleLoading}
          onDelete={() => handleDelete(row._id)}
        />
      ),
    },
  ];
  console.log("loading ==>", articlesIsLoading);
  console.log("article ===>", articles);
  return (
    <Box>
      <Header
        title="Article"
        // button={{ name: "Add new article", onClick: () => handleClickOpen() }}
      />
      <Paper variant="outlined" sx={{ pb: 0.5 }}>
        <DataTable
          columns={columns}
          data={articles?.data.docs ?? []}
          progressPending={articlesIsLoading}
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
      {/* {open && <AddArticleDialog open={open} handleClose={handleClose}/>} */}
    </Box>
  );
};
