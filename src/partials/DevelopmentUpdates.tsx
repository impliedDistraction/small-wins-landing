import { Section } from 'astro-boilerplate-components';

const DevelopmentUpdates = () => (
  <Section>
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        Building in the Open
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        We believe in transparency throughout our development process. Here's what we're working on and thinking about as we build Small Wins for Healing.
      </p>

      <div className="space-y-6">
        {/* Current Focus */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-3 flex items-center">
            <div className="mr-3 h-3 w-3 rounded-full bg-green-400"></div>
            <h3 className="text-xl font-semibold text-green-400">Currently Working On</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Trauma-informed AI training with mental health professionals</li>
            <li>• Zero-knowledge encryption architecture for maximum privacy</li>
            <li>• Crisis detection and safety protocols</li>
            <li>• Accessibility features for users with disabilities</li>
          </ul>
        </div>

        {/* Research Phase */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-3 flex items-center">
            <div className="mr-3 h-3 w-3 rounded-full bg-cyan-400"></div>
            <h3 className="text-xl font-semibold text-cyan-400">Research & Planning</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Partnerships with trauma recovery organizations</li>
            <li>• Evidence-based small wins methodology validation</li>
            <li>• Inclusive design for diverse healing approaches</li>
            <li>• Sustainable funding model that prioritizes access over profit</li>
          </ul>
        </div>

        {/* Community Input */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-3 flex items-center">
            <div className="mr-3 h-3 w-3 rounded-full bg-purple-400"></div>
            <h3 className="text-xl font-semibold text-purple-400">Shaped by Community</h3>
          </div>
          <p className="mb-3 text-gray-300">
            Every feature decision is influenced by feedback from people with lived experience:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>• Trauma survivors sharing what they actually need in dark moments</li>
            <li>• Mental health professionals providing clinical guidance</li>
            <li>• Accessibility advocates ensuring inclusive design</li>
            <li>• Cultural consultants helping us avoid harmful assumptions</li>
          </ul>
        </div>

        {/* Transparency Commitment */}
        <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Our Commitment to Transparency
          </h3>
          <p className="mb-4 text-gray-300">
            We'll continue sharing our development journey, including challenges, decisions, and lessons learned. 
            This isn't just an app—it's a mission to transform how technology supports human healing.
          </p>
          <div className="grid gap-4 text-sm text-gray-400 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-cyan-400">What we'll share:</h4>
              <ul className="space-y-1">
                <li>• Development milestones and setbacks</li>
                <li>• Research findings and methodology</li>
                <li>• Security and privacy decisions</li>
                <li>• Community feedback integration</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-cyan-400">What we won't share:</h4>
              <ul className="space-y-1">
                <li>• Individual user data or feedback</li>
                <li>• Specific security implementation details</li>
                <li>• Personal information from beta testers</li>
                <li>• Anything that could compromise safety</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Updates Signup */}
      <div className="mt-8 text-center">
        <div className="rounded-lg bg-slate-800 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-100">
            Stay Updated on Our Progress
          </h3>
          <p className="mb-4 text-gray-400">
            Get monthly development updates, research insights, and early access to new features.
          </p>
          <a
            href="#early-access"
            className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            Join Early Access Community
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { DevelopmentUpdates };
