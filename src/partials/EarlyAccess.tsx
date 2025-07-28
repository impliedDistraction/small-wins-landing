import { Section } from 'astro-boilerplate-components';

const EarlyAccess = () => (
  <Section>
    <div id="early-access" className="mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold text-gray-100 mb-8">
        Join Our Healing Community
      </h2>
      
      <p className="text-xl text-gray-300 mb-8">
        Be among the first to experience Small Wins for Healing. Get early access, 
        share your feedback, and help us build something truly meaningful together.
      </p>
      
      <div className="bg-slate-800 p-8 rounded-lg max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          
          <div>
            <select className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-gray-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400">
              <option value="">What brings you here? (Optional)</option>
              <option value="trauma">Working through trauma</option>
              <option value="loss">Dealing with loss or grief</option>
              <option value="depression">Managing depression</option>
              <option value="overwhelm">Feeling overwhelmed by life</option>
              <option value="support">Supporting someone else</option>
              <option value="curious">Just curious about the app</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Request Early Access
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          We'll never spam you. Updates only when we have something meaningful to share.
        </p>
      </div>
      
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h4 className="font-semibold text-gray-100 mb-2">Early Beta Access</h4>
          <p className="text-gray-400 text-sm">
            Try the app before it launches publicly
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-100 mb-2">Shape the Future</h4>
          <p className="text-gray-400 text-sm">
            Your feedback directly influences development
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-100 mb-2">Community</h4>
          <p className="text-gray-400 text-sm">
            Connect with others on similar healing journeys
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { EarlyAccess };
