
export default async function ProductPage({params}: {params: Promise<{ slug: string }>}) {
const { slug } = await params
  // This fetch runs on the server (no client-side code needed here)
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
    console.log(data)
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}