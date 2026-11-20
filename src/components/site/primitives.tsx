import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CTA_LABEL } from "@/content/site";
import { getSlotImage } from "@/content/images";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("t-eyebrow", className)}>
      <span>{children}</span>
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  const H = as;
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
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

/** Etiqueta ámbar que corona un título, como en los bloques de imagen grande. */
export function SectionTag({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-block w-fit bg-ambar px-5 py-2.5 text-[14px] font-bold text-grafito", className)}>{children}</span>;
}

/**
 * Bloque de imagen grande a sangre + panel de texto (etiqueta ámbar, título,
 * subtexto). La imagen ocupa la mitad de la sección sin recortes decorativos.
 */
export function ImageFeature({
  image,
  imageAlt,
  tag,
  title,
  titleId,
  children,
  reverse = false,
  className,
}: {
  image: string;
  imageAlt: string;
  tag: string;
  title: ReactNode;
  titleId?: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid lg:grid-cols-2", className)}>
      <div className={cn("relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px]", reverse && "lg:order-2")}>
        <img src={image} alt={imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className={cn("flex flex-col justify-center bg-blanco px-6 py-14 md:px-16 md:py-20", reverse && "lg:order-1")}>
        <SectionTag>{tag}</SectionTag>
        <h2 id={titleId} className="t-h2 mt-6 max-w-md">
          {title}
        </h2>
        <div className="mt-6 space-y-6 text-[16px] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function EditorialImage({
  alt,
  caption,
  ratio = "4/5",
  className,
  src,
  slot,
}: {
  alt: string;
  caption?: string;
  ratio?: string;
  className?: string;
  /** URL directa de la imagen. Tiene prioridad sobre `slot`. */
  src?: string;
  /** Hueco de foto definido en src/content/images.ts (ver SLOTS). */
  slot?: string;
}) {
  const resolvedSrc = src ?? (slot ? getSlotImage(slot) : undefined);
  return (
    <figure className={cn("relative w-full", className)} style={{ aspectRatio: ratio }}>
      {resolvedSrc ? (
        <img src={resolvedSrc} alt={alt} loading="lazy" className="h-full w-full object-cover" />
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
