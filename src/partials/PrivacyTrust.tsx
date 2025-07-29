import { Section } from 'astro-boilerplate-components';

const PrivacyTrust = () => (
  <Section>
    <div id="privacy-trust" className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        Your Safety Is Our Foundation
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        When you're healing, vulnerability isn't weakness—it's courage. We're building Small Wins to be a completely safe space where you can be honest about your struggles without fear of judgment, data misuse, or having your deepest thoughts analyzed for profit.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Data Security */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-green-400">🔒</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            End-to-End Encryption
          </h3>
          <p className="text-gray-400">
            Your conversations, reflections, and personal data are encrypted both in transit and at rest. Even we can't read your private thoughts—only you can.
          </p>
        </div>

        {/* Local Processing */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-green-400">📱</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Local AI Processing
          </h3>
          <p className="text-gray-400">
            Sensitive AI processing happens on your device whenever possible. Your most vulnerable moments stay with you, not on our servers. When you share your deepest struggles, they remain private.
          </p>
        </div>

        {/* Vulnerable Data Protection */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-green-400">💭</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Safe Space for Honesty
          </h3>
          <p className="text-gray-400">
            Share your real thoughts, fears, and struggles without worry. Our system is designed specifically for vulnerable moments—your honesty is protected, not exploited.
          </p>
        </div>

        {/* No Data Selling */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-green-400">🚫</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Zero Data Monetization
          </h3>
          <p className="text-gray-400">
            We will never sell your data, share it with advertisers, or use your personal struggles for profit. Period.
          </p>
        </div>

        {/* Trauma-Informed AI */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-cyan-400">🤖</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Trauma-Informed AI
          </h3>
          <p className="text-gray-400">
            Our AI is trained on trauma-informed principles. It won't shame you for struggling or push you beyond your capacity. It's designed to support, not pressure.
          </p>
        </div>

        {/* Gentle Correction */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-cyan-400">💝</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Compassionate Guidance
          </h3>
          <p className="text-gray-400">
            When unhelpful patterns emerge, our AI offers gentle, research-backed alternatives without judgment—helping you break cycles with kindness.
          </p>
        </div>

        {/* Crisis Resources */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-red-400">🆘</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Crisis Support Connection
          </h3>
          <p className="text-gray-400">
            If our AI detects crisis language, it immediately connects you to professional resources—because some moments need human support.
          </p>
        </div>
      </div>

      {/* Trust Promise */}
      <div className="mt-12 text-center">
        <div className="mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            Our Sacred Promise About Your Vulnerable Data
          </h3>
          <p className="mb-6 text-lg text-gray-300">
            "We understand that when you're healing, trust isn't given lightly. When you share your struggles, fears, and painful memories with our AI, that's sacred data. We protect it with the same care we'd want for our own most vulnerable moments."
          </p>
          <div className="grid gap-4 text-sm text-gray-400 md:grid-cols-2">
            <div className="text-left">
              <h4 className="mb-2 font-semibold text-gray-200">Technical Safeguards:</h4>
              <ul className="space-y-1">
                <li>• End-to-end encryption for vulnerable conversations</li>
                <li>• Zero-knowledge architecture (we can't see your private thoughts)</li>
                <li>• Local processing for crisis moments and deep sharing</li>
                <li>• SOC 2 Type II compliance with trauma-specific protections</li>
                <li>• Regular security audits by mental health-aware specialists</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="mb-2 font-semibold text-gray-200">Emotional Safeguards:</h4>
              <ul className="space-y-1">
                <li>• AI trained never to shame or judge your struggles</li>
                <li>• Trauma-informed responses to vulnerable sharing</li>
                <li>• Gentle cycle-breaking, never harsh confrontation</li>
                <li>• Cultural sensitivity for diverse healing approaches</li>
                <li>• Mental health experts guide every interaction model</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Future Plans */}
      <div className="mt-8 text-center">
        <div className="mx-auto max-w-3xl rounded-lg bg-slate-800 p-6">
          <h4 className="mb-3 text-xl font-semibold text-gray-100">
            Safe Vulnerability: Honesty Without Fear
          </h4>
          <p className="mb-4 text-gray-400">
            Healing requires honesty about destructive patterns and painful truths. Our AI is trained to create space for this vulnerability while offering gentle, research-backed guidance to help you break cycles—never through shame, always through compassion.
          </p>
          <div className="grid gap-4 text-sm text-gray-400 md:grid-cols-2">
            <div>
              <h5 className="mb-2 font-semibold text-cyan-400">You can safely share:</h5>
              <ul className="space-y-1">
                <li>• Destructive thought patterns</li>
                <li>• Self-harm ideation (with immediate support)</li>
                <li>• Addiction struggles and relapses</li>
                <li>• Trauma memories and triggers</li>
                <li>• Shame, guilt, and painful emotions</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-cyan-400">Our AI will never:</h5>
              <ul className="space-y-1">
                <li>• Judge you for your struggles</li>
                <li>• Use shame to motivate change</li>
                <li>• Share your data with anyone</li>
                <li>• Pressure you beyond your capacity</li>
                <li>• Make you feel broken or wrong</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Future Plans */}
      <div className="mt-8 text-center">
        <div className="mx-auto max-w-2xl rounded-lg bg-slate-800 p-6">
          <h4 className="mb-3 text-xl font-semibold text-gray-100">
            Looking Ahead: Even More Security
          </h4>
          <p className="mb-4 text-gray-400">
            We're actively researching fully on-device AI models and zero-knowledge architectures to make your vulnerable sharing even more secure. Your healing journey should be yours alone.
          </p>
          <a
            href="mailto:security@smallwinshealing.com"
            className="inline-block text-cyan-400 hover:underline"
          >
            Questions about our security practices?
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { PrivacyTrust };
