import DotGrid from "./DotGrid"
import React, { useEffect, useRef, useState } from "react"

const experiences = [
  {
    company: "Ameriprise Financial",
    role: "Senior Frontend Developer",
    duration: "May 2021 - Sept 2025",
    description:
      "Working on Billing systems and payment gateway flows. Building scalable React applications and improving performance across high-traffic modules."
  },
  {
    company: "At&T",
    role: "React Developer",
    duration: "May 2019 - May 2021",
    description:
      "Built enterprise dashboards and internal tools using React and TypeScript. Led UI architecture decisions. Worked on Billing systems and payment gateway flows. Building scalable React applications and improving performance across high-traffic modules."
  },
  {
    company: "Viralsphere",
    role: "Software Developer",
    duration: "Jan 2015 - Sept 2016",
    description:
      "Developed customer-facing web apps and optimized rendering performance for mobile users."
  }
]

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target)
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-black text-white py-24 z-10">

      {/* DotGrid Background */}
      <div className="absolute inset-0 -z-10">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Header */}
      <div className="text-start mb-16 ml-24">
        <h2 className="text-4xl md:text-5xl font-bold">
          Experience
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-purple-700/40" />

        {/* Experience Items */}
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="relative pl-16"
            >
              {/* Glowing Dot */}
              <div
                className={`absolute left-4.5 top-2 w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-purple-500 shadow-[0_0_20px_#7c3aed]"
                    : "bg-gray-600"
                }`}
              />

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{exp.company}</h3>
                <p className="text-purple-400 font-medium">{exp.role}</p>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
