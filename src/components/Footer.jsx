import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/siddheshgadade', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/siddheshgadade', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:siddhesh.gadade@email.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-tokyo-border/30 mt-20" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold gradient-text">SG</span>
              <span className="text-2xl font-light text-tokyo-blue">.</span>
            </div>
            <p className="text-sm text-tokyo-text-muted leading-relaxed max-w-xs">
              Crafting performant digital experiences at the intersection of engineering and data science.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-tokyo-text uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-tokyo-text-muted hover:text-tokyo-blue transition-colors duration-200"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-tokyo-text uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass hover:bg-tokyo-blue/10 hover:border-tokyo-blue/30 text-tokyo-text-muted hover:text-tokyo-blue transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-tokyo-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-tokyo-text-muted">
            © {new Date().getFullYear()} Siddhesh Gadade. All rights reserved.
          </p>
          <p className="text-xs text-tokyo-text-muted flex items-center gap-1">
            Built with <Heart size={12} className="text-tokyo-red" fill="currentColor" /> and React
          </p>
        </div>
      </div>
    </footer>
  )
}
