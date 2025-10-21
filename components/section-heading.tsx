type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-3xl`}>
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="text-base text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

