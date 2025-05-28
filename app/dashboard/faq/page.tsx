import { Metadata } from 'next/types';
import React from 'react'
import { FaqIndex } from '.';
export const metadata: Metadata = {
  title: "FAQ",
};

export const FaqPage = () => {
  return (
    <FaqIndex/>
  )
}
export default FaqPage;