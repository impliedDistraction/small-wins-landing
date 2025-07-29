import { Section } from 'astro-boilerplate-components';

const HowItWorks = () => (
  <Section>
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        How Small Wins Works With You
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        No complicated setup or overwhelming features. Small Wins meets you wherever you are 
        and grows with you as you heal.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Step 1: Start Where You Are */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-2xl font-bold text-white">
            1
          </div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">
            Start Where You Are
          </h3>
          <p className="text-gray-400">
            Small Wins begins with a gentle conversation about how you're feeling and what feels manageable today. 
            No pressure to have it all figured out—just honesty about your current reality.
          </p>
        </div>

        {/* Step 2: AI Suggests Small Steps */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-2xl font-bold text-white">
            2
          </div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">
            Get Gentle Suggestions
          </h3>
          <p className="text-gray-400">
            Our trauma-informed AI suggests small, achievable steps based on your emotional state and capacity. 
            These aren't generic tasks—they're personalized to what you're dealing with right now.
          </p>
        </div>

        {/* Step 3: Celebrate & Reflect */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-2xl font-bold text-white">
            3
          </div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">
            Celebrate & Reflect
          </h3>
          <p className="text-gray-400">
            Whether you completed the step or not, Small Wins helps you reflect on what happened and 
            celebrates any effort you made. Progress isn't linear, and that's perfectly okay.
          </p>
        </div>
      </div>

      {/* Example interaction */}
      <div className="mt-16">
        <h3 className="mb-8 text-center text-2xl font-semibold text-gray-100">
          What a Conversation Might Look Like
        </h3>
        
        <div className="mx-auto max-w-2xl space-y-4">
          {/* AI message */}
          <div className="flex justify-start">
            <div className="max-w-xs rounded-lg bg-slate-700 p-4">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-cyan-400">Small Wins:</span><br/>
                Hey, how are you feeling today? No pressure to be positive—just checking in.
              </p>
            </div>
          </div>

          {/* User response */}
          <div className="flex justify-end">
            <div className="max-w-xs rounded-lg bg-cyan-600 p-4">
              <p className="text-sm text-white">
                Honestly, pretty overwhelmed. My apartment is a mess and I have so much to do but I can't seem to start anything.
              </p>
            </div>
          </div>

          {/* AI response */}
          <div className="flex justify-start">
            <div className="max-w-xs rounded-lg bg-slate-700 p-4">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-cyan-400">Small Wins:</span><br/>
                That feeling of being stuck when everything feels like too much is so real. What if we started with just one small corner? Maybe clearing off your bedside table or just making your bed?
              </p>
            </div>
          </div>

          {/* User response */}
          <div className="flex justify-end">
            <div className="max-w-xs rounded-lg bg-cyan-600 p-4">
              <p className="text-sm text-white">
                I think I could make my bed. That feels doable.
              </p>
            </div>
          </div>

          {/* AI response */}
          <div className="flex justify-start">
            <div className="max-w-xs rounded-lg bg-slate-700 p-4">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-cyan-400">Small Wins:</span><br/>
                Perfect. That's your small win for today. Making your bed is caring for yourself and your space. I'll check in later to see how it went—no pressure, just support. 💙
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Every conversation is designed to feel supportive, never judgmental
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { HowItWorks };
