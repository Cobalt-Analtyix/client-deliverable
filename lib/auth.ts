import crypto from "node:crypto";

export const SESSION_COOKIE = "playblue_session";

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days
export const SESSION_MAX_AGE = SESSION_TTL_SECONDS;

// Set PLAYBLUE_SESSION_SECRET and PLAYBLUE_GATE_PASSWORD in the deployment
// environment. The fallbacks below only exist so local `npm run dev` works
// out of the box.
const SECRET = process.env.PLAYBLUE_SESSION_SECRET || "playblue-dev-secret-rotate-me";
export const GATE_PASSWORD = process.env.PLAYBLUE_GATE_PASSWORD || "PlayBlue@2026";

function sign(value: string): string {
  return crypto.createHmac("sha256", SECRET).update(value).digest("hex");
}

/** Stateless signed session token: "<expiresAtMs>.<hmac>". No server-side store needed. */
export function createSessionToken(): string {
  const payload = String(Date.now() + SESSION_TTL_SECONDS * 1000);
  return `${payload}.${sign(payload)}`;
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const sigBuf = Buffer.from(signature);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length) return false;
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return false;

  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt)) return false;
  return Date.now() < expiresAt;
}
