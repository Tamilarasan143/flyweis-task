import { Metadata } from 'next/types';
import React from 'react'
import { UserManagementIndex } from '.';


export const metadata: Metadata = {
  title: "User Management",
};

 const UserManagementPage = () => {
  return (
    <UserManagementIndex/>
  )
}
export default UserManagementPage;