import { Section } from 'astro-boilerplate-components';

const Support = () => (
  <Section>
    <div id="support" className="mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold text-gray-100 text-center mb-8">
        Help Us Help Others
      </h2>
      
      <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        Small Wins for Healing is more than an app—it's a mission to make emotional 
        recovery accessible to everyone. We believe no one should navigate their darkest 
        moments alone.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            For Grantmakers & Foundations
          </h3>
          <p className="text-gray-300 mb-6">
            Partner with us to expand access to trauma-informed mental health tools. 
            We're seeking grants to support research, development, and accessibility initiatives.
          </p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>• Evidence-based trauma recovery approaches</li>
            <li>• Accessibility for underserved communities</li>
            <li>• Research partnerships with mental health organizations</li>
            <li>• Free access programs for those who need it most</li>
          </ul>
          <a
            href="mailto:grants@smallwinshealing.com"
            className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Partnership Inquiries
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            For Mentors & Advisors
          </h3>
          <p className="text-gray-300 mb-6">
            We're looking for experienced voices in mental health, trauma recovery, 
            AI ethics, and app development to guide our mission.
          </p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>• Clinical psychology and trauma specialists</li>
            <li>• AI/ML ethics and responsible development</li>
            <li>• Mental health app success stories</li>
            <li>• Community building and user support</li>
          </ul>
          <a
            href="mailto:mentors@smallwinshealing.com"
            className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Become a Mentor
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-slate-800 p-6 rounded-lg max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-gray-100 mb-3">
            Individual Support
          </h4>
          <p className="text-gray-400 mb-4">
            Every contribution helps us reach more people who need gentle, 
            trauma-informed support on their healing journey.
          </p>
          <a
            href="mailto:hello@smallwinshealing.com"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { Support };
