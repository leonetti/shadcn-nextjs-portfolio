export type SiteConfig = typeof siteConfig;
import {
  HomeIcon,
  PersonIcon,
  BackpackIcon,
  EnvelopeOpenIcon,
} from '@radix-ui/react-icons';

export const siteConfig = {
  title: 'Hello World',
  name: 'HelloWorld',
  description:
    'A template built using NextJS, Shadcn, Tailwind, and Vercel',
  navItems: [
    {
      label: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      label: 'About',
      href: '/about',
      icon: PersonIcon,
    },
    {
      label: 'Projects',
      href: '/projects',
      icon: BackpackIcon,
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: EnvelopeOpenIcon,
    },
  ],
  navMenuItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
  ],
  links: {
    url: 'localhost:3000',
    creator: 'https://www.alexleonetti.com',
  },
  metadata: {
    keywords: 'nextjs, shadcn, tailwind, vercel',
    type: 'website' as const,
    generator: 'Next.js',
    publisher: 'Vercel',
    category: 'Website Template',
    referrer: 'same-origin' as const,
    author: {
      name: 'Alexander Leonetti',
      url: '',
    },
    twitter: {
      creator: '@alex__leonetti',
    },
    manifestUrl: '/manifest.webmanifest',
  },
};

export default siteConfig;
