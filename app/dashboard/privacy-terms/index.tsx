"use client"
import { Box } from '@mui/material';
import React from 'react'
import { Header } from '../_components/header';
import { usePrivacyAndTerms } from '@/hooks/use-privacy-terms';

export const PrivacyAndPolicyIndex = () => {
  const { privacyAndTerms,privacyAndTermsIsLoading} = usePrivacyAndTerms();
  // const [faq, setFaqs] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api/proxy/faq')
  //     .then(res => res.json())
  //     .then(data => setFaqs(data))
  //     .catch(err => console.error("error", err));
  // }, [faq]);

    console.log('loading ==>', privacyAndTermsIsLoading);
  console.log('privacyAndTerms ===>', privacyAndTerms)
  return (
      <Box>
        <Header
          title="Privacy & Policy"
          button={{ name: "Add new", onClick: () => null }}
        />
        <div>PrivacyAndPolicy body</div>
      </Box>
  )
}
