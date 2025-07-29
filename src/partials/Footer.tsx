import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="flex flex-col items-center space-y-6">
      {/* Trust & Policy Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <a 
          href="/privacy/" 
          className="hover:text-cyan-400 transition-colors"
        >
          Privacy Policy
        </a>
        <a 
          href="#privacy-trust" 
          className="hover:text-cyan-400 transition-colors"
        >
          Security Features
        </a>
        <a 
          href="mailto:hello@smallwinshealing.com" 
          className="hover:text-cyan-400 transition-colors"
        >
          Contact Us
        </a>
        <a 
          href="mailto:security@smallwinshealing.com" 
          className="hover:text-cyan-400 transition-colors"
        >
          Report Security Issue
        </a>
      </div>
      
      {/* Trust Message */}
      <div className="max-w-md text-center">
        <p className="text-xs text-gray-500">
          🔒 Built with trauma-informed design and your privacy in mind. 
          No ads, no data selling, no judgment.
        </p>
      </div>
      
      <FooterCopyright site_name={AppConfig.site_name} />
    </div>
  </Section>
);

export { Footer };
