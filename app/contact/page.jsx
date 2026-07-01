import { MessageSquareText } from "lucide-react";
import { PageHero, PageShell } from "../../components/InnerPage";
import ContactForm from "./ContactForm";
export { contactMetadata as metadata } from "../../lib/pageMetadata";

export default function Contact() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Let's build something precise." icon={MessageSquareText}>
        Tell us your goal, timeline, and what already exists. We can help clarify the rest.
      </PageHero>
      <ContactForm />
    </PageShell>
  );
}
