import { Section } from 'astro-boilerplate-components';

const Comparison = () => (
  <Section>
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        How Small Wins Is Different
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        We're not trying to replace existing tools—we're filling a gap that shouldn't exist. 
        Here's how Small Wins approaches healing differently.
      </p>

      <div className="overflow-hidden rounded-lg bg-slate-800">
        <div className="grid md:grid-cols-3">
          {/* Traditional Productivity Apps */}
          <div className="border-r border-slate-700 p-6">
            <h3 className="mb-4 text-xl font-semibold text-red-400">
              Traditional Productivity Apps
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>• Built for people who are already functioning well</li>
              <li>• Focus on efficiency and optimization</li>
              <li>• Use guilt and shame as motivators</li>
              <li>• One-size-fits-all approach</li>
              <li>• Celebrate streaks and consistency</li>
              <li>• No understanding of trauma or mental health</li>
              <li>• Notifications designed to pressure</li>
            </ul>
          </div>

          {/* Therapy Apps */}
          <div className="border-r border-slate-700 p-6">
            <h3 className="mb-4 text-xl font-semibold text-yellow-400">
              Current Mental Health Apps
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>• Often focus on single techniques (meditation, CBT)</li>
              <li>• Limited personalization to individual struggles</li>
              <li>• Generic content not tailored to trauma</li>
              <li>• Subscription models that gate essential features</li>
              <li>• Clinical feel that can be intimidating</li>
              <li>• Limited crisis support integration</li>
              <li>• Privacy concerns with sensitive data</li>
            </ul>
          </div>

          {/* Small Wins Approach */}
          <div className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-green-400">
              Small Wins for Healing
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Built specifically for people in recovery</li>
              <li>• Focuses on emotional safety first</li>
              <li>• Uses compassion and validation as motivators</li>
              <li>• Adapts to your unique trauma and healing style</li>
              <li>• Celebrates any engagement, no matter how small</li>
              <li>• Trauma-informed AI with clinical oversight</li>
              <li>• Gentle check-ins designed to support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What We're NOT */}
      <div className="mt-12 rounded-lg bg-slate-800 p-8">
        <h3 className="mb-6 text-center text-2xl font-semibold text-cyan-400">
          What Small Wins Is NOT
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 font-semibold text-gray-100">❌ Not a replacement for therapy</h4>
            <p className="text-gray-400">
              We complement professional care, never replace it. We'll help you prepare for therapy sessions and practice skills between appointments.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-100">❌ Not a quick fix</h4>
            <p className="text-gray-400">
              Healing takes time, and we honor that reality. No promises of instant transformation or miraculous cures.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-100">❌ Not a productivity hack</h4>
            <p className="text-gray-400">
              We're not trying to make you more efficient. We're trying to help you survive, heal, and gradually rebuild.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-100">❌ Not one-size-fits-all</h4>
            <p className="text-gray-400">
              Every person's healing journey is unique. Our AI learns your patterns and respects your individual needs.
            </p>
          </div>
        </div>
      </div>

      {/* The Gap We Fill */}
      <div className="mt-12 text-center">
        <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            The Gap We're Filling
          </h3>
          <p className="mb-6 text-lg text-gray-300">
            "I needed something between crisis support and weekly therapy—a gentle companion for the daily struggle of rebuilding my life after trauma."
          </p>
          <p className="text-gray-400">
            Small Wins exists for the moments when you're not in crisis, but you're not thriving either. 
            For the overwhelming Tuesday afternoon, the sleepless 3 AM worry session, the days when even basic tasks feel impossible.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { Comparison };
