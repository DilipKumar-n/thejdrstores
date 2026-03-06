interface typographyProps {
    variant: string
    text: string
    classes?: string
}

export default function Typography({
    variant,
    text,
    classes
}: typographyProps) {
  return (<>
        {variant === "h1" && <h1 className={`${classes}`}>{text}</h1>}
        {variant === "h2" && <h2 className={`${classes}`}>{text}</h2>}
        {variant === "h3" && <h3 className={`${classes}`}>{text}</h3>}
        {variant === "h4" && <h4 className={`${classes}`}>{text}</h4>}
        {variant === "h5" && <h5 className={`${classes}`}>{text}</h5>}
        {variant === "h6" && <h6 className={`${classes}`}>{text}</h6>}
        {variant === "para" && <p className={`${classes}`}>{text}</p>}
    </>
  );
}
