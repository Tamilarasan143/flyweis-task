import { Metadata } from 'next/types';
import React from 'react'
import { AutoDealershipIndex } from '.';


export const metadata: Metadata = {
  title: "Auto - Dealership",
};

const AutoDealershipPage = () => {
  return (
    <AutoDealershipIndex/>
  )
}
export default AutoDealershipPage;