import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { buttonVariants } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import logoLight from '@/assets/long-logo-light.png'
import logoDark from '@/assets/long-logo-dark.png'

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'Services'
  },
  {
    href: '#testimonials',
    label: 'Projects'
  },
  {
    href: '#pricing',
    label: 'Blog'
  },
  {
    href: '#faq',
    label: 'FAQ'
  }
]

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <header className="sticky top-0 z-40 w-full py-2 border-b border-slate-200 dark:border-b-slate-700 backdrop-blur-sm bg-white/40 dark:bg-background/40">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="container flex items-center justify-between w-screen px-4 h-14">
            {/* Logo */}
            <NavigationMenuItem className="flex font-bold">
              <a rel="noreferrer noopener" href="/" className="flex ml-2 text-xl font-bold">
                {/* Logo Light */}
                <img src={logoLight} alt="Logo Light" className="block w-40 dark:hidden" />
                {/* Logo Dark */}
                <img src={logoDark} alt="Logo Dark" className="hidden w-40 dark:block" />
              </a>
            </NavigationMenuItem>

            {/* mobile */}
            <span className="flex md:hidden">
              <ModeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="px-2">
                  <Menu className="flex w-5 h-5 md:hidden" onClick={() => setIsOpen(true)}>
                    <span className="sr-only">Menu Icon</span>
                  </Menu>
                </SheetTrigger>
                <SheetContent side={'left'}>
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold">Shadcn/React</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col items-center justify-center gap-2 mt-4">
                    {routeList.map(({ href, label }: RouteProps) => (
                      <a rel="noreferrer noopener" key={label} href={href} onClick={() => setIsOpen(false)} className={buttonVariants({ variant: 'ghost' })}>
                        {label}
                      </a>
                    ))}
                    <a
                      rel="noreferrer noopener"
                      href="#"
                      target="_blank"
                      className={`w-[110px] border ${buttonVariants({
                        variant: 'secondary'
                      })}`}
                    >
                      Contact Us
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </span>

            {/* desktop */}
            <div className="items-center hidden gap-4 ml-auto md:flex">
              <nav className="flex gap-2">
                {routeList.map((route: RouteProps, i) => (
                  <a
                    rel="noreferrer noopener"
                    href={route.href}
                    key={i}
                    className={`text-[17px] ${buttonVariants({
                      variant: 'ghost'
                    })}`}
                  >
                    {route.label}
                  </a>
                ))}
              </nav>

              <a rel="noreferrer noopener" href="#" target="_blank" className={`border ${buttonVariants({ variant: 'secondary' })}`}>
                Contact Us
              </a>

              <ModeToggle />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <Outlet />

      <footer id="footer">
        <hr className="w-11/12 mx-auto" />

        <section className="container grid grid-cols-2 py-20 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <a rel="noreferrer noopener" href="/" className="flex text-xl font-bold">
              {/* Logo Light */}
              <img src={logoLight} alt="Logo Light" className="block w-64 dark:hidden" />
              {/* Logo Dark */}
              <img src={logoDark} alt="Logo Dark" className="hidden w-64 dark:block" />
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Follow US</h3>
            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Github
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Dribbble
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Platforms</h3>
            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Web
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Mobile
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Desktop
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">About</h3>
            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Features
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Pricing
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Community</h3>
            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Youtube
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Discord
              </a>
            </div>

            <div>
              <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
                Twitch
              </a>
            </div>
          </div>
        </section>

        <section className="container text-center pb-14">
          <h3>
            &copy; 2024 Landing page made by{' '}
            <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/leopoldo-miranda/" className="transition-all text-primary border-primary hover:border-b-2">
              Leo Miranda
            </a>
          </h3>
        </section>
      </footer>
    </>
  )
}
