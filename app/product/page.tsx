export default async function Product() {
  const res = await fetch('http://localhost:3001/api/user', {
    method: 'POST',
    body: JSON.stringify({
      name: "dilip kumar",
      email: "dilipkumarn14@gmail.com"
    })
  });
  const data = await res.json();
  console.log(data, "db")

  // const res1 = await fetch('http://localhost:3001/api/user');
  // const data1 = await res1.json();
  // console.log(data1, "db")

  return (
    <div>
      Product
    </div>
  );
}
