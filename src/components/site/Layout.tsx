import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useState, type FocusEvent } from "react";
import { Logo } from "./Logo";
import { MENU, SOCIALS, SEARCH_PAGES } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  // Desplegable de escritorio abierto: el header toma su mismo color.
  const [megaOpen, setMegaOpen] = useState(false);
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
    setMegaOpen(false);
  }, [pathname]);

  const closeMega = () => {
    setMegaOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  const transparent = isHome && !scrolled && !open && !searchOpen && !megaOpen;
  const results = SEARCH_PAGES.filter((p) =>
    p.label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-colors duration-300",
        isHome ? "fixed" : "sticky",
        megaOpen
          ? cn("bg-grafito text-blanco", isHome && !scrolled && "pt-4 md:pt-6")
          : transparent
            ? "bg-transparent pt-4 text-blanco md:pt-6"
            : "bg-blanco text-grafito",
      )}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link to="/" aria-label="Efilogic, inicio" className="py-2">
          <Logo variant={transparent || megaOpen ? "white" : "graphite"} className="h-10 md:h-11" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {MENU.map((m) => (
              <li
                key={m.label}
                className="group"
                {...(m.children && m.label !== "Nosotros"
                  ? {
                      onMouseEnter: () => setMegaOpen(true),
                      onMouseLeave: () => setMegaOpen(false),
                      onFocus: () => setMegaOpen(true),
                      onBlur: (e: FocusEvent<HTMLLIElement>) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setMegaOpen(false);
                      },
                    }
                  : {})}
              >
                {m.label === "Contacto" ? (
                  <Link
                    to={m.to}
                    className="ml-2 inline-flex items-center bg-ambar px-6 py-3 text-[14px] font-semibold text-grafito transition-colors duration-300 hover:bg-grafito hover:text-blanco"
                  >
                    {m.label}
                  </Link>
                ) : (
                  <>
                    <Link
                      to={m.to}
                      onClick={closeMega}
                      className="flex items-center gap-1.5 py-6 text-[14px] font-semibold capitalize"
                      activeOptions={{ exact: m.to === "/" }}
                    >
                      <span
                        className={cn(
                          "draw-line",
                          m.children && m.label !== "Nosotros" && megaOpen && "is-drawn",
                        )}
                      >
                        {m.label}
                      </span>
                      {m.children && m.label !== "Nosotros" && (
                        <ChevronDown strokeWidth={1.5} className="h-4 w-4" aria-hidden />
                      )}
                    </Link>
                    {m.children && m.label !== "Nosotros" && (
                      // Visibilidad por estado (no por :hover) para poder cerrarlo al
                      // pulsar un enlace aunque el ratón siga encima.
                      <div
                        className={cn(
                          "absolute inset-x-0 top-full bg-grafito text-blanco transition-opacity duration-300",
                          megaOpen ? "visible opacity-100" : "invisible opacity-0",
                        )}
                      >
                        <div className="wrap flex gap-16 py-12">
                          <p className="w-48 shrink-0 border-r border-line-inverse pr-10 text-[15px] font-semibold">
                            {m.label}
                          </p>
                          <ul className="grid flex-1 grid-cols-2 gap-x-16 gap-y-5 xl:grid-cols-4">
                            {m.children.map((c) => (
                              <li key={c.to}>
                                <Link
                                  to={c.to}
                                  onClick={closeMega}
                                  className="draw-line text-[17px] font-medium"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
            <button
              type="button"
              aria-label="Idioma: español"
              className="flex h-11 cursor-pointer items-center gap-1 px-2 text-[14px] font-semibold tracking-[0.06em]"
            >
              ES <ChevronDown strokeWidth={1.5} className="h-4 w-4" aria-hidden />
            </button>
            <ul className="invisible absolute right-0 top-full w-40 border border-line bg-blanco py-2 text-grafito opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <li>
                <span className="block px-5 py-2 text-[14px] font-semibold">Español</span>
              </li>
              <li>
                <span className="block px-5 py-2 text-[14px] opacity-60">English · pronto</span>
              </li>
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
        <div className="bg-blanco text-grafito">
          <div className="wrap py-8">
            <label htmlFor="buscar" className="t-eyebrow">
              Buscar en Efilogic
            </label>
            <input
              id="buscar"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="field text-[22px]"
              placeholder="Servicios, proyectos, recursos…"
            />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="link-text text-[16px]">
                    {r.label}
                  </Link>
                </li>
              ))}
              {results.length === 0 && <li className="text-[16px]">Sin resultados.</li>}
            </ul>
          </div>
        </div>
      )}

      {open && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="border-t border-line bg-blanco text-grafito lg:hidden"
        >
          <ul className="wrap flex flex-col py-6">
            {MENU.map((m) => (
              <li key={m.label} className="border-b border-line py-2">
                <Link to={m.to} className="block py-3 text-[18px] font-semibold">
                  {m.label}
                </Link>
                {m.children && m.label !== "Nosotros" && (
                  <ul className="pb-2 pl-4">
                    {m.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} className="block py-2 text-[16px]">
                          {c.label}
                        </Link>
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
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed">
              FF&E y equipamiento contract para proyectos hoteleros.
            </p>
          </div>
          <nav
            aria-label="Pie de página"
            className="grid grid-cols-2 gap-10 md:col-span-5 md:col-start-7"
          >
            {MENU.filter((m) => m.children).map((m) => (
              <div key={m.label}>
                <p className="t-eyebrow mb-5">{m.label}</p>
                <ul className="space-y-3 text-[15px]">
                  {m.children?.map((c) => (
                    <li key={c.to}>
                      <Link to={c.to} className="draw-line">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ambar pt-8 md:flex-row md:items-center">
          <p className="text-[13px]">© 2027 Efilogic</p>
          <ul className="flex gap-6" aria-label="Redes sociales">
            {SOCIALS.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-eyebrow transition-colors duration-300 hover:text-ambar"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
