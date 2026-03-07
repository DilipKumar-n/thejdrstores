import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the request body as JSON
    const { name, email } = body;
    const payload = {
        "amount": 500,
        "currency": "INR",
        "receipt": "qwsaq1",
        "partial_payment": true,
        "first_payment_min_amount": 230
    }
    const username = "rzp_test_SO4VOn38Kua337"
    const password = "SV4rlwJ7QwLyFEaWUq30aoGB"
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    // Here you can call an external API or interact with your database
    // For example, calling an external API:
    const externalApiRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include other necessary headers like API keys
        'Authorization': authHeader,
      },
      body: JSON.stringify(payload),
    });

    if (!externalApiRes.ok) {
      throw new Error('Failed to post data to external API');
    }

    const data = await externalApiRes.json();
    return NextResponse.json({ message: 'Data submitted successfully', externalData: data });
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}