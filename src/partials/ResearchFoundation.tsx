import { Section } from 'astro-boilerplate-components';

const ResearchFoundation = () => (
  <Section>
    <div id="research" className="mx-auto max-w-6xl">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-100">
        Built on Proven Science
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        Small Wins for Healing isn't just feel-good advice—it's built on decades of research in neuroscience, trauma recovery, and behavioral psychology. Every feature is grounded in evidence-based approaches that actually work.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Trauma-Informed Care */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-3 h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-400 text-xl">🧠</span>
            </div>
            <h3 className="text-lg font-semibold text-cyan-400">
              Trauma-Informed Care Principles
            </h3>
          </div>
          <p className="mb-4 text-gray-300">
            Our AI responses follow evidence-based trauma-informed care guidelines developed by SAMHSA and leading trauma specialists.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Key Research:</strong></p>
            <ul className="space-y-1">
              <li>• Van der Kolk (2014) - The Body Keeps the Score</li>
              <li>• Herman (1992) - Trauma and Recovery</li>
              <li>• SAMHSA's 6 Principles of Trauma-Informed Care</li>
            </ul>
          </div>
        </div>

        {/* Small Steps Psychology */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-3 h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-xl">🌱</span>
            </div>
            <h3 className="text-lg font-semibold text-green-400">
              Micro-Progress Psychology
            </h3>
          </div>
          <p className="mb-4 text-gray-300">
            Breaking overwhelming tasks into tiny steps leverages neuroplasticity and builds self-efficacy through repeated small successes.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Key Research:</strong></p>
            <ul className="space-y-1">
              <li>• Bandura (1977) - Self-Efficacy Theory</li>
              <li>• Fogg (2019) - Tiny Habits methodology</li>
              <li>• Duckworth (2016) - Grit and incremental progress</li>
            </ul>
          </div>
        </div>

        {/* Neuroplasticity */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-3 h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-purple-400 text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-purple-400">
              Neuroplasticity & Healing
            </h3>
          </div>
          <p className="mb-4 text-gray-300">
            Repeated small positive actions literally rewire the brain, creating new neural pathways that support resilience and emotional regulation.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Key Research:</strong></p>
            <ul className="space-y-1">
              <li>• Doidge (2007) - The Brain That Changes Itself</li>
              <li>• Davidson & Lutz (2008) - Mindfulness & brain changes</li>
              <li>• Siegel (2010) - Mindsight and neural integration</li>
            </ul>
          </div>
        </div>

        {/* Compassion Science */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-3 h-12 w-12 rounded-full bg-pink-500/20 flex items-center justify-center">
              <span className="text-pink-400 text-xl">💝</span>
            </div>
            <h3 className="text-lg font-semibold text-pink-400">
              Self-Compassion Research
            </h3>
          </div>
          <p className="mb-4 text-gray-300">
            Self-critical internal dialogue blocks healing. Our AI promotes self-compassion, which research shows is more effective than self-criticism for motivation and change.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Key Research:</strong></p>
            <ul className="space-y-1">
              <li>• Neff (2003) - Self-compassion vs. self-esteem</li>
              <li>• Gilbert (2009) - Compassion-Focused Therapy</li>
              <li>• Breines & Chen (2012) - Self-compassion and motivation</li>
            </ul>
          </div>
        </div>

        {/* Behavioral Activation */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-3 h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
              <span className="text-orange-400 text-xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-orange-400">
              Behavioral Activation
            </h3>
          </div>
          <p className="mb-4 text-gray-300">
            Depression and trauma often lead to behavioral shutdown. Small, manageable actions help rebuild the connection between activity and mood improvement.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Key Research:</strong></p>
            <ul className="space-y-1">
              <li>• Martell et al. (2001) - BA for depression</li>
              <li>• Lejuez et al. (2011) - BA effectiveness</li>
              <li>• Hopko et al. (2003) - Brief BA interventions</li>
            </ul>
          </div>
        </div>

        {/* Post-Traumatic Growth */}
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-3 h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">🌟</span>
            </div>
            <h3 className="text-lg font-semibold text-yellow-400">
              Post-Traumatic Growth
            </h3>
          </div>
          <p className="mb-4 text-gray-300">
            Trauma doesn't just damage—it can also lead to profound growth, deeper relationships, and increased appreciation for life when properly supported.
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-2"><strong>Key Research:</strong></p>
            <ul className="space-y-1">
              <li>• Tedeschi & Calhoun (2004) - PTG model</li>
              <li>• Joseph (2011) - What Doesn't Kill Us</li>
              <li>• Jayawickreme & Blackie (2014) - PTG mechanisms</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Building Clinical Partnerships */}
      <div className="mt-12 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-8">
        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-100">
          Building Clinical Partnerships
        </h3>
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-6 text-gray-300">
            We're actively recruiting licensed clinical psychologists and trauma specialists to form our Clinical Advisory Board. 
            Every AI response and therapeutic approach will be reviewed by mental health professionals before implementation.
          </p>
          <div className="grid gap-6 md:grid-cols-2 text-sm">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h4 className="mb-2 font-semibold text-cyan-400">What We're Looking For</h4>
              <ul className="text-gray-400 text-left space-y-1">
                <li>• Licensed trauma-informed therapists</li>
                <li>• Researchers in post-traumatic growth</li>
                <li>• Experts in behavioral activation therapy</li>
                <li>• Digital therapeutics specialists</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h4 className="mb-2 font-semibold text-cyan-400">Our Commitment</h4>
              <ul className="text-gray-400 text-left space-y-1">
                <li>• Every feature clinically reviewed</li>
                <li>• Evidence-based AI training protocols</li>
                <li>• Ongoing effectiveness monitoring</li>
                <li>• Transparent development process</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          <em>Know a mental health professional who might be interested? We'd love to connect.</em>
        </p>
      </div>

      {/* Commitment to Evidence */}
      <div className="mt-12 text-center">
        <div className="mx-auto max-w-3xl rounded-lg bg-slate-800 p-6">
          <h3 className="mb-4 text-xl font-semibold text-gray-100">
            Our Commitment to Evidence-Based Development
          </h3>
          <p className="mb-4 text-gray-300">
            Every AI response, feature design, and user interaction is reviewed by our clinical advisory board. 
            We don't just build what sounds good—we build what research shows actually helps people heal.
          </p>
          <div className="grid gap-4 text-sm text-gray-400 md:grid-cols-3">
            <div>
              <h4 className="mb-2 font-semibold text-cyan-400">Ongoing Research</h4>
              <p>Partnering with universities to study our effectiveness and continuously improve</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-cyan-400">Peer Review</h4>
              <p>All clinical approaches reviewed by licensed mental health professionals</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-cyan-400">Transparent Results</h4>
              <p>We'll publish our effectiveness data, both successes and areas for improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { ResearchFoundation };
