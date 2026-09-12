import { redirect } from "next/navigation";

// The gate proxy already redirects "/" to the right place; this is a
// fallback in case the route is ever hit directly without proxy running.
export default function Home() {
  redirect("/executive-summary");
}
