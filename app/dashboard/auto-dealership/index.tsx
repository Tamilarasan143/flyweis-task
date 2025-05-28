"use client"
import { useAutoDealerShip } from '@/hooks/use-auto-dealership'
import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../_components/header'

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
      <Box>
        <Header
          title="Auto dealership"
          button={{ name: "Add auto dealership", onClick: () => null }}
        />
        <div>Auto dealership body</div>
      </Box>
    );
}
