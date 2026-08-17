import { CHECKOUT_URL } from "@/content/site";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "accent";
  target?: "offer" | "checkout";
  className?: string;
};

export function CTAButton({
  children,
  variant = "accent",
  target = "checkout",
  className = "",
}: Props) {
  const base =
    "inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center font-display text-base font-bold leading-tight shadow-soft transition-transform duration-200 active:scale-[0.98] hover:-translate-y-0.5 sm:w-auto sm:text-lg";
  const styles =
    variant === "accent"
      ? "bg-accent text-accent-foreground"
      : "bg-primary text-primary-foreground";

  if (target === "offer") {
    return (
      <a href="#oferta" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={CHECKOUT_URL}
      data-conversion="checkout-click"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
