"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-4 text-sm">
              Terms of Use Agreement
            </p>
            <h2 className="font-display font-semibold text-2xl text-foreground mb-8">HauteApp</h2>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-6 rounded-xl border border-border bg-card">
                <p className="text-foreground font-semibold leading-relaxed">
                  IMPORTANT NOTICE: READ THIS CAREFULLY; BY CREATING AN ACCOUNT, REGISTERING OR UTILIZING THE HAUTE SERVICE YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
                </p>
              </section>

              <section>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MODA MAESTRO LIMITED ("COMPANY", "WE", "US") RESERVES THE RIGHT TO UPDATE AND CHANGE THESE TERMS OF SERVICE WITHOUT NOTICE. VIOLATION OF ANY OF THE TERMS BELOW MAY RESULT IN THE TERMINATION OF YOUR ACCOUNT.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to HauteApp service, website or mobile application (collectively referred to as the "service", your use of the service is subject to these Terms of service and HauteApp's privacy policy (collectively referred to as "Terms of service" or "Agreement"). These terms of service are a legal agreement between you and Moda Maestro Limited, a Nigerian company, for use of the HauteApp service. "You", "Your", "Yourself", "Customer" refers to any individual who creates an account on the service or if the service is being used on behalf of an entity by an individual authorized to agree to such terms on behalf of such entity, then "you" refers to such entity. If you are utilizing this service on behalf of your employer, you represent and warrant that you have the authority to agree to these terms of service on its behalf. If you do not agree with the terms of this Agreement, do not use the service. The agreement would also be applicable to the use of the service on a trial basis. By using the service, you signify your irrevocable acceptance of this Agreement. The website as well as the mobile applications and any other downloadable software associated with the service are protected by copyright laws and international copyright treaties, as well as other intellectual property laws and treaties.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Your Use of HauteApp Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As part of HauteApp service, we provide downloadable client application on mobile platform ("the application") for your use in connecting to the Service. The application would require a compatible device for use. So long as you comply with these Terms, we grant you a limited, nonexclusive, nontransferable, revocable license to use the Application, solely to access the Service; provided however that this license does not constitute a sale of the Application or any copy thereof, and as between the Moda Maestro Limited and you.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Account Terms</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>You are responsible for maintaining security of your account and password. The company cannot be held liable for any loss or damage from your failure to comply with this security obligation.</li>
                  <li>You are responsible for ALL the content and activities that occurs under your account.</li>
                  <li>You may not use the service for any illegal purpose or to violate any laws in your jurisdiction (including but not limited to copyright laws).</li>
                  <li>You must provide your legal full name, a valid email address, and any other information requested in order to complete the signup process.</li>
                  <li>Your login details may only be used by one person i.e. a single login shared by more than one person is not permitted.</li>
                  <li>You must be human, accounts registered by 'bots' or other automated methods are not permitted.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">API Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may access the service data via the Application Programming Interface (API). Any use of the API, including use of the API through a third party product or service that accesses the service is bound by the terms of this agreement plus the following specific terms:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>You expressly understand and agree that the company shall not be liable for any damages or losses resulting from your use of the API or third party products or services that access the data via the API.</li>
                  <li>Abuse or excessively frequent requests to the service via API may lead to the temporary suspension of your account's access to the API. The Company, in its sole discretion, will determine abuse or excessive usage of the API. The company will make a reasonable attempt via email to warn the account owner prior to suspension.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Payment, Refunds, Upgrading and Downgrading Terms</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>The service is offered with a free plan with a few set features. If you need more than the free set features, you will only be able to continue with the service by paying in advance for the additional features. If you fail to pay for additional usage, your account will be frozen and inaccessible until payment is made.</li>
                  <li>For any upgrade or downgrade in the plan level, the new rate will be charged at the next billing cycle. There would be no prorating for downgrades in between billing cycles.</li>
                  <li>Downgrading your service may cause the loss of features or capacity of your account. The Company does not accept any liability for such loss.</li>
                  <li>All fees are exclusive of all taxes, levies or duties imposed by taxing authorities and you shall be responsible for payment of all such taxes, levies or duties, excluding only Nigerian (Federal or state) taxes. Where required, the company will collect those taxes on behalf of taxing authority and remit those taxes to taxing authorities.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Cancellation and Termination</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>You are solely responsible for proper canceling of your account. An email or phone request to cancel your account is not considered cancellation. You can cancel your account anytime by clicking on the Account link in the global navigation bar at the top of the screen.</li>
                  <li>All of your contents would be immediately inaccessible from the service upon cancellation. Within 30 days, all this content would be permanently deleted from all backups and logs. This information cannot be recovered once it has been permanently deleted.</li>
                  <li>If you cancel the service before the end of your current paid up month, your cancellation will take effect immediately, and you will not be charged again. But there would not be any prorating of unused time in the billing cycle.</li>
                  <li>The company, in its sole discretion, has the right to suspend or terminate your account and refuse any and all current or future use of the service for any reason at any time. Such termination of the service would result in the deactivation or deletion of your account or access to your account, and forfeiture and relinquishment of all content in your account. The company reserves the right to refuse service to anyone for any reason at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Modifications to the Service and Prices</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>The company reserves the rights at any time to modify or discontinue, temporarily or permanently any part of the service with or without notice.</li>
                  <li>Prices of all services are subject to change upon 30 days' notice from us. Such notice may be provided anytime by posting the charges to HauteApp site or service itself.</li>
                  <li>The company shall not be liable to you or any third party for any modification, price change, suspension or discontinuation of the service.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Copyright and Content Ownership</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>All contents posted on this service must comply with the copyright law.</li>
                  <li>We claim no intellectual property rights over the material you provide to the service. All materials uploaded remain yours.</li>
                  <li>The company does not prescreen content, but reserves the right (but not the obligation) in their sole discretion to refuse or remove any content that is available via the service.</li>
                  <li>The look and feel of the service is copyright © Moda Maestro Limited. All rights reserved. You may not duplicate, copy or reuse any portion of the HTML, CSS, JavaScript, or visual design elements without express written permission from the company.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">General Conditions</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>Your use of the service is at your sole risk. The service is provided on an 'as is' and 'as available' basis.</li>
                  <li>Technical support would only be provided via email.</li>
                  <li>You understand that the company uses third party vendors and hosting partners to provide the necessary hardware, software, networking, storage and related technology required to run the service.</li>
                  <li>You must not modify, adapt or hack the service.</li>
                  <li>You must not modify another website so as to falsely imply that it is associated with the service or the company.</li>
                  <li>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service, or access the service without the express written permission of the company.</li>
                  <li>We may, but have no obligation to, remove content and accounts that we determine in our sole discretion are unlawful or violate any party's intellectual property or the Terms of Service.</li>
                  <li>Verbal, physical, written or other abuse (including threats of abuse or retribution) of any service customer, company employee or officer will result in immediate account termination.</li>
                  <li>You understand that the technical processing and transmission of the service, including your content, may be transferred unencrypted and involve (i) transmission over various networks; and (ii) changes to conform and adapt to technical requirements of connecting networks or devices.</li>
                  <li>We reserve the right to temporarily disable your account if your usage significantly exceeds the average usage of other service customers.</li>
                  <li>The company does not warrant that (i) the service would meet your specific requirements, (ii) the service would be uninterrupted, timely, secure or error free, (iii) the results obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, information, services or other material purchased or obtained through the service will meet your expectations, and (v) any errors in the service will be corrected.</li>
                  <li>You expressly understand and agree that the company shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data or other intangible losses.</li>
                  <li>Questions about the Terms of Service should be sent to <a href="mailto:support@hauteapps.com" className="text-primary hover:underline">support@hauteapps.com</a>.</li>
                  <li>Any new features that augment or enhance the current service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the service after such changes shall constitute your consent to such changes.</li>
                </ul>
              </section>

              {/* Privacy Policy Section */}
              <section className="pt-8 border-t border-border">
                <h2 className="font-display font-bold text-3xl text-foreground mb-6">HauteApp Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The privacy of your data is very essential to us. We'll only ever access your account to help with a problem or kill a bug. We'll never open any uploaded files unless you ask us to. We log all access to all accounts by IP address, so we can always verify that no unauthorized access has happened for as long as the logs are kept.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Identity and Access</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you sign up for HauteApp, we ask for your name, email address and a unique password. That's just so that you can personalize your new account, and we can send you invoices, updates or other relevant information. We'll never sell your personal info to third parties, and we won't use your name in any marketing statements without your permission either.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you write HauteApp with a question or ask for help, we'll keep that correspondence and the email address, for future reference. When you browse our marketing pages, we'll track that for statistical purposes (like conversion rates and to test new pages and new app designs). We also store any information you volunteer, like surveys, for as long as it makes sense.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2 font-semibold text-foreground">
                  The only time we'll ever share your information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>To provide products or services you have requested with your permission.</li>
                  <li>To investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of our Terms of Service, or as otherwise required by law.</li>
                  <li>If HauteApp is acquired or merged with another company — we however don't plan on doing that, but if we do, we'll notify you well before any info about you is transferred and becomes subject to a different privacy policy.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Law Enforcement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  HauteApp won't hand your data over to law enforcement unless a court order says we have to. We flat-out reject requests from local and federal law enforcement when they seek data without a court order. And unless we're legally prevented from it, we'll always inform you when such requests are made.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Encryption</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All data is encrypted via SSL/TLS when transmitted from our servers to your browser. The database backups are also encrypted. Data isn't encrypted while it's live in our database (since it needs to be ready to send to you when you need it), but we go to great lengths to secure your data at rest.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Deleted Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you cancel your account, we'll ensure that nothing is stored on our servers past 30 days. Anything you delete on your account while it's active will also be purged within 30 days (up until then it's available in the trash can).
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Changes & Questions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  HauteApp may update this policy once in a blue moon — we'll notify you about significant changes by emailing the account owner or by placing a prominent notice on our site. You can access, change or delete your personal information at any time by contacting{" "}
                  <a href="mailto:support@hauteapps.com" className="text-primary hover:underline">support@HauteApp.com</a>.
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

export default PrivacyPage;
