import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import image from '@/assets/growth.png'
import image3 from '@/assets/reflecting.png'
import image4 from '@/assets/looking-ahead.png'
import { motion } from 'framer-motion'

interface FeatureProps {
  title: string
  description: string
  image: string
}

const features: FeatureProps[] = [
  {
    title: 'Responsive Design',
    description: 'Pixel-perfect across devices and breakpoints. Built on a robust design system so your experience stays consistent at scale.',
    image: image4
  },
  {
    title: 'Intuitive User Interface',
    description: 'User flows crafted from research and usability testing—reducing friction, boosting adoption, and accelerating time-to-value.',
    image: image3
  },
  {
    title: 'AI-Powered Insights',
    description: 'Transform data into action with ML-driven insights—anomaly detection, forecasting, and smart recommendations out of the box.',
    image
  }
]

const featureList: string[] = ['Design System', 'Dark/Light Mode', 'Role-Based Access', 'API-First', 'CI/CD Ready', 'Analytics', 'SLA Support', 'OWASP Practices', 'Internationalization']

export const Features = () => {
  return (
    <section id="features" className="container py-24 space-y-8 sm:py-32">
      {/* Judul */}
      <motion.h2
        className="text-3xl font-bold lg:text-4xl md:text-center"
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Many <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Great Features</span>
      </motion.h2>

      {/* Badges */}
      <motion.div
        className="flex flex-wrap gap-4 md:justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {featureList.map((feature: string) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 10, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {features.map(({ title, description, image }: FeatureProps) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>

              <CardFooter>
                <img src={image} alt="About feature" className="w-[200px] lg:w-[300px] mx-auto" />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
