interface BrandMarkProps {
  inverse?: boolean;
}

export default function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <a
      className={`brand-mark ${inverse ? 'brand-mark--inverse' : ''}`}
      href="#top"
      aria-label="Sint Srl home"
    >
      sint
    </a>
  );
}
