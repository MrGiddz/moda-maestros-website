"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-max px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Moda Maestro ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients who access or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Moda Maestro provides custom software development, mobile application development, cloud solutions, AI and automation services, and related technology consulting. Our services are tailored to meet the specific needs of each client and are governed by individual project agreements in addition to these general terms.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information required for project execution</li>
                  <li>Respond to requests for feedback, approvals, and information in a timely manner</li>
                  <li>Make payments according to the agreed-upon schedule</li>
                  <li>Ensure you have the necessary rights to any content or materials you provide</li>
                  <li>Not use our services for any unlawful or prohibited purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upon full payment, you will own all rights to the custom code, designs, and deliverables created specifically for your project. However, we retain ownership of:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Pre-existing tools, frameworks, and code libraries used in development</li>
                  <li>General knowledge, techniques, and methodologies</li>
                  <li>Any open-source components integrated into the project (subject to their respective licenses)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We may showcase completed projects in our portfolio unless otherwise agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms are specified in individual project proposals and contracts. General terms include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>A deposit is required before project commencement (typically 30-50%)</li>
                  <li>Milestone payments are due upon completion of agreed deliverables</li>
                  <li>Final payment is due upon project completion and before final delivery</li>
                  <li>Late payments may incur interest charges and project suspension</li>
                  <li>All prices are quoted in USD unless otherwise specified</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">6. Project Timeline and Scope</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Project timelines are estimates based on the agreed scope. Delays caused by client-side factors (delayed feedback, scope changes, etc.) may extend the timeline. Any changes to the project scope must be documented in writing and may result in adjusted timelines and costs.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We treat all client information as confidential. We will not disclose your proprietary information, business strategies, or technical specifications to third parties without your consent, except as required by law or as necessary to perform our services (e.g., working with subcontractors who are bound by similar confidentiality obligations).
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">8. Warranty and Support</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We provide a warranty period (typically 30-90 days) after project delivery during which we will fix bugs and defects at no additional cost. Extended support and maintenance services are available under separate agreements. We do not guarantee that our services will meet all of your expectations or that the operation of any software will be uninterrupted or error-free.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Moda Maestro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our services. Our total liability shall not exceed the total amount paid by you for the specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate a project agreement with written notice as specified in the project contract. Upon termination, you are responsible for payment of all work completed to date. We will provide all deliverables completed up to the termination date upon receipt of payment.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Moda Maestro is registered, without regard to its conflict of law provisions. Any disputes shall be resolved through good-faith negotiation, and if necessary, binding arbitration.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. For active projects, the terms in effect at the time of contract signing will apply unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-foreground mt-4">
                  <strong>Moda Maestro</strong><br />
                  Email: legal@modamaestro.com<br />
                  Website: www.modamaestro.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
