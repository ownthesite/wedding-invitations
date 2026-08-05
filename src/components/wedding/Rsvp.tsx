/**
 * RSVP form. Currently client-side only; `submitRsvp` is the single
 * integration point for a backend (e.g. Lovable Cloud) later.
 */

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Divider, Eyebrow } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

export interface RsvpPayload {
  name: string;
  phone: string;
  guests: number;
  attendance: "attending" | "not-attending";
  food: string;
  message: string;
}

/** Replace this with a server call when the backend is connected. */
async function submitRsvp(payload: RsvpPayload): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  console.info("RSVP submitted", payload);
}

const fieldClass =
  "mt-2 w-full rounded-xs border border-gold/40 bg-ivory/70 px-4 py-3 text-sm text-cocoa placeholder:text-muted-foreground/70 focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-hidden";

const labelClass =
  "font-serif-caps block text-[0.55rem] tracking-luxe text-gold uppercase";

export function Rsvp() {
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: RsvpPayload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      guests: Number(data.get("guests") ?? 1),
      attendance: (data.get("attendance") as RsvpPayload["attendance"]) ?? "attending",
      food: String(data.get("food") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setPending(true);
    try {
      await submitRsvp(payload);
      toast.success("Thank you — your response has been noted.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="rsvp" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <Eyebrow>{wedding.rsvp.deadline}</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
            Will You Join Us?
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="mt-10 rounded-xs border border-gold/30 bg-ivory/80 p-6 shadow-[var(--shadow-card)] sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="rsvp-name">
                  Full name
                </label>
                <input
                  id="rsvp-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="rsvp-phone">
                  Phone
                </label>
                <input
                  id="rsvp-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="rsvp-guests">
                  Number of guests
                </label>
                <input
                  id="rsvp-guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={12}
                  defaultValue={2}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="rsvp-food">
                  Food preference
                </label>
                <select id="rsvp-food" name="food" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Please choose
                  </option>
                  {wedding.rsvp.foodOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className={labelClass}>Attendance</legend>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  { value: "attending", label: "Joyfully accepts" },
                  { value: "not-attending", label: "Regretfully declines" },
                ].map((option, index) => (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-2.5 rounded-xs border border-gold/40 px-4 py-3 text-sm text-cocoa transition-colors duration-500 hover:bg-champagne/50 has-checked:bg-champagne/70"
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      defaultChecked={index === 0}
                      className="accent-wine"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-6">
              <label className={labelClass} htmlFor="rsvp-message">
                A note for the couple
              </label>
              <textarea
                id="rsvp-message"
                name="message"
                rows={4}
                placeholder="Your wishes and duas..."
                className={fieldClass}
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="font-serif-caps mt-8 w-full rounded-xs border border-gold/60 bg-maroon px-8 py-4 text-[0.7rem] tracking-luxe text-primary-foreground uppercase transition-colors duration-500 hover:bg-wine focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:opacity-60"
            >
              {pending ? "Sending…" : "Send RSVP"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}