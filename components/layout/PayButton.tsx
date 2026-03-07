
'use client'

interface payButtonProps {
  orderId: string
}

export default function PayButton({orderId}: payButtonProps) {
  const handlePay = () => {
    console.log("pay clicked", orderId)
    var options = {
      "key": "rzp_test_SO4VOn38Kua337", // Enter the Key ID generated from the Dashboard
      "amount": "500", // Amount is in currency subunits. 
      "currency": "INR",
      "name": "The JDR Stores", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "callback_url": "http://localhost:3000/api/payment/callback",
      "handler": function (response: any) {
        const order_id = orderId
        const razorpay_payment_id = response.razorpay_payment_id
        const razorpay_order_id = response.razorpay_order_id
        const razorpay_signature = response.razorpay_signature
        const secret = "SV4rlwJ7QwLyFEaWUq30aoGB"

        // Browser HMAC SHA256 implementation using SubtleCrypto
        async function generateSignature(message: string, secret: string) {
          const enc = new TextEncoder();
          const key = await window.crypto.subtle.importKey(
            "raw",
            enc.encode(secret),
            { name: "HMAC", hash: "SHA-256" },
            false,
            ["sign", "verify"]
          );
          const signature = await window.crypto.subtle.sign(
            "HMAC",
            key,
            enc.encode(message)
          );
          return Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
        }
        
        const message = order_id + "|" + razorpay_payment_id;
        generateSignature(message, secret).then(generated_signature => {
          console.log(generated_signature, razorpay_signature)
          if (generated_signature === razorpay_signature) {
            alert("Payment is successful")
          }
        });
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Dilip Kumar", //your customer's name
        "email": "thejdrstores@gmail.com",
        "contact": "+919900976345" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Bangalore"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    // Ensure Razorpay is available on window after script loads
    if (typeof window !== "undefined" && (window as any).Razorpay) {
      var rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
    } else {
      alert("Razorpay SDK not loaded.");
    }
  }

  return (
    <main>
      <button id="rzp-button1" onClick={handlePay}>Pay</button>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </main>
  );
}