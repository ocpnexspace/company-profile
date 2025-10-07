import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

interface FAQProps {
  question: string
  answer: string
  value: string
}

// Easing cubic-bezier (pengganti "easeOut" string agar aman di TS)
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

const FAQList: FAQProps[] = [
  {
    question: 'How do you estimate timeline and cost?',
    answer:
      'We run a short discovery (1–2 weeks) to align scope, constraints, and success metrics. You’ll get a breakdown of milestones, dependencies, and risks, plus a phased plan: MVP first, followed by iterations. Estimates are tied to deliverables with buffer for uncertainty and are refined every sprint to stay transparent.',
    value: 'item-1'
  },
  {
    question: 'Can you work with our legacy systems and third-party tools?',
    answer:
      'Yes. We start with an integration map and risk assessment. We use adapters and clear interfaces to isolate legacy complexity, add contract tests, and phase migrations to avoid downtime. If vendor APIs are unstable, we add retries, circuit breakers, and telemetry to keep the experience resilient.',
    value: 'item-2'
  },
  {
    question: 'How do you ensure code quality and predictability?',
    answer:
      'We enforce trunk-based development with CI/CD, code reviews, and automated tests (unit, integration, e2e). We track DORA metrics, error budgets, and maintain clear ‘Definition of Done’. Observability (logs, metrics, traces) is built in so issues are detected early and resolved fast.',
    value: 'item-3'
  },
  {
    question: 'Security & compliance: do you support OWASP, SOC 2, ISO, or GDPR?',
    answer:
      'Security is by design: secrets management, least privilege, dependency scanning, SAST/DAST, and threat modeling. We follow OWASP ASVS/Cheat Sheets and can align to SOC 2/ISO 27001 controls. For GDPR/PDPA, we implement data minimization, retention policies, and audit trails.',
    value: 'item-4'
  },
  {
    question: 'Who owns the IP and source code?',
    answer:
      'You do. Upon payment, all work product (source code, assets, documentation) is assigned to you. We can host repos in your Git provider from day one or transfer everything at handover with full commit history.',
    value: 'item-5'
  },
  {
    question: 'What happens after go-live? Do you provide support and SLAs?',
    answer:
      'Yes. We offer tiered support (business hours or 24/7) with defined SLAs for response and resolution. We operate an on-call rotation, incident playbooks, and post-mortems. We can also run a continuous improvement backlog driven by analytics and user feedback.',
    value: 'item-6'
  },
  {
    question: 'Can you scale the system as usage grows?',
    answer:
      'We design for scale from the start: stateless services, horizontal scaling, caching, async processing, and CDN. We run load tests and capacity planning, add autoscaling policies, and instrument KPIs so we can forecast and prevent bottlenecks.',
    value: 'item-7'
  },
  {
    question: 'How do change requests work without derailing the schedule?',
    answer:
      'All changes go through a lightweight change control: clarify value, estimate impact, and decide to swap scope, expand budget, or move to next phase. Roadmaps stay stable while we keep flexibility for high-ROI changes.',
    value: 'item-8'
  },
  {
    question: 'Will you collaborate with our internal team?',
    answer:
      'Absolutely. We operate as an augmented squad—shared rituals (stand-ups, reviews), shared boards, and shared repos. We document decisions (ADR), keep architecture diagrams current, and offer enablement sessions so your team can take over confidently.',
    value: 'item-9'
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'We’re stack-agnostic and choose based on context. Typical picks: React/Next.js, Node.js/NestJS, Go, or .NET; Postgres, Redis; gRPC/REST; Docker/K8s on AWS/GCP/Azure. We’ll validate the stack against your constraints—team skills, compliance, cost, and time-to-market.',
    value: 'item-10'
  }
]

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <motion.h2
        className="mb-8 text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Frequently Asked <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Questions</span>
      </motion.h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }, index) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easeOut, delay: index * 0.06 }}
          >
            <AccordionItem value={value}>
              <AccordionTrigger className="text-left">{question}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.h3
        className="mt-8 font-medium"
        initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
      >
        Still have questions?{' '}
        <a rel="noreferrer noopener" href="/contact" className="transition-all text-primary border-primary hover:border-b-2">
          Contact us
        </a>
      </motion.h3>
    </section>
  )
}
