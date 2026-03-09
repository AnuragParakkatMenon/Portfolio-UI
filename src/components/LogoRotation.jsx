import LogoLoop from './LogoLoop'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si'

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  {
    node: <SiTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org'
  },
  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com'
  }
]

const LogoRotation = () => {
  return (
    <div className=" w-full py-20 overflow-hidden">
      <div className="relative w-full h-30 overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={30}
          direction="left"
          logoHeight={50}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  )
}
export default LogoRotation
