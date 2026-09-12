import Link from "next/link";
import { logout } from "@/app/actions";

export function Nav({ active }: { active: "executive-summary" | "detailed-research" }) {
  return (
    <div className="topbar">
      <div className="in">
        <div className="brand">
          <i></i>
          <span>Cobalt Analytix</span>
        </div>
        <nav className="tnav" aria-label="Primary">
          <Link href="/executive-summary" className={active === "executive-summary" ? "on" : ""}>
            Executive summary
          </Link>
          <Link href="/detailed-research" className={active === "detailed-research" ? "on" : ""}>
            Detailed research
          </Link>
        </nav>
        <form action={logout}>
          <button className="logoutBtn" type="submit">
            Log out
          </button>
        </form>
      </div>
    </div>
  );
}
