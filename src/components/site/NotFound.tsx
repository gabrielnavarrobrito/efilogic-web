import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <section className="wrap section-y">
      <p className="t-eyebrow">Error 404</p>
      <h1 className="t-h1 mt-6">Esta página no existe.</h1>
      <p className="t-lead mt-6 measure">
        Puede que se haya movido. Vuelve al inicio para seguir explorando.
      </p>
      <Link to="/" className="btn btn-secondary mt-10">
        Volver al inicio
      </Link>
    </section>
  );
}
