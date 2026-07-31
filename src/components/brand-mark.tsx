import Image from "next/image";

export function BrandMark({ className = "size-10" }: { className?: string }) {
  return (
    <Image
      alt=""
      className={className}
      height={360}
      src="/brand/systemika-symbol-original-transparent.png"
      width={360}
    />
  );
}
