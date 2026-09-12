"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionToken, GATE_PASSWORD, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth";

export type LoginState = { error?: string };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") || "");

  if (password !== GATE_PASSWORD) {
    return { error: "Incorrect password. Please try again." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  redirect("/executive-summary");
}
