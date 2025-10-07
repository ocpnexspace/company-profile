import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

interface SocialNetworkProps {
  name: 'Linkedin' | 'Facebook' | 'Instagram'
  url: string
}

interface TeamProps {
  imageUrl: string
  name: string
  position: string
  socialNetworks: SocialNetworkProps[]
  bio?: string
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: easeOut }
  }
}

const teamList: TeamProps[] = [
  {
    imageUrl: 'https://i.pravatar.cc/150?img=35',
    name: 'Emma Smith',
    position: 'Product Manager',
    bio: 'Leads cross-functional discovery and delivery—translating strategy into outcomes with clear roadmaps and measurable KPIs.',
    socialNetworks: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/' },
      { name: 'Facebook', url: 'https://www.facebook.com/' },
      { name: 'Instagram', url: 'https://www.instagram.com/' }
    ]
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'John Doe',
    position: 'Tech Lead',
    bio: 'Owns architecture and code quality. Champions CI/CD, testing, and observability to keep velocity high and risk low.',
    socialNetworks: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/' },
      { name: 'Facebook', url: 'https://www.facebook.com/' },
      { name: 'Instagram', url: 'https://www.instagram.com/' }
    ]
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=36',
    name: 'Ashley Ross',
    position: 'Frontend Developer',
    bio: 'Crafts accessible, performant interfaces with a strong design-system mindset—shipping pixel-perfect experiences.',
    socialNetworks: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/' },
      { name: 'Instagram', url: 'https://www.instagram.com/' }
    ]
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=17',
    name: 'Bruce Rogers',
    position: 'Backend Developer',
    bio: 'Builds reliable, scalable services using clean patterns and secure APIs—future-proofed for growth.',
    socialNetworks: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/' },
      { name: 'Facebook', url: 'https://www.facebook.com/' }
    ]
  }
]

const SocialIcon = ({ name }: { name: SocialNetworkProps['name'] }) => {
  const iconMap: Record<SocialNetworkProps['name'], JSX.Element> = {
    Linkedin: <Linkedin size={20} />,
    Facebook: <Facebook size={20} />,
    Instagram: <Instagram size={20} />
  }
  return iconMap[name]
}

export const Team = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Our World-Class </span>
        Team
      </motion.h2>

      <motion.p
        className="mt-4 mb-10 text-xl text-muted-foreground"
        initial={{ opacity: 0, y: 12, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
      >
        A cross-functional crew of builders and innovators—trusted by enterprises worldwide to deliver excellence with precision and purpose.
      </motion.p>

      {/* Cards */}
      <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 gap-y-10" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={containerVariants}>
        {teamList.map(({ imageUrl, name, position, socialNetworks, bio }) => (
          <motion.div key={name} variants={itemVariants} className="flex">
            <Card className="relative flex flex-col justify-between flex-1 mt-8 transition-colors bg-muted/50 hover:bg-muted/60">
              <div className="flex flex-col items-center flex-1 px-4 text-center">
                <CardHeader className="flex flex-col items-center justify-center pb-2 mt-8">
                  <img
                    src={imageUrl}
                    alt={`${name} — ${position}`}
                    className="absolute object-cover w-24 h-24 rounded-full shadow -top-12 aspect-square ring-2 ring-background"
                    loading="lazy"
                    decoding="async"
                  />
                  <CardTitle className="pt-2">{name}</CardTitle>
                  <CardDescription className="text-primary">{position}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pb-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
                </CardContent>
              </div>

              <CardFooter className="flex justify-center gap-2 pb-4">
                {socialNetworks.map(({ name, url }) => (
                  <a key={`${name}-${url}`} rel="noreferrer noopener" href={url} target="_blank" className={buttonVariants({ variant: 'ghost', size: 'sm' })} aria-label={`${name} profile`}>
                    <SocialIcon name={name} />
                  </a>
                ))}
              </CardFooter>

              <div className="absolute inset-x-0 bottom-0 h-1 pointer-events-none bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
