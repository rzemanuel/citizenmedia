'use client';

import SeoMeta from "@/partials/SeoMeta";
import { 
  BsShare, 
  BsPeople, 
  BsGraphUp, 
  BsGeoAlt,
  BsMegaphone, 
  BsBarChart, 
  BsPersonCircle,
  BsChatDots, 
  BsCalendarEvent, 
  BsHeart,
  BsCamera,
  BsMessenger
} from "react-icons/bs";

export default function Page() {
  const content = {
    title: "Social Media Advertising",
    subtitle: "Engage your community and promote your services",
    description: "Our strategies go beyond engagement, aiming to educate, build trust, and strengthen your online presence across platforms with tailored social media campaigns.",
    stats: [
      { number: "3B+", label: "Active Meta Users" },
      { number: "45%", label: "Average Engagement Rate" },
      { number: "2.8x", label: "ROI Improvement" }
    ],
    howWeDrive: {
      title: "How We Drive Results",
      subtitle: "Strategic Social Media Marketing for Healthcare",
      points: [
        {
          icon: <BsShare className="text-4xl text-primary group-hover:text-white" />,
          title: "Engaging Content",
          desc: "Create engaging, healthcare-focused content that speaks to your audience and builds meaningful connections."
        },
        {
          icon: <BsPeople className="text-4xl text-primary group-hover:text-white" />,
          title: "Advanced Targeting",
          desc: "Use sophisticated targeting to reach the demographics and interests that matter most to your healthcare practice."
        },
        {
          icon: <BsGraphUp className="text-4xl text-primary group-hover:text-white" />,
          title: "Performance Analysis",
          desc: "Analyze and refine campaigns to enhance social engagement and maximize return on investment."
        }
      ]
    },
    targetingStrategies: [
      { 
        icon: <BsHeart className="text-3xl mb-4 text-primary" />,
        title: "Condition-Based",
        desc: "Target patients based on health interests and conditions" 
      },
      { 
        icon: <BsGeoAlt className="text-3xl mb-4 text-primary" />,
        title: "Geo-Targeting",
        desc: "Focus on local communities to drive clinic engagement" 
      },
      { 
        icon: <BsPersonCircle className="text-3xl mb-4 text-primary" />,
        title: "Custom Audiences",
        desc: "Leverage CRM data to nurture patient relationships" 
      },
      { 
        icon: <BsBarChart className="text-3xl mb-4 text-primary" />,
        title: "Lookalike Audiences",
        desc: "Expand reach with similar patient profiles" 
      }
    ],
    channels: {
      title: "Multi-Channel Excellence",
      subtitle: "Comprehensive Platform Coverage",
      description: "We leverage key social platforms to maximize your reach and impact:",
      points: [
        { 
          icon: <BsCamera className="text-3xl text-primary" />,
          title: "Instagram Stories & Reels",
          desc: "Engage audiences with dynamic, educational short-form content" 
        },
        { 
          icon: <BsMessenger className="text-3xl text-primary" />,
          title: "Messenger Ads",
          desc: "Facilitate direct patient communication and appointment booking" 
        }
      ]
    },
    strategies: [
      { 
        icon: <BsChatDots className="text-3xl mb-4 text-primary" />,
        title: "Educational Campaigns",
        desc: "Share valuable health information and build trust" 
      },
      { 
        icon: <BsCalendarEvent className="text-3xl mb-4 text-primary" />,
        title: "Event Promotions",
        desc: "Drive attendance for health fairs and webinars" 
      },
      { 
        icon: <BsMegaphone className="text-3xl mb-4 text-primary" />,
        title: "Service Highlights",
        desc: "Showcase your key medical specialties" 
      }
    ]
  };

  return (
    <>
      <SeoMeta title="Social Media Advertising | Healthcare Marketing Solutions" />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {content.title}
            </h1>
            <p className="text-2xl font-medium text-gray-600 mb-4">
              {content.subtitle}
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              {content.description}
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Drive Results */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{content.howWeDrive.title}</h2>
            <p className="text-xl text-gray-600">{content.howWeDrive.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.howWeDrive.points.map((point, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-xl bg-white shadow-sm hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{point.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Strategies */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Advanced Targeting for Healthcare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.targetingStrategies.map((strategy, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{strategy.title}</h3>
                <p className="text-gray-600 text-center">{strategy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{content.channels.title}</h2>
            <p className="text-xl text-gray-600">{content.channels.subtitle}</p>
            <p className="text-lg mt-4 text-gray-700">{content.channels.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.channels.points.map((point, i) => (
              <div key={i} className="p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{point.title}</h3>
                <p className="text-gray-600 text-center">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Strategies */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Creative Strategies for Success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.strategies.map((strategy, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center">
                  {strategy.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}