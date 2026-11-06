import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { CTA_LABEL, ENTITY, NAV } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-blanco">
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Efilogic, inicio" className="py-4">
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-[14px] font-medium underline-offset-[6px] hover:underline"
                  activeProps={{ className: "underline decoration-ambar decoration-2" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/contacto" className="btn btn-secondary hidden !px-5 !py-3 md:inline-flex">
            Contacto
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-grafito xl:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-line bg-blanco xl:hidden">
          <ul className="wrap flex flex-col py-6">
            {NAV.map((n) => (
              <li key={n.to} className="border-b border-line">
                <Link to={n.to} onClick={() => setOpen(false)} className="block py-4 text-[18px] font-medium">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contacto" onClick={() => setOpen(false)} className="block py-4 text-[18px] font-medium">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-grafito text-blanco">
      <div className="wrap section-y">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="white" className="h-9 md:h-10" />
            <p className="mt-8 max-w-md text-[16px] leading-relaxed">{ENTITY}</p>
          </div>
          <nav aria-label="Pie de página" className="md:col-span-4 md:col-start-7">
            <p className="t-eyebrow mb-6">Explorar</p>
            <ul className="grid grid-cols-2 gap-3 text-[15px]">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-text no-underline hover:underline">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contacto" className="link-text no-underline hover:underline">Contacto</Link>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="t-eyebrow mb-6">Sede</p>
            <address className="text-[15px] not-italic leading-relaxed">
              Las Palmas de Gran Canaria
              <br />
              España
            </address>
            <Link to="/contacto" className="link-text mt-6 inline-block text-[15px]">
              {CTA_LABEL}
            </Link>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-line-inverse pt-8 text-[13px] md:flex-row">
          <p>© {new Date().getFullYear()} Efilogic. Custodia del diseño. Control del cronograma.</p>
          <p>Tu visión, instalada.</p>
        </div>
      </div>
    </footer>
  );
}
