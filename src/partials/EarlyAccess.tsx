import { Section } from 'astro-boilerplate-components';

const EarlyAccess = () => (
  <Section>
    <div id="early-access" className="mx-auto max-w-4xl text-center">
      <h2 className="mb-8 text-4xl font-bold text-gray-100">
        Join Our Healing Community
      </h2>

      <p className="mb-8 text-xl text-gray-300">
        Be among the first to experience Small Wins for Healing. Get early
        access, share your feedback, and help us build something truly
        meaningful together. <strong>Your input during development will directly shape
        how the app supports people in their most vulnerable moments.</strong>
      </p>

      {/* Enhanced Security Messaging */}
      <div className="mx-auto mb-8 max-w-2xl space-y-4">
        {/* Primary Trust Badge */}
        <div className="rounded-lg bg-green-900/20 border border-green-500/30 p-4">
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <span className="text-lg">🔒</span>
            <span className="text-sm font-medium">Your email is encrypted and never shared</span>
          </div>
        </div>
        
        {/* Vulnerability Safety Promise */}
        <div className="rounded-lg bg-blue-900/20 border border-blue-500/30 p-4">
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <span className="text-lg">💙</span>
            <span className="text-sm font-medium">Built for safe vulnerability - your data stays private, local, and secure</span>
          </div>
        </div>
        
        {/* Zero Judgment Promise */}
        <div className="rounded-lg bg-purple-900/20 border border-purple-500/30 p-4">
          <div className="flex items-center justify-center space-x-2 text-purple-400">
            <span className="text-lg">🤗</span>
            <span className="text-sm font-medium">AI designed to break cycles gently, never to shame or pressure</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md rounded-lg bg-slate-800 p-8">
        <form className="space-y-4" method="POST" action="https://formspree.io/f/xanbjpdr">
          {/* Hidden fields for better organization */}
          <input type="hidden" name="_subject" value="New Early Access Request - Small Wins for Healing" />
          <input type="hidden" name="_next" value="https://smallwinshealing.com/thank-you" />
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <select 
              name="interest"
              aria-label="What brings you here"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-gray-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">What brings you here? (Optional)</option>
              <option value="trauma">Working through trauma</option>
              <option value="loss">Dealing with loss or grief</option>
              <option value="depression">Managing depression or anxiety</option>
              <option value="overwhelm">Feeling overwhelmed by life</option>
              <option value="burnout">Recovering from burnout</option>
              <option value="caregiving">Supporting someone else's healing</option>
              <option value="professional">Mental health professional</option>
              <option value="curious">Just curious about the app</option>
            </select>
          </div>

          <div>
            <select 
              name="priority"
              aria-label="What matters most to you"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-gray-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">What's most important to you? (Optional)</option>
              <option value="privacy">Complete privacy and data security</option>
              <option value="gentle">Gentle, non-judgmental support</option>
              <option value="science">Evidence-based healing approaches</option>
              <option value="accessible">Accessible during crisis moments</option>
              <option value="community">Connection with others who understand</option>
              <option value="flexible">Flexible support for bad days</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Anything else you'd like us to know? (Optional - this helps us build what you need)"
              aria-label="Additional message"
              rows={3}
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-cyan-600 hover:to-blue-600"
          >
            Request Early Access
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          🔒 We'll never spam you or share your email. Updates only when we have something meaningful
          to share. Read our <a href="/privacy/" className="text-cyan-400 hover:underline">Privacy Policy</a> for complete transparency.
        </p>
      </div>

      <div className="mt-12 grid gap-6 text-center md:grid-cols-3">
        <div>
          <h4 className="mb-2 font-semibold text-gray-100">
            Beta Access (Late 2025)
          </h4>
          <p className="text-sm text-gray-400">
            Be among the first to experience Small Wins and help us get it right
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-gray-100">Direct Influence</h4>
          <p className="text-sm text-gray-400">
            Your feedback shapes features—this is your chance to build the app you need
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-gray-100">Healing Community</h4>
          <p className="text-sm text-gray-400">
            Connect with others who understand what it's like to rebuild after life falls apart
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { EarlyAccess };
