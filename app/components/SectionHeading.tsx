type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl ${isCenter ? "max-w-2xl" : "max-w-xl"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-base text-muted-foreground sm:text-lg ${isCenter ? "max-w-xl" : "max-w-lg"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
