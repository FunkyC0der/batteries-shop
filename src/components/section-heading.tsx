type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </HeadingTag>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
