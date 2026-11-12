import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Facebook, Instagram, Linkedin, Menu, Search, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MENU, SOCIALS, SEARCH_PAGES } from "@/content/site";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook, youtube: Youtube } as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !open && !searchOpen;
  const results = SEARCH_PAGES.filter((p) => p.label.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-colors duration-300",
        isHome ? "fixed" : "sticky",
        transparent ? "bg-transparent text-blanco" : "border-b border-line bg-blanco text-grafito",
      )}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link to="/" aria-label="Efilogic, inicio" className="py-2">
          <Logo variant={transparent ? "white" : "graphite"} className="h-9 md:h-10" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
            {MENU.map((m) => (
              <li key={m.label} className="group relative">
                {m.label === "Contacto" ? (
                  <Link to={m.to} className="ml-2 inline-flex items-center bg-ambar px-6 py-3 text-[14px] font-semibold text-grafito transition-colors duration-300 hover:bg-grafito hover:text-blanco">
                    {m.label}
                  </Link>
                ) : (
                <>
                <Link
                  to={m.to}
                  className="flex items-center gap-1.5 py-6 text-[14px] font-semibold capitalize"
                  activeProps={{ className: "underline decoration-ambar decoration-2 underline-offset-8" }}
                  activeOptions={{ exact: m.to === "/" }}
                >
                  {m.label}
                  {m.children && <ChevronDown strokeWidth={1.5} className="h-4 w-4" aria-hidden />}
                </Link>
                {m.children && (
                  <ul className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 border border-line bg-blanco py-3 text-grafito opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {m.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} className="block px-6 py-3 text-[15px] font-medium hover:bg-crema">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Buscar"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((s) => !s)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center"
          >
            {searchOpen ? <X strokeWidth={1.5} /> : <Search strokeWidth={1.5} />}
          </button>
          <div className="group relative">
            <button type="button" aria-label="Idioma: español" className="flex h-11 cursor-pointer items-center gap-1 px-2 text-[14px] font-semibold tracking-[0.06em]">
              ES <ChevronDown strokeWidth={1.5} className="h-4 w-4" aria-hidden />
            </button>
            <ul className="invisible absolute right-0 top-full w-40 border border-line bg-blanco py-2 text-grafito opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <li><span className="block px-5 py-2 text-[14px] font-semibold">Español</span></li>
              <li><span className="block px-5 py-2 text-[14px] opacity-60">English · pronto</span></li>
            </ul>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-line bg-blanco text-grafito">
          <div className="wrap py-8">
            <label htmlFor="buscar" className="t-eyebrow">Buscar en Efilogic</label>
            <input id="buscar" autoFocus value={query} onChange={(e) => setQuery(e.target.value)} className="field text-[22px]" placeholder="Servicios, proyectos, recursos…" />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="link-text text-[16px]">{r.label}</Link>
                </li>
              ))}
              {results.length === 0 && <li className="text-[16px]">Sin resultados.</li>}
            </ul>
          </div>
        </div>
      )}

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-line bg-blanco text-grafito lg:hidden">
          <ul className="wrap flex flex-col py-6">
            {MENU.map((m) => (
              <li key={m.label} className="border-b border-line py-2">
                <Link to={m.to} className="block py-3 text-[18px] font-semibold">{m.label}</Link>
                {m.children && (
                  <ul className="pb-2 pl-4">
                    {m.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} className="block py-2 text-[16px]">{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-grafito text-blanco">
      <div className="wrap py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="white" className="h-10 md:h-12" />
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed">FF&E y equipamiento contract para proyectos hoteleros.</p>
          </div>
          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-10 md:col-span-5 md:col-start-7">
            {MENU.filter((m) => m.children).map((m) => (
              <div key={m.label}>
                <p className="t-eyebrow mb-5">{m.label}</p>
                <ul className="space-y-3 text-[15px]">
                  {m.children?.map((c) => (
                    <li key={c.to}><Link to={c.to} className="hover:underline hover:decoration-ambar hover:underline-offset-4">{c.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line-inverse pt-8 md:flex-row md:items-center">
          <p className="text-[13px]">© {new Date().getFullYear()} Efilogic</p>
          <ul className="flex gap-3" aria-label="Redes sociales">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.key];
              return (
                <li key={s.key}>
                  <a href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center transition-colors duration-300 hover:text-ambar">
                    <Icon strokeWidth={1.5} className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
