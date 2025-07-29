import { Section } from 'astro-boilerplate-components';

const Support = () => (
  <Section>
    <div id="support" className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-100">
        Help Us Help Others
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-300">
        Small Wins for Healing is more than an app—it's a mission to make
        emotional recovery accessible to everyone. We believe no one should
        navigate their darkest moments alone.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            For Grantmakers & Foundations
          </h3>
          <p className="mb-6 text-gray-300">
            Partner with us to expand access to trauma-informed mental health
            tools. We're seeking grants to support research, development, and
            accessibility initiatives.
          </p>
          <ul className="mb-6 space-y-2 text-gray-400">
            <li>• Evidence-based trauma recovery approaches</li>
            <li>• Accessibility for underserved communities</li>
            <li>• Research partnerships with mental health organizations</li>
            <li>• Free access programs for those who need it most</li>
          </ul>
          <a
            href="mailto:grants@smallwinshealing.com"
            className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            Partnership Inquiries
          </a>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            For Mentors & Advisors
          </h3>
          <p className="mb-6 text-gray-300">
            We're looking for experienced voices in mental health, trauma
            recovery, AI ethics, and app development to guide our mission.
          </p>
          <ul className="mb-6 space-y-2 text-gray-400">
            <li>• Clinical psychology and trauma specialists</li>
            <li>• AI/ML ethics and responsible development</li>
            <li>• Mental health app success stories</li>
            <li>• Community building and user support</li>
          </ul>
          <a
            href="mailto:mentors@smallwinshealing.com"
            className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            Become a Mentor
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="mx-auto max-w-2xl rounded-lg bg-slate-800 p-6">
          <h4 className="mb-3 text-xl font-semibold text-gray-100">
            Individual Support
          </h4>
          <p className="mb-4 text-gray-400">
            Every contribution helps us reach more people who need gentle,
            trauma-informed support on their healing journey.
          </p>
          <a
            href="mailto:hello@smallwinshealing.com"
            className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:from-cyan-600 hover:to-blue-600"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { Support };
