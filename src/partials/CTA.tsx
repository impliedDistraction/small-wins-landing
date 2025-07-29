import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Stay Connected to Our <GradientText>Healing Journey</GradientText>
        </>
      }
      description="Get gentle insights about trauma recovery, progress updates from our development journey, and early access when Small Wins is ready. We'll never spam you—only meaningful updates that might actually help with your healing."
    />
  </Section>
);

export { CTA };
