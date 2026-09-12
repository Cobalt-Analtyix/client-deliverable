"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="gateWrap">
      <div className="gateCard">
        <div className="brand"><i></i><span>Cobalt Analytix</span></div>
        <div className="kicker">Prepared for PlayBlue</div>
        <h1>This brief is password&#8209;protected</h1>
        <p className="lede">
          Enter the access password shared with you to view the sector and
          client intelligence brief.
        </p>
        <form action={formAction} className="gateForm">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            placeholder="••••••••"
          />
          {state?.error ? <p className="gateError">{state.error}</p> : null}
          <button type="submit" disabled={pending}>
            {pending ? "Checking…" : "Enter"}
          </button>
        </form>
        <p className="gateFoot">Cobalt Analytix · Public sources only · Prepared August 2026</p>
      </div>
    </div>
  );
}
