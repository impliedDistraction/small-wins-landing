import { Section } from 'astro-boilerplate-components';

const BenefitsSummary = () => (
  <Section>
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        What You Get with Small Wins
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        More than just another app—a complete support system designed specifically for the reality of healing from trauma, loss, and depression.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Daily Emotional Support */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
          <div className="mb-4 text-4xl">💙</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">Daily Emotional Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Gentle daily check-ins that honor your reality</li>
            <li>• AI companion trained in trauma-informed care</li>
            <li>• Emotional validation without toxic positivity</li>
            <li>• Support for overwhelm, grief, and difficult emotions</li>
          </ul>
        </div>

        {/* Personalized Goal Breaking */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
          <div className="mb-4 text-4xl">🎯</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">Smart Goal Breaking</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• AI breaks overwhelming tasks into manageable steps</li>
            <li>• Adapts to your energy levels and capacity</li>
            <li>• No pressure to maintain streaks or be consistent</li>
            <li>• Celebrates progress, no matter how small</li>
          </ul>
        </div>

        {/* Crisis Safety Net */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
          <div className="mb-4 text-4xl">🆘</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">Crisis Safety Net</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Automatic detection of crisis language</li>
            <li>• Immediate connection to professional resources</li>
            <li>• Emergency contact system for support people</li>
            <li>• Always available, never judgment</li>
          </ul>
        </div>

        {/* Privacy Protection */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
          <div className="mb-4 text-4xl">🔒</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">Complete Privacy</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• End-to-end encryption for vulnerable conversations</li>
            <li>• Local processing keeps sensitive data on your device</li>
            <li>• Zero-knowledge architecture protects your thoughts</li>
            <li>• Never sold, shared, or used for profit</li>
          </ul>
        </div>

        {/* Healing Community */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
          <div className="mb-4 text-4xl">🤝</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">Healing Community</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Connect with others who truly understand</li>
            <li>• Safe spaces for sharing struggles and victories</li>
            <li>• Peer support without pressure or competition</li>
            <li>• Moderated by trauma-informed community guides</li>
          </ul>
        </div>

        {/* Professional Integration */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
          <div className="mb-4 text-4xl">👩‍⚕️</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">Therapy Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Helps organize thoughts between therapy sessions</li>
            <li>• Tracks patterns to discuss with your therapist</li>
            <li>• Bridges the gap when professional support isn't available</li>
            <li>• Complements, never replaces, professional care</li>
          </ul>
        </div>
      </div>

      {/* Value Statement */}
      <div className="mt-12 text-center">
        <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            Built for Your Hardest Days
          </h3>
          <p className="text-lg text-gray-300">
            Small Wins isn't just another wellness app. It's a lifeline designed specifically for moments when everything feels broken, when hope feels impossible, and when you need gentle support to take the next small step forward.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { BenefitsSummary };
