import { Section } from 'astro-boilerplate-components';

const ProgressWithoutPressure = () => (
  <Section>
    <div id="progress-without-pressure" className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        Progress Without Pressure
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        Traditional goal apps can feel like having a demanding boss in your pocket. Small Wins for Healing works differently—it's designed for real people having real struggles, not productivity robots.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* What We DON'T Do */}
        <div className="rounded-lg bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 p-8">
          <h3 className="mb-6 text-2xl font-semibold text-red-400">
            ❌ What We DON'T Do
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-red-400">•</span>
              <p className="text-gray-300">
                <strong>No streak shaming:</strong> Miss a day? No guilt trips, no broken chains, no starting over.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-red-400">•</span>
              <p className="text-gray-300">
                <strong>No toxic positivity:</strong> We won't tell you to "just think positive" when you're struggling.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-red-400">•</span>
              <p className="text-gray-300">
                <strong>No productivity guilt:</strong> Bad days aren't failures—they're part of being human.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-red-400">•</span>
              <p className="text-gray-300">
                <strong>No one-size-fits-all:</strong> Your healing journey isn't identical to anyone else's.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-red-400">•</span>
              <p className="text-gray-300">
                <strong>No dismissing your pain:</strong> We never minimize what you're going through.
              </p>
            </div>
          </div>
        </div>

        {/* What We DO */}
        <div className="rounded-lg bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-500/30 p-8">
          <h3 className="mb-6 text-2xl font-semibold text-green-400">
            ✅ What We DO
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-green-400">•</span>
              <p className="text-gray-300">
                <strong>Celebrate micro-progress:</strong> Drinking water, taking a shower, sending one text—all wins.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-green-400">•</span>
              <p className="text-gray-300">
                <strong>Adjust to your capacity:</strong> Bad day? We suggest gentler goals, not harder ones.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-green-400">•</span>
              <p className="text-gray-300">
                <strong>Honor your pace:</strong> Healing isn't linear, and neither is our app.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-green-400">•</span>
              <p className="text-gray-300">
                <strong>Validate your experience:</strong> Your feelings are real, valid, and understood.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-green-400">•</span>
              <p className="text-gray-300">
                <strong>Focus on being, not just doing:</strong> Sometimes the win is just making it through the day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real Scenarios */}
      <div className="mt-12">
        <h3 className="mb-8 text-center text-2xl font-semibold text-gray-100">
          How This Looks in Real Life
        </h3>
        
        <div className="grid gap-6 md:grid-cols-3">
          {/* Scenario 1 */}
          <div className="rounded-lg bg-slate-800 p-6">
            <div className="mb-4 text-3xl text-center">😔</div>
            <h4 className="mb-3 text-lg font-semibold text-cyan-400 text-center">
              When You're Having a Terrible Day
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-700 p-3">
                <p className="text-sm text-gray-400 mb-1">Traditional app might say:</p>
                <p className="text-red-300">"You missed your goals! Try harder tomorrow!"</p>
              </div>
              <div className="rounded-lg bg-slate-700 p-3">
                <p className="text-sm text-gray-400 mb-1">Small Wins says:</p>
                <p className="text-green-300">"Today is hard. Would it help to just take three deep breaths? That's enough for now."</p>
              </div>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="rounded-lg bg-slate-800 p-6">
            <div className="mb-4 text-3xl text-center">😰</div>
            <h4 className="mb-3 text-lg font-semibold text-cyan-400 text-center">
              When You Haven't Used the App in Weeks
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-700 p-3">
                <p className="text-sm text-gray-400 mb-1">Traditional app might say:</p>
                <p className="text-red-300">"Welcome back! You've lost your 47-day streak."</p>
              </div>
              <div className="rounded-lg bg-slate-700 p-3">
                <p className="text-sm text-gray-400 mb-1">Small Wins says:</p>
                <p className="text-green-300">"Welcome back. Sometimes we need to step away, and that's okay. What feels manageable today?"</p>
              </div>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="rounded-lg bg-slate-800 p-6">
            <div className="mb-4 text-3xl text-center">😊</div>
            <h4 className="mb-3 text-lg font-semibold text-cyan-400 text-center">
              When You're Making Progress
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-700 p-3">
                <p className="text-sm text-gray-400 mb-1">Traditional app might say:</p>
                <p className="text-orange-300">"Great! Now let's add 5 more goals to keep the momentum going!"</p>
              </div>
              <div className="rounded-lg bg-slate-700 p-3">
                <p className="text-sm text-gray-400 mb-1">Small Wins says:</p>
                <p className="text-green-300">"You're doing amazing. Let's celebrate this progress before thinking about what's next."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Philosophy Behind It */}
      <div className="mt-12 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 p-8">
        <h3 className="mb-4 text-center text-2xl font-semibold text-purple-400">
          Our Core Philosophy
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-lg font-semibold text-gray-100">Healing Over Hustle</h4>
            <p className="text-gray-300">
              Your worth isn't measured by your productivity. Sometimes the most healing thing you can do is rest, grieve, or simply survive the day. We celebrate all forms of self-care.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold text-gray-100">Progress is Personal</h4>
            <p className="text-gray-300">
              What looks like a small step to others might be a mountain for you—and that's completely valid. We measure progress against where YOU were yesterday, not against anyone else.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold text-gray-100">Compassion First</h4>
            <p className="text-gray-300">
              We lead with understanding, not judgment. The voice in your head is often critical enough—our app will be the gentle, supportive friend you deserve.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold text-gray-100">Realistic Expectations</h4>
            <p className="text-gray-300">
              Healing isn't linear, motivation isn't constant, and some days survival is victory. We're built for real humans living real lives, not idealized versions of who you think you should be.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <a
          href="#early-access"
          className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-cyan-600 hover:to-blue-600"
        >
          Experience Gentle, Pressure-Free Progress
        </a>
      </div>
    </div>
  </Section>
);

export { ProgressWithoutPressure };
