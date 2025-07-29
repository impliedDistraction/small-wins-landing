import { Section } from 'astro-boilerplate-components';

const CrisisSupport = () => (
  <Section>
    <div className="mx-auto max-w-4xl">
      <div className="rounded-lg bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 p-8">
        <div className="text-center">
          <div className="mb-4 text-4xl">🆘</div>
          <h2 className="mb-4 text-2xl font-bold text-gray-100">
            If You're in Crisis Right Now
          </h2>
          <p className="mb-6 text-gray-300">
            Small Wins is being built to support healing, but if you're experiencing thoughts of self-harm or suicide, please reach out for immediate human support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-slate-800 p-6">
            <h3 className="mb-3 text-lg font-semibold text-red-400">
              🇺🇸 United States
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>988 Suicide & Crisis Lifeline</strong></p>
              <p>Call or text: <a href="tel:988" className="text-cyan-400 hover:underline">988</a></p>
              <p>Chat: <a href="https://988lifeline.org/chat/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">988lifeline.org/chat</a></p>
              <p className="text-sm text-gray-400">Free, confidential, 24/7</p>
            </div>
          </div>

          <div className="rounded-lg bg-slate-800 p-6">
            <h3 className="mb-3 text-lg font-semibold text-red-400">
              🌍 International
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Crisis Text Line</strong></p>
              <p>Text HOME to: <a href="sms:741741" className="text-cyan-400 hover:underline">741741</a></p>
              <p><strong>International Association for Suicide Prevention</strong></p>
              <p><a href="https://www.iasp.info/resources/Crisis_Centres/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Find local crisis centers</a></p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            💙 When Small Wins launches, it will automatically connect you to these resources if needed. Your safety always comes first.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { CrisisSupport };
