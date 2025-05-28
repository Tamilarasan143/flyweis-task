"use client"
import { useFaqs } from '@/hooks/use-faq'
import React from 'react'

export const FaqIndex = () => {
  const { faqs , faqIsLoading} = useFaqs();
  // const [faq, setFaqs] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api/proxy/faq')
  //     .then(res => res.json())
  //     .then(data => setFaqs(data))
  //     .catch(err => console.error("error", err));
  // }, [faq]);

    console.log('loading ==>', faqIsLoading);
  console.log('faqs ===>', faqs)
  return (
    <div>index</div>
  )
}
