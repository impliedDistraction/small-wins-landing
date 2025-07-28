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
      description="Get updates on our progress, insights about trauma recovery, and be the first to know when Small Wins for Healing is ready to support you or someone you care about."
    />
  </Section>
);

export { CTA };
