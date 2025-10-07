import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, type Variants } from 'framer-motion'

// --- Types ---
interface TestimonialProps {
  image: string
  name: string
  userName: string
  role: string
  company: string
  comment: string
  rating: number
}

// --- Easing & Variants (hindari string "easeOut") ---
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

// --- Small Star Rating component ---
function StarRating({ value = 5, max = 5 }: { value?: number; max?: number }) {
  const stars = Array.from({ length: max }, (_, i) => i < Math.round(value))
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of ${max} stars`}>
      {stars.map((filled, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${filled ? 'fill-yellow-400' : 'fill-muted'}`} aria-hidden>
          <path d="M10 1.8 12.47 7l5.53.44-4.2 3.49 1.3 5.27L10 13.9 4.9 16.2l1.3-5.27L2 7.44 7.53 7 10 1.8Z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-muted-foreground">{value.toFixed(1)}</span>
    </div>
  )
}

// --- Data (contoh profesional/enterprise) ---
const testimonials: TestimonialProps[] = [
  {
    image: 'https://i.pravatar.cc/150?img=12',
    name: 'Nadia Pratama',
    userName: '@nadia_p',
    role: 'Head of Digital',
    company: 'Aurora Retail',
    comment: 'OCP Nexspace shipped our new commerce stack in record time. Clean architecture, predictable sprints, and a team that truly understands outcomes.',
    rating: 5
  },
  {
    image: 'https://i.pravatar.cc/150?img=32',
    name: 'Daniel Hartono',
    userName: '@daniel.h',
    role: 'CTO',
    company: 'Finova',
    comment: 'From discovery to launch, everything was transparent. Their CI/CD and testing discipline improved our release cadence by 3x without trading off quality.',
    rating: 5
  },
  {
    image: 'https://i.pravatar.cc/150?img=5',
    name: 'Aisha Rahman',
    userName: '@aisha_rx',
    role: 'Product Lead',
    company: 'Helio Health',
    comment: 'Great partner. They proactively flagged risks, aligned stakeholders, and turned complex requirements into a delightful experience for clinicians.',
    rating: 5
  },
  {
    image: 'https://i.pravatar.cc/150?img=21',
    name: 'Felix Santoso',
    userName: '@felixs',
    role: 'Engineering Manager',
    company: 'Orbit Logistics',
    comment: 'Their observability setup and automation reduced our incident time drastically. We finally have the confidence to scale globally.',
    rating: 4.8
  },
  {
    image: 'https://i.pravatar.cc/150?img=49',
    name: 'Maya Siregar',
    userName: '@maya_s',
    role: 'VP Operations',
    company: 'Quantum Bank',
    comment: 'Stakeholder management was excellent. The team adapted quickly to compliance needs and delivered on critical timelines.',
    rating: 4.9
  },
  {
    image: 'https://i.pravatar.cc/150?img=9',
    name: 'Rizky Aditya',
    userName: '@rizky.a',
    role: 'Founder',
    company: 'Nimbus Labs',
    comment: 'Strong technical leadership clear docs, measurable milestones, and a smooth handover. Zero surprises on launch day.',
    rating: 5
  }
]

export const Testimonials = () => {
  // Aggregate metrics (untuk social proof)
  const totalReviews = testimonials.length
  const avg = Math.round((testimonials.reduce((a, t) => a + t.rating, 0) / totalReviews) * 10) / 10

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Trusted by <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Teams That Scale</span>
      </motion.h2>

      {/* Subcopy + Social proof bar */}
      <motion.div
        className="flex flex-col items-start gap-4 pt-4 pb-8 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, y: 12, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
      >
        <p className="text-xl text-muted-foreground">See what leaders say about partnering with OCP Nexspace.</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <StarRating value={avg} />
            <span className="text-sm text-muted-foreground">
              {avg}/5 from {totalReviews}+ reviews
            </span>
          </div>
          <span className="hidden w-px h-4 bg-border md:inline-block" />
          <span className="text-sm text-muted-foreground">150+ clients • 98% delivery satisfaction</span>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid mx-auto space-y-4 md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 lg:space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {testimonials.map(({ image, name, userName, role, company, comment, rating }) => (
          <motion.div key={userName} variants={itemVariants}>
            <Card className="max-w-md overflow-hidden md:break-inside-avoid">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={`${name} avatar`} src={image} />
                  <AvatarFallback>
                    {name
                      .split(' ')
                      .map((s) => s[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>
                    {role} • {company} • {userName}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">“{comment}”</p>
                <div className="flex items-center gap-2">
                  <StarRating value={rating} />
                  <span className="text-xs text-muted-foreground">Verified feedback</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
