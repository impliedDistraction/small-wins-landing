import { Section } from 'astro-boilerplate-components';

const TrustSignals = () => (
  <Section>
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-100">
        Building Trust Through Transparency
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Mental Health Expertise */}
        <div className="text-center">
          <div className="mb-4 text-4xl text-cyan-400">👩‍⚕️</div>
          <h3 className="mb-2 font-semibold text-gray-100">
            Clinical Oversight
          </h3>
          <p className="text-sm text-gray-400">
            Trauma specialists and mental health professionals guide our development
          </p>
        </div>

        {/* Security First */}
        <div className="text-center">
          <div className="mb-4 text-4xl text-green-400">🔐</div>
          <h3 className="mb-2 font-semibold text-gray-100">
            Security First
          </h3>
          <p className="text-sm text-gray-400">
            Built with enterprise-grade security and privacy by design
          </p>
        </div>

        {/* Open Source Elements */}
        <div className="text-center">
          <div className="mb-4 text-4xl text-purple-400">🔍</div>
          <h3 className="mb-2 font-semibold text-gray-100">
            Transparent Development
          </h3>
          <p className="text-sm text-gray-400">
            Key security components will be open source for community review
          </p>
        </div>

        {/* Community Driven */}
        <div className="text-center">
          <div className="mb-4 text-4xl text-orange-400">🤝</div>
          <h3 className="mb-2 font-semibold text-gray-100">
            Community Driven
          </h3>
          <p className="text-sm text-gray-400">
            Every feature shaped by people with lived experience
          </p>
        </div>
      </div>

      {/* Quote from development philosophy */}
      <div className="mt-12 text-center">
        <div className="mx-auto max-w-3xl rounded-lg bg-slate-800 p-8">
          <blockquote className="text-lg italic text-gray-300">
            "We're not building another productivity app with AI slapped on top. We're creating a safe space where technology serves humanity's most vulnerable moments with dignity and care."
          </blockquote>
          <p className="mt-4 text-sm text-gray-500">
            — Development Philosophy, Small Wins for Healing
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { TrustSignals };
