'use client';

import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

type FrameVariant = 1 | 2 | 3;

interface ImageFrameProps {
  imagePath: string;
  alt: string;
  variant?: FrameVariant;
}

const ImageFrame = ({ imagePath, alt, variant = 1 }: ImageFrameProps) => {
  const frames = {
    1: (
      <div className="relative w-full h-full">
        <svg className="absolute -top-8 -right-8 w-24 h-24 text-emerald-300/40" viewBox="0 0 100 100">
          <path d="M50,10 Q80,10 90,40 Q100,70 70,90 Q40,100 10,70 Q0,40 30,10" fill="currentColor"/>
        </svg>
        <svg className="absolute -bottom-6 -left-6 w-20 h-20 text-rose-300/40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor"/>
        </svg>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={imagePath}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
    2: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
        <div className="absolute inset-0 bg-secondary/5 rounded-2xl transform -translate-x-2 -translate-y-2"></div>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={imagePath}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
    3: (
      <div className="relative w-full h-full">
        <svg className="absolute -top-4 -right-4 w-full h-full text-rose-300/30" viewBox="0 0 100 100">
          <rect x="70" y="0" width="30" height="100" fill="currentColor"/>
        </svg>
        <svg className="absolute -bottom-4 -left-4 w-32 h-32 text-yellow-200/40" viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0" fill="currentColor"/>
        </svg>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={imagePath}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    )
  };

  return frames[variant] || frames[1];
};

export default function Page() {
  const content = {
    sections: [
      {
        title: "Who We Are",
        text: "Citizen Media Group is a trusted partner for hospitals and healthcare organizations, offering cutting-edge paid media solutions. Our mission is to amplify your message, enhance patient engagement, and deliver measurable outcomes that drive your success.",
        image: "/images/banner/banner-image.jpg",
        alt: "Team members collaborating on healthcare marketing strategy"
      },
      {
        title: "Our Approach",
        text: "We combine deep industry knowledge with innovative digital marketing strategies. By understanding the unique challenges and regulations of the healthcare sector, we ensure every campaign is compliant, impactful, and aligned with your organizational goals.",
        image: "/images/banner/banner-image.jpg",
        alt: "Healthcare marketing specialists analyzing campaign data"
      },
      {
        title: "Our Team",
        text: "Our team consists of marketing experts, data analysts, and healthcare specialists who work collaboratively to create campaigns that resonate with your audience and deliver unparalleled results.",
        image: "/images/banner/banner-image.jpg",
        alt: "Citizen Media Group team members in a strategic planning session"
      }
    ],
    values: [
      "Excellence in execution",
      "Commitment to healthcare",
      "Transparency, integrity, and trust",
      "Driving measurable impact"
    ]
  };

  return (
    <>
      <SeoMeta title="About Us | Citizen Media Group" />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              About Us
            </h1>
            <p className="text-xl text-gray-700">
              We're dedicated to transforming healthcare marketing through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {content.sections.map((section, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container max-w-6xl mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <ImageFrame 
                  imagePath={section.image}
                  alt={section.alt}
                  variant={((index % 3) + 1) as 1 | 2 | 3}
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-700">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <BsCheckCircle className="text-3xl text-primary" />
                </div>
                <p className="text-lg font-medium text-center text-gray-800">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Healthcare Marketing?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Partner with us to create impactful, compliant, and results-driven marketing campaigns.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Started Today
          </button>
        </div>
      </section> */}
    </>
  );
}