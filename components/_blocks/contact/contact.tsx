import { Languages, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import ContactForm from "./contact-form";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const methods = [
    { icon: Phone, label: dict.call, value: site.phone, href: site.phoneHref },
    {
      icon: MessageCircle,
      label: dict.text,
      value: site.phone,
      href: site.smsHref,
    },
    {
      icon: Mail,
      label: dict.email,
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:px-8">
        <div>
          <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            {dict.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            {dict.title}
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            {dict.body}
          </p>

          <ul className="mt-10 space-y-5">
            {methods.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a href={href} className="group flex items-center gap-4">
                  <span className="border-gold-light text-gold group-hover:bg-gold flex size-11 shrink-0 items-center justify-center border transition-colors group-hover:text-white">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="text-muted-foreground block text-xs tracking-[0.2em] uppercase">
                      {label}
                    </span>
                    <span className="group-hover:text-gold font-medium transition-colors">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <span className="border-gold-light text-gold flex size-11 shrink-0 items-center justify-center border">
                <Languages className="size-4" aria-hidden="true" />
              </span>
              <span className="font-medium">{dict.languages}</span>
            </li>
          </ul>
        </div>

        <ContactForm dict={dict.form} />
      </div>
    </section>
  );
}
