import PayButton from "@/components/layout/PayButton";

export default async function ProductPage({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = await params

  // This fetch runs on the server (no client-side code needed here)
  const res = await fetch('http://localhost:3000/api/orders', {
    method: 'POST',
    body: JSON.stringify({
      "amount": 500,
      "currency": "INR",
      "receipt": "qwsaq1",
      "partial_payment": true,
      "first_payment_min_amount": 230
    })
  });
  const data = await res.json();
  console.log(data)

  return (
    <main>
      <h1>Products</h1>
      <PayButton orderId={data.externalData.id}/>
    </main>
  );
}