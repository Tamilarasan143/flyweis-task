// pages/api/admin/login.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }



    try {
        const response = await fetch('https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        })

        const data = await response.json()
        return NextResponse.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error })
    }
}
