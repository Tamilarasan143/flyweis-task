import { Metadata } from 'next/types';
import React from 'react'
import { ArticleIndex } from '.';

export const metadata: Metadata = {
  title: "Article",
};

const ArticlePage = () => {
  return (
    <ArticleIndex/>
  )
}
export default ArticlePage;