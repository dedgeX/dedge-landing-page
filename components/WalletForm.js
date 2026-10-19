import { useState } from "react";
import { site, track } from "../lib/site";
export default function WalletForm() {
  const [error, setError] = useState("");
  return (
    <form
      className="wallet-form"
      action={site.analyze}
      method="get"
      onSubmit={(e) => {
        const input = e.currentTarget.elements.address;
        input.value = input.value.trim();
        if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(input.value)) {
          e.preventDefault();
          setError("Enter a valid Solana address: 32–44 base58 characters.");
          input.focus();
          return;
        }
        track("wallet_submit", { placement: "hero" });
      }}
    >
      <label htmlFor="wallet">Start with a Solana wallet address</label>
      <div className="input-row">
        <span aria-hidden="true">⌕</span>
        <input
          id="wallet"
          data-clarity-mask="true"
          name="address"
          placeholder="Paste a wallet address…"
          required
          pattern="[1-9A-HJ-NP-Za-km-z]{32,44}"
          title="32–44 base58 characters (no 0, O, I or l)"
          autoComplete="off"
          spellCheck="false"
          aria-describedby="wallet-help wallet-error"
          aria-invalid={!!error}
          onChange={(e) => {
            e.target.value = e.target.value.trim();
            setError("");
          }}
          onInvalid={() =>
            setError("Enter a valid Solana address: 32–44 base58 characters.")
          }
        />
        <button className="button" type="submit">
          Analyze wallet <span aria-hidden="true">→</span>
        </button>
      </div>
      <p id="wallet-error" role="alert" className="error">
        {error}
      </p>
      <p id="wallet-help" className="fine">
        Free to explore <span>·</span> No account <span>·</span> No wallet
        connection
      </p>
    </form>
  );
}
