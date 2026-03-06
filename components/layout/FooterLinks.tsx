import Links from "../common/Links";

export default function FooterLinks() {
  return (
    <div className="flex gap-4">
      <Links href="/terms" text="Terms and Conditions" underline={false} />
      <Links href="/privacy-policy" text="Privacy Policy" underline={false} />
      <Links href="/shipping-cancellation" text="Shipping and Cancellation" underline={false} />
    </div>
  );
}
