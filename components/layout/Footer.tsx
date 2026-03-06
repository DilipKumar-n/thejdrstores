import Typography from "../common/Typography";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <div className="flex justify-between bg-amber-200">
        <FooterLinks />
        <Typography variant="para" text={`© ${new Date().getFullYear()} The JDR Stores.`} />
    </div>
  );
}
