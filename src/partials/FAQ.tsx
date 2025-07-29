import { Section } from 'astro-boilerplate-components';

const FAQ = () => (
  <Section>
    <div id="faq" className="mx-auto max-w-4xl">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-100">
        Questions You Might Have
      </h2>

      <div className="space-y-8">
        {/* Is this safe for crisis situations? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            Is this safe to use during a mental health crisis?
          </h3>
          <p className="text-gray-300">
            Small Wins is designed to support daily healing and gradual recovery, but it's not a replacement for crisis intervention. If you're experiencing thoughts of self-harm or suicide, the app will immediately connect you to professional crisis resources like the 988 Suicide & Crisis Lifeline. We always prioritize your immediate safety over any app features.
          </p>
        </div>

        {/* How is this different from therapy? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            How is this different from therapy or counseling?
          </h3>
          <p className="text-gray-300">
            Small Wins is a supportive tool that works alongside professional care, not instead of it. Think of it as a gentle companion that helps you practice healing skills between therapy sessions, break down overwhelming tasks, and track your emotional patterns. We encourage users to work with mental health professionals and can help you prepare for appointments by organizing your thoughts and progress.
          </p>
        </div>

        {/* What if I can't afford therapy? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            What if I can't access or afford traditional therapy?
          </h3>
          <p className="text-gray-300">
            We understand that mental healthcare isn't equally accessible to everyone. Small Wins is designed to provide trauma-informed support for those who need it most. We're working on grant funding to offer free access to underserved communities, and the app includes resources for finding affordable mental health services in your area.
          </p>
        </div>

        {/* Will AI judge me? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            Will the AI judge me or make me feel worse about my struggles?
          </h3>
          <p className="text-gray-300">
            Absolutely not. Our AI is specifically trained on trauma-informed principles and designed to respond with compassion, not judgment. It won't shame you for bad days, relapses, or destructive patterns. Instead, it offers gentle perspective and research-backed suggestions while always validating your experience. If you ever feel judged by an interaction, please let us know immediately—that's a bug, not a feature.
          </p>
        </div>

        {/* What about my privacy? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            What happens to my personal information and vulnerable sharing?
          </h3>
          <p className="text-gray-300">
            Your vulnerability is sacred to us. We use end-to-end encryption for sensitive conversations, process as much as possible locally on your device, and operate under a zero-knowledge architecture where even we can't read your private thoughts. We will never sell your data, share it with advertisers, or use your struggles for profit. You own your healing journey completely.
          </p>
        </div>

        {/* What if I'm having a bad day? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            What if I'm having a really bad day and can't do anything?
          </h3>
          <p className="text-gray-300">
            Bad days are part of healing, not failures. Small Wins adjusts to your capacity—if you're overwhelmed, it might suggest taking three deep breaths or just acknowledging that today is hard. There are no streaks to break or guilt trips about productivity. The app celebrates any engagement, even if it's just opening it to say you're struggling.
          </p>
        </div>

        {/* How much does it cost? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            How much will this cost?
          </h3>
          <p className="text-gray-300">
            We're still finalizing pricing, but our commitment is to make healing support accessible. We're exploring a model with a free tier for basic features and a gentle paid tier for advanced AI coaching. Financial hardship will never be a barrier—we're building assistance programs and working with foundations to ensure anyone who needs Small Wins can access it.
          </p>
        </div>

        {/* When will it be available? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            When will Small Wins be available?
          </h3>
          <p className="text-gray-300">
            We're currently in development with early access beginning in late 2025. We're taking time to get this right because we understand how important it is to build something truly safe and effective for vulnerable moments. Early access members will help shape the final product before our broader launch.
          </p>
        </div>

        {/* What devices will it work on? */}
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            What devices will Small Wins work on?
          </h3>
          <p className="text-gray-300">
            Small Wins is being built mobile-first for iOS and Android, because we want it accessible in your pocket when you need support most. We're also planning a web version for those who prefer typing on a computer. The app will sync securely across your devices while keeping your data private.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="rounded-lg bg-slate-700 p-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-100">
            Have a different question?
          </h3>
          <p className="mb-4 text-gray-400">
            We believe in radical transparency and want to address any concerns you might have.
          </p>
          <a
            href="mailto:hello@smallwinshealing.com"
            className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            Ask Us Anything
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { FAQ };
