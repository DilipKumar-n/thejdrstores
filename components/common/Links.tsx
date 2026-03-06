import Link from "next/link";

interface linkProps {
    href: string
    text: string
    underline?: boolean
}

export default function Links({
    href,
    text,
    underline = true
}: linkProps) {
  return (
    <Link
        href={href}
        className={`${underline ? 'underline' : ''}`}
    >
        {text}
    </Link>
  );
}
