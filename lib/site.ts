const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = configuredUrl
  ? configuredUrl.startsWith('http')
    ? configuredUrl.replace(/\/$/, '')
    : `https://${configuredUrl.replace(/\/$/, '')}`
  : 'https://insuveo.com';

export const siteDescription =
  'Insuveo helps insurance brokers, underwriters, claims teams, and operations teams collect missing information and manage approved follow-up.';
