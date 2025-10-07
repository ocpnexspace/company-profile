import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { MagnifierIcon, WalletIcon, ChartIcon } from '../Icons'
import cubeLeg from '@/assets/cube-leg.png'
import { motion } from 'framer-motion'

interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

const serviceList: ServiceProps[] = [
  {
    title: 'Code Collaboration',
    description: 'We enable seamless teamwork through modern version-control workflows, automated reviews, and CI/CD pipelines — empowering your teams to build, ship, and scale faster.',
    icon: <ChartIcon />
  },
  {
    title: 'Project Management',
    description: 'From sprint planning to delivery tracking, we provide transparent, agile-based project governance ensuring every milestone is measurable, visible, and on-time.',
    icon: <WalletIcon />
  },
  {
    title: 'Task Automation',
    description: 'Automate repetitive workflows with intelligent triggers and AI-assisted scripts to minimize human error, accelerate operations, and focus on high-impact innovation.',
    icon: <MagnifierIcon />
  }
]

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Judul */}
          <motion.h2
            className="text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Client-Centric </span>
            Services
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mt-4 mb-8 text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            At OCP Nexspace, we deliver tailored digital solutions built on collaboration, agility, and precision helping enterprises transform complex challenges into measurable growth.{' '}
          </motion.p>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <Card>
                  <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                    <div className="p-1 mt-1 bg-primary/20 rounded-2xl">{icon}</div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="mt-2 text-md">{description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gambar */}
        <motion.img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
          initial={{ opacity: 0, x: 50, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>
    </section>
  )
}
