import Link from "next/link";
import { Gift } from "lucide-react";

interface BrandProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: {
    icon: "w-6 h-6",
    text: "text-xl",
  },
  md: {
    icon: "w-7 h-7",
    text: "text-2xl",
  },
  lg: {
    icon: "w-8 h-8",
    text: "text-3xl",
  },
};

const Brand = ({ size = "lg", className = "" }: BrandProps) => {
  const sizes = sizeMap[size];
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="HighEndFree Home">
      <Gift className={`${sizes.icon} text-golden`} strokeWidth={2.5} />
      <span className={`font-extrabold tracking-tight leading-none ${sizes.text}`}>
        <span className="text-foreground">HighEnd</span>
        <span className="text-golden">Free</span>
      </span>
    </Link>
  );
};

export default Brand;
