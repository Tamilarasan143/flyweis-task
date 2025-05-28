"use client";
import { useArticle } from "@/hooks/use-article";
import React from "react";
import { Header } from "../_components/header";
import { Box } from "@mui/material";

export const ArticleIndex = () => {
  const { articles, articlesIsLoading } = useArticle();
  // const [article, setArticle] = React.useState(null);

  // React.useEffect(() => {
  //     fetch('https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/Article/getArticle')
  //         .then(res => res.json())
  //         .then(data => setArticle(data))
  //         .catch(err => console.error("error", err));
  // }, []);

  console.log("loading ==>", articlesIsLoading);
  console.log("article ===>", articles);
  return (
    <Box>
      <Header title="Article" button={{name:"Add new article",onClick:()=>null}}/>
      <div>Article body</div>
    </Box>
  );
};
