import SeoMeta from "@/partials/SeoMeta";
import { BsSpeedometer, BsGear, BsArrowRepeat, BsGraphUp, BsShield, BsBullseye, 
         BsDisplay, BsTv, BsMusicNote, BsNewspaper, BsLightning, BsPeople } from "react-icons/bs";
import Line from "@/components/line";

const Programmatic = () => {
  const content = {
    title: "Programmatic Advertising",
    subtitle: "Precision-Targeted Healthcare Marketing",
    description: "Transform your healthcare marketing with AI-powered programmatic advertising that delivers exceptional ROI. Our platform combines healthcare-specific data intelligence with cutting-edge targeting to reach the right medical professionals and patients at the perfect moment.",
    stats: [
      { number: "85%", label: "Average Campaign Performance Improvement" },
      { number: "3x", label: "Better Targeting Accuracy" },
      { number: "40%", label: "Lower Cost Per Acquisition" }
    ],
    howWeDrive: {
      title: "Powering Your Success",
      subtitle: "Industry-Leading Healthcare Marketing Technology",
      points: [
        {
          icon: <BsSpeedometer className="text-4xl text-primary group-hover:text-white" />,
          title: "Healthcare Data Precision",
          desc: "Leverage HIPAA-compliant data and advanced analytics to precisely target healthcare professionals and patients with relevant conditions and interests."
        },
        {
          icon: <BsGear className="text-4xl text-primary group-hover:text-white" />,
          title: "Real-Time Optimization",
          desc: "Our AI-powered bidding engine continuously optimizes your campaigns, ensuring maximum impact while maintaining efficient cost per acquisition."
        },
        {
          icon: <BsArrowRepeat className="text-4xl text-primary group-hover:text-white" />,
          title: "Continuous Improvement",
          desc: "Benefit from machine learning algorithms that analyze campaign performance in real-time, automatically adjusting targeting and creative elements."
        }
      ]
    },
    channels: [
      { 
        icon: <BsDisplay className="text-3xl mb-4 text-primary" />,
        title: "Display Advertising",
        desc: "Dynamic, visually engaging ads across premium healthcare websites and medical platforms" 
      },
      { 
        icon: <BsTv className="text-3xl mb-4 text-primary" />,
        title: "Connected TV (CTV)",
        desc: "Targeted streaming TV campaigns on platforms like Roku, Hulu, and medical education channels" 
      },
      { 
        icon: <BsMusicNote className="text-3xl mb-4 text-primary" />,
        title: "Audio Advertising",
        desc: "Strategic placement on medical podcasts and healthcare professional streaming services" 
      },
      { 
        icon: <BsNewspaper className="text-3xl mb-4 text-primary" />,
        title: "Native Advertising",
        desc: "Contextually relevant content integration across trusted healthcare platforms" 
      }
    ],
    dsps: {
      title: "Healthcare-Specific Demand Side Platforms",
      subtitle: "Specialized Technology for Medical Marketing",
      description: "Unlike generic advertising platforms, our healthcare-focused DSPs deliver unmatched precision and compliance:",
      points: [
        { 
          icon: <BsBullseye className="text-3xl text-primary" />,
          title: "Condition-Based Targeting",
          desc: "Access exclusive datasets for targeting specific health conditions and treatment journeys" 
        },
        { 
          icon: <BsPeople className="text-3xl text-primary" />,
          title: "HCP Targeting",
          desc: "Reach healthcare professionals with NPI-level accuracy and specialty-specific messaging" 
        }
      ]
    },
    benefits: [
      { 
        icon: <BsLightning className="text-3xl mb-4 text-primary" />,
        title: "Improved Efficiency",
        desc: "Eliminate wasted spend with precise medical audience targeting" 
      },
      { 
        icon: <BsGraphUp className="text-3xl mb-4 text-primary" />,
        title: "Enhanced Precision",
        desc: "Target by condition, specialty, geography, and treatment phase" 
      },
      { 
        icon: <BsShield className="text-3xl mb-4 text-primary" />,
        title: "Complete Compliance",
        desc: "Built-in HIPAA compliance and healthcare marketing regulations" 
      }
    ]
  };

  return (
    <>
      <SeoMeta title="Programmatic Advertising | Healthcare Marketing Solutions" />
      
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

      {/* Channels */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Multi-Channel Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.channels.map((channel, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{channel.title}</h3>
                <p className="text-gray-600 text-center">{channel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSPs */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{content.dsps.title}</h2>
            <p className="text-xl text-gray-600">{content.dsps.subtitle}</p>
            <p className="text-lg mt-4 text-gray-700">{content.dsps.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.dsps.points.map((point, i) => (
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Our Platform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programmatic;