"use client";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Header } from "../_components/header";
import { useUserManagement } from "@/hooks/use-user-management";
import { UserItem } from "@/models/user-management";
import Image from "next/image";
import { customTableHeaderStyles } from "../_components/tableheaderstyle";
import { ImagePlaceholder } from "../_components/image-placeholder";
import DataTable from "react-data-table-component";
import { TableRowEditDelete } from "../_components/table-row-edit-delete";

export const UserManagementIndex = () => {
  const { userManagements, userManagementsIsLoading ,deleteUser,isDeleteUserLoading} = useUserManagement();
  // const [faq, setFaqs] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api/proxy/faq')
  //     .then(res => res.json())
  //     .then(data => setFaqs(data))
  //     .catch(err => console.error("error", err));
  // }, [faq]);
  const handleEdit = (id: UserItem[`_id`]) => {
    console.log("id", id);
  };
  const handleDelete = (id: UserItem[`_id`]) => {
    deleteUser(id)
  };
  const columns = [
    {
      name: `Image`,
      selector: (row: UserItem) =>
        row.image ? (
          <Image
            // src={URL.createObjectURL(file)}
            src={row.image}
            alt={row.fullName}
            width={40}
            height={40}
            className="h-10 w-10 rounded border object-cover"
          />
        ) : (
          <ImagePlaceholder />
        ),
    },
    {
      name: `Name`,
      selector: (row: UserItem) => (
        <Typography variant="body2">
          {row.fullName ?? row.firstName + " " + row.lastName}
        </Typography>
      ),
    },
    {
      name: `Status`,
      wrap: true,
      selector: (row: UserItem) => (
        <Typography variant="body2">{row.status}</Typography>
      ),
    },
    {
      name: `Login`,
      wrap: true,
      selector: (row: UserItem) => (
        <Typography variant="body2">{row.updatedAt}</Typography>
      ),
    },
    {
      name: `Location`,
      wrap: true,
      selector: (row: UserItem) => (
        <Typography variant="body2">
          {row.state ?? row.country ?? row.location}
        </Typography>
      ),
    },
    {
      name: `Operations`,
      selector: (row: UserItem) => (
        <TableRowEditDelete
          onEdit={() => handleEdit(row._id)}
          onDelete={() => handleDelete(row._id)}
          isDisableDelete={isDeleteUserLoading}
        />
      ),
    },
  ];
  console.log("loading ==>", userManagementsIsLoading);
  console.log("userManagements ===>", userManagements);
  return (
    <Box>
      <Header title="User Management" />
      <Paper variant="outlined" sx={{ pb: 0.5 }}>
        <DataTable
          columns={columns}
          data={userManagements?.data.docs ?? []}
          progressPending={userManagementsIsLoading}
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
