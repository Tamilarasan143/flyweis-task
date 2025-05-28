"use client"
import { useAutoDealerShip } from '@/hooks/use-auto-dealership'
import React from 'react'

export const AutoDealershipIndex = () => {
    const {autoDealerShips, autoDealerShipsIsLoading} = useAutoDealerShip()
    // const [article, setArticle] = React.useState(null);

    // React.useEffect(() => {
    //     fetch('https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/Article/getArticle')
    //         .then(res => res.json())
    //         .then(data => setArticle(data))
    //         .catch(err => console.error("error", err));
    // }, []);

    console.log('loading ==>', autoDealerShipsIsLoading);
    console.log('autoDealerShips ===>', autoDealerShips)
    return (
        <div>index</div>
    )
}
