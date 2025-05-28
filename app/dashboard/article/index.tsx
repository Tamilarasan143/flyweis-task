"use client"
import { useArticle } from '@/hooks/use-article'
import React from 'react'

export const ArticleIndex = () => {
    const { articles, articlesIsLoading} = useArticle()
    // const [article, setArticle] = React.useState(null);

    // React.useEffect(() => {
    //     fetch('https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/Article/getArticle')
    //         .then(res => res.json())
    //         .then(data => setArticle(data))
    //         .catch(err => console.error("error", err));
    // }, []);

    console.log('loading ==>', articlesIsLoading);
    console.log('article ===>', articles)
    return (
        <div>index</div>
    )
}
