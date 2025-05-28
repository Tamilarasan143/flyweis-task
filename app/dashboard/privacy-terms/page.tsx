import { Metadata } from 'next/types';
import React from 'react'
import { PrivacyAndPolicyIndex } from '.';

export const metadata: Metadata = {
  title: "Privacy & Terms",
};

export const PrivacyAndPolicyPage = () => {
  return (
    <PrivacyAndPolicyIndex/>
  )
}
export default PrivacyAndPolicyPage;