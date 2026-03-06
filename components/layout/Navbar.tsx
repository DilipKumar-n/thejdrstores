import Links from "../common/Links";

export default function Navbar() {
  return (
    <div className="flex gap-4">
      <Links href="/" text="Home" underline={false} />
      <Links href="/about" text="About" underline={false} />
      <Links href="/contact" text="Contact" underline={false} />
    </div>
  );
}
