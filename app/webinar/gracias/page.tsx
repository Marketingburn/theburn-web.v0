import type { Metadata } from 'next'
import { WebinarThankYou } from '@/components/webinar-thank-you'

export const metadata: Metadata = {
  title: 'Registro confirmado | Taller The Burn',
  description: 'Confirma los próximos pasos para participar en el taller de The Burn.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function WebinarThankYouPage() {
  return <WebinarThankYou />
}
