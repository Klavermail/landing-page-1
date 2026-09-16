import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="16 September 2026">
      <p>
        This policy explains what information {site.name} collects when you use this
        website or work with us, why we collect it, and what control you have over it.
        We keep it deliberately short and specific.
      </p>

      <h2>Who we are</h2>
      <p>
        {site.name} is an email marketing agency working with ecommerce brands. For the
        purposes of data protection law we are the data controller for information
        collected through this website. You can reach us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Booking details.</strong> When you book a call, our scheduling provider
          collects your name, email address, the time you chose and anything you type
          into the booking form.
        </li>
        <li>
          <strong>Anything you send us.</strong> If you email us, we hold that
          correspondence so we can reply and keep a record of what was agreed.
        </li>
        <li>
          <strong>Basic usage data.</strong> Our hosting provider logs standard technical
          information — IP address, browser type, pages requested — to serve the site and
          protect it from abuse.
        </li>
      </ul>
      <p>
        We do not ask for payment card details through this website, and we do not
        knowingly collect information from anyone under 16.
      </p>

      <h2>Why we use it</h2>
      <ul>
        <li>To respond to you and hold the call you booked.</li>
        <li>To provide our services if you become a client, and to invoice for them.</li>
        <li>To keep the website running, secure and reasonably fast.</li>
        <li>To meet our legal and accounting obligations.</li>
      </ul>
      <p>
        Our lawful basis is either your consent, our legitimate interest in replying to an
        enquiry you made, or performance of a contract once you are a client.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We do not sell your information. We share it only with the providers needed to run
        the business — currently our scheduling provider, our website host, and our email
        and accounting tools. Each processes data on our instructions under its own
        agreement with us.
      </p>
      <p>
        If you become a client, we work inside <strong>your</strong> Klaviyo account. Your
        customer data stays in your account and under your control; we act on your
        instructions and do not copy it elsewhere.
      </p>

      <h2>Cookies</h2>
      <p>
        This site sets no advertising or tracking cookies of its own. Our scheduling
        provider sets cookies inside its booking widget so it can remember your session.
        You can block cookies in your browser settings; the booking widget may not work
        correctly if you do.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiries and booking records are kept for up to two years, so we have context if
        you come back to us. Client records are kept for as long as we work together and
        for seven years afterwards, which is what tax and accounting rules require. You
        can ask us to delete anything we are not legally required to keep.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access the information we
        hold about you, correct it, delete it, object to how we use it, or receive a copy
        in a portable format. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within 30
        days. You will never be charged for making a request, and we will not treat you
        differently for making one.
      </p>
      <p>
        If you are in the UK or EU and you are not satisfied with our response, you can
        complain to your national data protection authority.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy we will update the date at the top of this page. Material
        changes affecting existing clients will be communicated directly.
      </p>
    </LegalPage>
  );
}
