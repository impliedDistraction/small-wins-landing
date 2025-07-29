import { Section } from 'astro-boilerplate-components';

const WhyItMatters = () => (
  <Section>
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        Why Small Wins Make a Big Difference
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        When you're struggling, traditional advice like "just think positive" or "make a plan" falls flat. 
        Here's why small, trauma-informed steps actually work for healing.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Builds Neural Pathways */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-green-400">🧠</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Rebuilds Your Belief in Yourself
          </h3>
          <p className="text-gray-400">
            Small wins create new neural pathways that say "I am capable" instead of reinforcing the 
            trauma response of "I can't handle this." Each tiny success rewires your brain for resilience.
          </p>
        </div>

        {/* Respects Your Nervous System */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-cyan-400">⚡</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Works With Your Nervous System
          </h3>
          <p className="text-gray-400">
            When you're overwhelmed, your brain literally can't handle big goals. Small wins activate 
            your reward system without triggering fight-or-flight, making progress feel safe instead of scary.
          </p>
        </div>

        {/* Breaks Shame Cycles */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-purple-400">💜</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Breaks Shame and Self-Criticism
          </h3>
          <p className="text-gray-400">
            Traditional goal-setting often leads to self-criticism when you "fail." Small wins are designed 
            to be achievable even on your worst days, interrupting the shame spiral that keeps you stuck.
          </p>
        </div>

        {/* Creates Real Momentum */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-orange-400">🔥</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Creates Genuine Momentum
          </h3>
          <p className="text-gray-400">
            Unlike forced motivation, small wins build real momentum because they're based on what actually 
            feels manageable for you today. This creates sustainable change instead of another thing to fail at.
          </p>
        </div>

        {/* Honors Your Reality */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-blue-400">🌊</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Honors Your Reality
          </h3>
          <p className="text-gray-400">
            Bad days aren't failures—they're part of the human experience. Small wins adapt to your capacity, 
            celebrating survival on hard days and growth on good ones, without judgment.
          </p>
        </div>

        {/* Builds Long-term Healing */}
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="mb-4 text-3xl text-pink-400">🌱</div>
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Builds Long-term Healing
          </h3>
          <p className="text-gray-400">
            Quick fixes don't work for trauma and loss. Small wins focus on building the emotional skills 
            and self-compassion that support you through life's inevitable challenges.
          </p>
        </div>
      </div>

      {/* Research-backed callout */}
      <div className="mt-12 text-center">
        <div className="mx-auto max-w-3xl rounded-lg bg-slate-800 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            Grounded in Research
          </h3>
          <p className="mb-6 text-lg text-gray-300">
            This approach isn't just feel-good theory. It's based on decades of research in trauma psychology, 
            neuroscience, and behavioral change—specifically designed for people whose nervous systems are overwhelmed.
          </p>
          <div className="grid gap-4 text-sm text-gray-400 md:grid-cols-3">
            <div>
              <h4 className="mb-2 font-semibold text-gray-200">Trauma-Informed Care</h4>
              <p>Recognizes how trauma affects the brain and body</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-200">Positive Psychology</h4>
              <p>Focuses on building strengths, not just fixing problems</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-200">Behavioral Science</h4>
              <p>Uses proven methods for sustainable habit formation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { WhyItMatters };
