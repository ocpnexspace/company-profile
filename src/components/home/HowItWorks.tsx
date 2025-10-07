import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from '../Icons'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const features: FeatureProps[] = [
  {
    icon: <MapIcon aria-hidden />,
    title: 'Discovery & Alignment',
    description: 'We start with stakeholder interviews and a concise discovery sprint to align goals, scope, and success metrics—ensuring business value is front and center.'
  },
  {
    icon: <MedalIcon aria-hidden />,
    title: 'Solution Architecture',
    description: 'Our architects design a scalable, secure foundation using cloud-native patterns, clean boundaries, and future-proof integrations.'
  },
  {
    icon: <PlaneIcon aria-hidden />,
    title: 'Agile Delivery',
    description: 'Cross-functional squads ship in short iterations with CI/CD, automated testing, and observability for predictable velocity and quality.'
  },
  {
    icon: <GiftIcon aria-hidden />,
    title: 'Launch & Growth',
    description: 'We manage rollout, knowledge transfer, and post-launch support—then iterate on user feedback and analytics to accelerate ROI.'
  }
]

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-24 text-center sm:py-32">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        How We <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Deliver</span>
      </motion.h2>

      <motion.p
        className="mx-auto mt-4 mb-8 text-xl md:w-3/4 text-muted-foreground"
        initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        OCP Nexspace partners with you end-to-end from strategy and architecture to iterative delivery and ongoing optimization so the software scales with your business.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        aria-label="Process steps"
      >
        {features.map(({ icon, title, description }) => (
          <motion.div key={title} variants={itemVariants}>
            <Card className="bg-muted/50 transition-transform hover:shadow-lg hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="grid gap-3 place-items-center text-balance">
                  <span className="grid rounded-full size-12 place-items-center bg-primary/10">{icon}</span>
                  <span className="text-lg font-semibold">{title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">{description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
