import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CTA_LABEL } from "@/content/site";

export function Eyebrow({ children, index, className }: { children: ReactNode; index?: string | undefined; className?: string }) {
  return (
    <p className={cn("t-eyebrow flex items-center gap-3", className)}>
      {index && <span className="font-medium tabular-nums">{index}</span>}
      <span aria-hidden className="h-px w-6 shrink-0 bg-ambar" />
      <span>{children}</span>
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  index,
  title,
  lead,
  as = "h2",
  className,
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  const H = as;
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow index={index} className="mb-6">{eyebrow}</Eyebrow>}
      <H className={as === "h1" ? "t-h1" : "t-h2"}>{title}</H>
      {lead && <p className="t-lead mt-6 measure">{lead}</p>}
    </div>
  );
}

export function PrimaryCTA({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link to="/contacto" className={cn("btn", dark ? "btn-primary-dark" : "btn-primary", className)}>
      {CTA_LABEL}
    </Link>
  );
}

export function EditorialImage({
  alt,
  caption,
  ratio = "4/5",
  className,
  src,
}: {
  alt: string;
  caption?: string;
  ratio?: string;
  className?: string;
  src?: string;
}) {
  return (
    <figure className={cn("relative w-full", className)} style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div role="img" aria-label={alt} className="placeholder-img flex h-full w-full items-center justify-center">
          <span className="t-eyebrow opacity-60">Imagen de proyecto · sustituir</span>
        </div>
      )}
      {caption && (
        <figcaption className="t-eyebrow absolute bottom-4 left-4 bg-blanco px-3 py-2 text-grafito">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="relative grid gap-10 md:grid-cols-6 md:gap-6">
      <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-line-strong md:block" />
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s.title} className="relative flex gap-5 md:block">
            <span
              className={cn(
                "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border text-[15px] font-semibold",
                last ? "border-ambar bg-ambar text-grafito" : "border-grafito bg-blanco text-grafito",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="md:mt-6">
              <h3 className="text-[19px] font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed">{s.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function Stat({ value, label, inverse = false }: { value: string; label: string; inverse?: boolean }) {
  return (
    <div className={cn("border-t pt-6", inverse ? "border-line-inverse" : "border-line-strong")}>
      <p className="t-figure">{value}</p>
      <p className="t-eyebrow mt-4">{label}</p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  tone = "crema",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  tone?: "crema" | "blanco";
  children?: ReactNode;
}) {
  return (
    <section className={tone === "crema" ? "bg-crema" : "bg-blanco"}>
      <div className="wrap pt-20 pb-20 md:pt-32 md:pb-28">
        <SectionHeader as="h1" eyebrow={eyebrow} title={title} lead={lead} className="max-w-4xl" />
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="wrap pt-8">
      <ol className="t-eyebrow flex flex-wrap gap-2">
        <li>
          <Link to="/" className="link-text">Inicio</Link>
        </li>
        {items.map((it) => (
          <li key={it.label} className="flex gap-2">
            <span aria-hidden>/</span>
            {it.to ? (
              <a href={it.to} className="link-text">{it.label}</a>
            ) : (
              <span aria-current="page">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
