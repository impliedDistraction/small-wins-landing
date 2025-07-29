import { Section } from 'astro-boilerplate-components';

const FounderStory = () => (
  <Section>
    <div id="story" className="mx-auto max-w-4xl text-center">
      <h2 className="mb-8 text-4xl font-bold text-gray-100">
        Why Small Wins Exists
      </h2>

      <div className="prose prose-lg prose-invert mx-auto">
        <p className="mb-6 text-xl leading-relaxed text-gray-300">
          When life collapses—whether through trauma, loss, or
          depression—traditional productivity apps feel tone-deaf and
          overwhelming. They're built for people who already have their
          foundation intact.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-400">
          Small Wins was born from a personal experience with profound loss.
          After my world fell apart, I discovered that healing doesn't happen
          through grand gestures or ambitious goals. It happens through tiny,
          consistent steps that gradually rebuild your sense of capability and
          hope.
        </p>

        <div className="my-8 rounded-lg bg-slate-800 p-6">
          <p className="text-lg italic text-cyan-300">
            "The app I needed didn't exist—so I built it. Not just for me, but
            for everyone who needs a gentler way to piece their life back
            together."
          </p>
        </div>

        <p className="text-lg leading-relaxed text-gray-400">
          This isn't about optimization or efficiency. It's about survival,
          growth, and rediscovering your strength one small win at a time.
        </p>
      </div>
    </div>
  </Section>
);

export { FounderStory };
