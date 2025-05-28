"use client"
import { Box } from '@mui/material';
import React from 'react'
import { Header } from '../_components/header';
import { useUserManagement } from '@/hooks/use-user-management';

export const UserManagementIndex = () => {
  const { userManagements , userManagementsIsLoading } = useUserManagement();
  // const [faq, setFaqs] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api/proxy/faq')
  //     .then(res => res.json())
  //     .then(data => setFaqs(data))
  //     .catch(err => console.error("error", err));
  // }, [faq]);

    console.log('loading ==>', userManagementsIsLoading);
  console.log('userManagements ===>', userManagements)
  return (
      <Box>
        <Header
          title="User Management"
        
        />
        <div>User Management body</div>
      </Box>
  )
}
