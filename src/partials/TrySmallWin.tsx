import { Section } from 'astro-boilerplate-components';

const TrySmallWin = () => (
  <Section>
    <div id="try-small-win" className="mx-auto max-w-4xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        Experience a Small Win Right Now
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        Don't just read about Small Wins—experience one. Choose a situation that feels overwhelming right now, and we'll help you break it down into something manageable. <strong>This is exactly what our AI will do, but tailored to your specific healing journey.</strong>
      </p>

      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          {/* Simplified Static Examples */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-6">
              <div className="mb-3 text-2xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Overwhelming: "My house is a disaster"
              </h3>
              <div className="mb-4 text-sm text-gray-400">↓ becomes ↓</div>
              <h4 className="mb-2 text-lg font-semibold text-green-400">
                Small Win: "Clear just my nightstand"
              </h4>
              <p className="text-sm text-gray-300">
                One small surface that you'll see every night—instant calm instead of overwhelm.
              </p>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-6">
              <div className="mb-3 text-2xl">�</div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Overwhelming: "I'm behind on everything at work"
              </h3>
              <div className="mb-4 text-sm text-gray-400">↓ becomes ↓</div>
              <h4 className="mb-2 text-lg font-semibold text-green-400">
                Small Win: "Read one email, no need to respond"
              </h4>
              <p className="text-sm text-gray-300">
                Just reading breaks the freeze. Responding can wait—you've already won.
              </p>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-6">
              <div className="mb-3 text-2xl">💙</div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Overwhelming: "I've neglected myself for weeks"
              </h3>
              <div className="mb-4 text-sm text-gray-400">↓ becomes ↓</div>
              <h4 className="mb-2 text-lg font-semibold text-green-400">
                Small Win: "Drink one glass of water mindfully"
              </h4>
              <p className="text-sm text-gray-300">
                Your body has carried you through hard times. This is saying "thank you."
              </p>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-6">
              <div className="mb-3 text-2xl">📱</div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Overwhelming: "I've been isolating for too long"
              </h3>
              <div className="mb-4 text-sm text-gray-400">↓ becomes ↓</div>
              <h4 className="mb-2 text-lg font-semibold text-green-400">
                Small Win: "Send one emoji to someone"
              </h4>
              <p className="text-sm text-gray-300">
                No explanations needed. Just a tiny bridge back to connection.
              </p>
            </div>
          </div>

          {/* The Magic Explanation */}
          <div className="rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 p-6">
            <div className="text-center">
              <div className="mb-4 text-4xl">✨</div>
              <h3 className="mb-3 text-xl font-semibold text-purple-400">
                Feel that shift?
              </h3>
              <p className="mb-4 text-gray-300">
                Notice how each "small win" version feels more doable? That mental shift from "I can't" to "I could do that" is the neurological foundation of healing. Your brain literally rewires itself through tiny victories.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Small Wins for Healing</strong> will create these personalized micro-goals for you every day, adapting to your emotional state and building momentum without pressure.
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
            Get Personalized Small Wins Every Day
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { TrySmallWin };
