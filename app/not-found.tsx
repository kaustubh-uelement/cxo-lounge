import { ButtonLink, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-3">This page isn&apos;t on the calendar</h1>
      <p className="lead mx-auto mt-4 max-w-md">The page you&apos;re looking for has moved or doesn&apos;t exist.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/" arrow>Home</ButtonLink>
        <ButtonLink href="/events" variant="secondary">See events</ButtonLink>
      </div>
    </Section>
  );
}
