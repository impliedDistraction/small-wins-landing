import { Section } from 'astro-boilerplate-components';

const Features = () => (
  <Section>
    <div id="features" className="mx-auto max-w-6xl">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-100">
        How Small Wins Works
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 text-3xl text-cyan-400">🤖</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            AI-Assisted Goal Creation
          </h3>
          <p className="text-gray-400">
            Our AI understands your emotional state and helps break overwhelming
            tasks into manageable, healing-focused steps that honor where you
            are right now. No pressure to be "productive"—just gentle progress.
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 text-3xl text-cyan-400">💝</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Emotional Check-ins
          </h3>
          <p className="text-gray-400">
            Regular, gentle prompts help you process feelings and track your
            emotional journey alongside your practical progress—because healing
            isn't just about doing, it's about feeling and being too.
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 text-3xl text-cyan-400">🌱</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Compassionate Encouragement
          </h3>
          <p className="text-gray-400">
            Every interaction is designed with trauma-informed care. No shame,
            no pressure, no toxic positivity—just gentle guidance that meets you exactly where you
            are and celebrates your courage to keep going.
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 text-3xl text-cyan-400">📝</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Reflective Journaling
          </h3>
          <p className="text-gray-400">
            Process your thoughts and experiences through guided prompts that
            help you understand your patterns and celebrate your progress.
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 text-3xl text-cyan-400">🔗</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Habit Stacking
          </h3>
          <p className="text-gray-400">
            Build sustainable routines by connecting new healing practices to
            existing habits, making growth feel natural rather than forced.
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 text-3xl text-cyan-400">📱</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Always in Your Pocket
          </h3>
          <p className="text-gray-400">
            A mobile-first design means your gentle companion is always there
            when you need support, encouragement, or just a reminder that you're
            not alone.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { Features };
