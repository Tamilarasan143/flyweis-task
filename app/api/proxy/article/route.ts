// /app/api/proxy-faq/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/Article/getArticle', {
    method: 'GET',
  });

  const data = await res.json();

  return NextResponse.json(data);
}
