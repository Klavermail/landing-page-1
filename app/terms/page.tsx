import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `The terms governing use of the ${site.name} website.`,
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <LegalPage title="Terms" updated="16 September 2026">
      <p>
        These terms cover your use of this website. The work we do for clients is governed
        by a separate signed agreement — where the two differ, that agreement wins.
      </p>

      <h2>Using this site</h2>
      <p>
        You are welcome to read this site and book a call. Please do not attempt to
        disrupt it, scrape it at volume, or use it to send anything unlawful. We may
        restrict access if you do.
      </p>

      <h2>What&rsquo;s on this page is not a promise of results</h2>
      <p>
        The figures and case studies shown are outcomes achieved for specific brands under
        specific conditions. Email performance depends on your list, product, margin,
        offer and market — none of which we control. Nothing here is a guarantee that you
        will see the same numbers, and nothing here is financial advice.
      </p>
      <p>
        Any guarantee we offer is only binding once it is written into a signed agreement
        between us, on the terms set out there.
      </p>

      <h2>Booking a call</h2>
      <p>
        Booking a call costs nothing and commits neither of us to anything. We may decline
        to take on work, and you are free to walk away at any point before signing.
      </p>

      <h2>Our work and who owns it</h2>
      <p>
        For clients: work is built inside your own Klaviyo account, and the flows,
        templates, copy and strategy we produce for you are yours to keep, including after
        we stop working together. We keep the right to describe the work and its results
        in anonymised form unless we agree otherwise in writing.
      </p>

      <h2>This site&rsquo;s own content</h2>
      <p>
        The text, design, and images on this site belong to {site.name}. Please do not
        republish them as your own. Quoting a passage with credit and a link back is fine.
      </p>

      <h2>Liability</h2>
      <p>
        This website is provided as-is. We do not accept liability for loss arising from
        your use of it, or from reliance on information published here, to the extent the
        law allows. Nothing in these terms limits liability for fraud, death or personal
        injury caused by negligence, or anything else that cannot lawfully be excluded.
      </p>

      <h2>Links out</h2>
      <p>
        This site links to third-party services, including our scheduling provider. We are
        not responsible for their content or their handling of your data — their own terms
        and privacy policies apply.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. The date at the top of this page shows when they last
        changed, and the version published here is the one that applies.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
