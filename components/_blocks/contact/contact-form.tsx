"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { Button } from "@/components/button/button";
import { cn } from "@/lib/utils";

type FormDict = Dictionary["contact"]["form"];
type Status = "idle" | "success" | "error";

// Web3Forms emails each submission to the address tied to this key.
// Keys are public by design (submissions happen from the browser).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

async function submit(_: Status, formData: FormData): Promise<Status> {
  if (!ACCESS_KEY) return "error";

  formData.append("access_key", ACCESS_KEY);
  formData.append(
    "subject",
    `New website lead: ${formData.get("interest")} · ${formData.get("name")}`,
  );
  formData.append("from_name", "buywithmiguel website");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.success ? "success" : "error";
  } catch {
    return "error";
  }
}

const fieldClass =
  "border-input bg-background focus:border-gold focus:ring-gold/20 w-full border px-4 py-3 text-base outline-none transition focus:ring-2";
const labelClass =
  "text-muted-foreground mb-2 block text-xs font-semibold tracking-[0.2em] uppercase";

export default function ContactForm({ dict }: { dict: FormDict }) {
  const [status, formAction, pending] = useActionState(submit, "idle");

  if (status === "success") {
    return (
      <div className="bg-background flex flex-col items-center justify-center gap-4 p-10 text-center shadow-xl sm:p-14">
        <CheckCircle2 className="text-gold size-12" strokeWidth={1.25} />
        <p className="font-display text-2xl">{dict.success}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-background grid gap-6 p-6 shadow-xl sm:grid-cols-2 sm:p-10"
    >
      {/* Honeypot: bots fill this in, people never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="sm:col-span-2">
        <label htmlFor="name" className={labelClass}>
          {dict.name}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          {dict.phone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          {dict.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={labelClass}>{dict.interest}</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Object.entries(dict.interests).map(([value, label], i) => (
            <label key={value} className="cursor-pointer">
              <input
                type="radio"
                name="interest"
                value={label}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "border-input block border py-3 text-center text-sm font-medium transition",
                  "peer-checked:border-gold peer-checked:bg-gold peer-checked:text-white",
                  "peer-focus-visible:ring-gold/40 hover:border-gold peer-focus-visible:ring-2",
                )}
              >
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={dict.messagePlaceholder}
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          fullWidth
          disabled={pending}
          className="h-14 text-xs"
        >
          {pending ? dict.sending : dict.submit}
        </Button>
        {status === "error" && (
          <p role="alert" className="text-destructive mt-4 text-sm">
            {dict.error}
          </p>
        )}
      </div>
    </form>
  );
}
