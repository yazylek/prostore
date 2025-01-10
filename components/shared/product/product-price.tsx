import clsx from "clsx";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const convertedValue = value.toFixed(2);

  const [int, float] = convertedValue.split(".");

  return (
    <p className={`text-2xl ${clsx(className)}`}>
      <span className="text-xs align-super">$</span>
      {int}
      <span className="text-xs align-super">{float}</span>
    </p>
  );
}
