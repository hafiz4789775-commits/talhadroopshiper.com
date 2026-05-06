export const SITE = {
  name: 'Muhammad Talha',
  email: 'muhammaddtalha804@gmail.com',
  phone: '+923245895900',
  region: 'Punjab',
  city: 'Multan',
  postalCode: '60000',
  currency: 'PKR',
  offers: {
    multanDropshippingCode: 60000,
  },
} as const

export const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

