import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          A gentle companion when{' '}
          <GradientText>life falls apart</GradientText> �
        </>
      }
      description={
        <>
          <strong>Small Wins for Healing</strong> is an AI-powered app that helps people rebuild after{' '}
          <a className="text-cyan-400 hover:underline" href="#story">
            trauma, loss, or depression
          </a>{' '}
          through gentle, structured goals and emotional support. When traditional productivity apps fail to meet your emotional needs, we offer a different path—one guided by{' '}
          <a className="text-cyan-400 hover:underline" href="#features">
            compassion and understanding
          </a>
          .
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Small Wins for Healing logo"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/smallwinsapp" target="_blank" rel="noopener noreferrer">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Follow us on Twitter"
            />
          </a>
          <a href="mailto:hello@smallwinshealing.com">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Contact us"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
