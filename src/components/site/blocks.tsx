import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PERFILES, type CaseStudy as CaseT, type Resource } from "@/content/site";
import { SLOTS } from "@/content/images";
import { getBrandLogo } from "@/content/logos";
import { EditorialImage, Eyebrow } from "./primitives";
import { cn } from "@/lib/utils";

const BRAND_MARK_BOX = "flex h-7 w-12 shrink-0 items-center justify-center sm:h-9 sm:w-20 md:h-10 md:w-28 lg:h-12 lg:w-32";

// Algunos logos traen el trazo más fino o un marco más cuadrado que el resto
// de wordmarks horizontales, así que a ojo se ven más pequeños aunque midan
// lo mismo. Este ajuste compensa ese efecto óptico.
const LOGO_SCALE: Record<string, number> = {
  melia: 1.15,
  "hd-hotels": 1.25,
  lopesan: 1.45,
};

export function BrandMark({ brand }: { brand: { slug: string; name: string; suffix?: string } }) {
  const logo = getBrandLogo(brand.slug);
  if (logo) {
    const scale = LOGO_SCALE[brand.slug];
    return (
      <div className={BRAND_MARK_BOX}>
        <img
          src={logo}
          alt={brand.name}
          loading="lazy"
          className="logo-mono h-full w-full object-contain"
          style={scale ? { transform: `scale(${scale})` } : undefined}
        />
      </div>
    );
  }
  return (
    <div className={BRAND_MARK_BOX}>
      <p className="whitespace-nowrap text-[12px] font-semibold leading-tight text-grafito sm:text-[16px]">{brand.name}</p>
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="border-t border-line-strong">
      {items.map((f, i) => (
        <AccordionPrimitive.Item key={f.q} value={`f${i}`} className="border-b border-line-strong">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left">
              <span className="t-h3 text-[20px] md:text-[22px]">{f.q}</span>
              <Plus
                strokeWidth={1.5}
                aria-hidden
                className="h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="measure pb-8">{f.a}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

export function CaseStudyBlock({ c, reverse = false, headingLevel = "h3" }: { c: CaseT; reverse?: boolean; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
      <div className={cn("md:col-span-7", reverse && "md:order-2")}>
        <EditorialImage
          alt={`Interior terminado de ${c.name}, ${c.location}`}
          caption={`${c.name} · ${c.location} · ${c.year}`}
          ratio="7/5"
          slot={SLOTS.proyectos(c.slug).hero}
        />
      </div>
      <div className={cn("md:col-span-5", reverse && "md:order-1")}>
        <span className="tag bg-blanco">{c.type}</span>
        <H className="t-h3 mt-5">{c.name}</H>
        <dl className="mt-8 space-y-6">
          {(
            [
              ["Reto", c.reto],
              ["Solución", c.solucion],
              ["Resultado", c.resultado],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="border-t border-line-strong pt-4">
              <dt className="t-eyebrow">{k}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
        <Link to="/proyectos/$slug" params={{ slug: c.slug }} className="link-text mt-8 inline-block text-[15px] font-medium">
          Ver el caso completo
        </Link>
      </div>
    </article>
  );
}

export function ResourceCard({ r }: { r: Resource }) {
  return (
    <Link to="/recursos/$slug" params={{ slug: r.slug }} className="card-edit group flex h-full flex-col bg-blanco">
      <EditorialImage alt={`Imagen editorial: ${r.title}`} ratio="3/2" slot={SLOTS.recursos(r.slug)} />
      <div className="flex flex-1 flex-col p-8">
        <span className="tag self-start">{r.kind}</span>
        <h3 className="mt-5 text-[21px] font-medium leading-snug">{r.title}</h3>
        <p className="mt-3 text-[16px] leading-relaxed">{r.excerpt}</p>
        <span className="mt-auto pt-6 text-[14px] font-semibold underline underline-offset-4 group-hover:decoration-ambar group-hover:decoration-2">
          Leer
        </span>
      </div>
    </Link>
  );
}

type Errors = Partial<Record<"nombre" | "email" | "empresa" | "perfil" | "descripcion", string>>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nombre: String(fd.get("nombre") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      empresa: String(fd.get("empresa") ?? "").trim(),
      perfil: String(fd.get("perfil") ?? ""),
      descripcion: String(fd.get("descripcion") ?? "").trim(),
    };
    const errs: Errors = {};
    if (!data.nombre) errs.nombre = "Indica tu nombre.";
    if (!EMAIL_RE.test(data.email)) errs.email = "Indica un email profesional válido.";
    if (!data.empresa) errs.empresa = "Indica tu empresa o estudio.";
    if (!PERFILES.some((p) => p.value === data.perfil)) errs.perfil = "Selecciona tu perfil.";
    if (data.descripcion.length < 10) errs.descripcion = "Cuéntanos algo más sobre tu proyecto.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    // Punto de integración: aquí puede conectarse un CRM o un aviso por email.
    const { error } = await supabase.from("contact_submissions").insert(data);
    setStatus(error ? "error" : "sent");
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-grafito p-10">
        <Eyebrow>Solicitud recibida</Eyebrow>
        <p className="t-h3 mt-4">Gracias. Tu proyecto ya está en buenas manos.</p>
        <p className="mt-4 measure">Te responderemos personalmente en un plazo de dos días laborables para conocer tu visión y tu fecha de apertura.</p>
      </div>
    );
  }

  const field = (name: keyof Errors, label: string, input: React.ReactNode) => (
    <div>
      <label htmlFor={name} className="t-eyebrow block">{label}</label>
      {input}
      {errors[name] && (
        <p id={`${name}-err`} className="mt-2 text-[14px] font-medium text-destructive">{errors[name]}</p>
      )}
    </div>
  );
  const aria = (n: keyof Errors) => ({
    "aria-invalid": !!errors[n] || undefined,
    "aria-describedby": errors[n] ? `${n}-err` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-10 md:grid-cols-2">
      {field("nombre", "Nombre", <input id="nombre" name="nombre" autoComplete="name" maxLength={120} className="field" {...aria("nombre")} />)}
      {field("email", "Email profesional", <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className="field" {...aria("email")} />)}
      {field("empresa", "Empresa / estudio", <input id="empresa" name="empresa" autoComplete="organization" maxLength={160} className="field" {...aria("empresa")} />)}
      {field(
        "perfil",
        "Perfil",
        <select id="perfil" name="perfil" defaultValue="" className="field cursor-pointer" {...aria("perfil")}>
          <option value="" disabled>Selecciona</option>
          {PERFILES.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>,
      )}
      <div className="md:col-span-2">
        {field(
          "descripcion",
          "Descripción del proyecto",
          <textarea id="descripcion" name="descripcion" rows={5} maxLength={3000} className="field resize-y" placeholder="Hotel, número de habitaciones, ubicación y fecha de apertura prevista" {...aria("descripcion")} />,
        )}
      </div>
      <div className="flex flex-col items-start gap-4 md:col-span-2">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Hablemos de tu proyecto"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-[15px] font-medium text-destructive">
            No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos minutos.
          </p>
        )}
      </div>
    </form>
  );
}
