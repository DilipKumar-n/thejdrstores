import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json(); // Use .json() for JSON bodies
  // const formData = await request.formData(); // Use .formData() for form data

  console.log('Received data in API:', data);

  // Perform backend logic (e.g., save to database)

  return NextResponse.json({ message: 'Data received successfully', data });
}