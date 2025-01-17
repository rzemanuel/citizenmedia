import SeoMeta from "@/partials/SeoMeta";
import { 
  BsSearch, 
  BsCrosshair, 
  BsGraphUp, 
  BsGeoAlt,
  BsMegaphone, 
  BsSpeedometer, 
  BsArrowRepeat,
  BsBarChart, 
  BsRocket, 
  BsBullseye 
} from "react-icons/bs";

const Page = () => {
  const content = {
    title: "Search Marketing",
    subtitle: "Dominate search results and become the top choice for patients",
    description: "From creating custom keyword strategies to managing PPC campaigns, we help you drive qualified traffic to your website and convert visitors into patients.",
    stats: [
      { number: "1st", label: "Page Search Results" },
      { number: "40%", label: "Average CTR Improvement" },
      { number: "2x", label: "Conversion Rate Increase" }
    ],
    howWeDrive: {
      title: "How We Drive Results",
      subtitle: "Strategic Search Marketing for Healthcare",
      points: [
        {
          icon: <BsCrosshair className="text-4xl text-primary group-hover:text-white" />,
          title: "Keyword Strategy",
          desc: "Develop detailed keyword strategies tailored to the healthcare sector, focusing on patient search intent and medical terminology."
        },
        {
          icon: <BsMegaphone className="text-4xl text-primary group-hover:text-white" />,
          title: "Compelling Ad Copy",
          desc: "Craft compelling ad copy designed to inspire action, highlighting your unique value proposition and medical expertise."
        },
        {
          icon: <BsGraphUp className="text-4xl text-primary group-hover:text-white" />,
          title: "Landing Page Optimization",
          desc: "Optimize landing pages to create a seamless user experience and boost conversions, ensuring HIPAA compliance throughout."
        }
      ]
    },
    keywordStrategies: [
      { 
        icon: <BsSearch className="text-3xl mb-4 text-primary" />,
        title: "Condition-Specific Keywords",
        desc: "Target phrases patients use when researching symptoms or conditions" 
      },
      { 
        icon: <BsSpeedometer className="text-3xl mb-4 text-primary" />,
        title: "Service Line Keywords",
        desc: "Emphasize searches related to your medical specialties and services" 
      },
      { 
        icon: <BsGeoAlt className="text-3xl mb-4 text-primary" />,
        title: "Geo-Targeted Keywords",
        desc: "Capture local search intent with location-specific terms and phrases" 
      },
      { 
        icon: <BsBarChart className="text-3xl mb-4 text-primary" />,
        title: "Intent-Based Keywords",
        desc: "Focus on terms that indicate high probability of conversion" 
      }
    ],
    adPlacements: {
      title: "Strategic Ad Placement",
      subtitle: "Maximize Visibility Where It Matters",
      description: "Our comprehensive approach ensures your ads appear in the most impactful positions:",
      points: [
        { 
          icon: <BsBullseye className="text-3xl text-primary" />,
          title: "Search Engine Results Pages",
          desc: "Appear prominently in Google Ads to capture intent-driven clicks" 
        },
        { 
          icon: <BsGeoAlt className="text-3xl text-primary" />,
          title: "Local Service Ads",
          desc: "Prioritize localized searches to attract nearby patients seeking care" 
        }
      ]
    },
    benefits: [
      { 
        icon: <BsRocket className="text-3xl mb-4 text-primary" />,
        title: "Immediate Results",
        desc: "Capture urgent patient needs with rapid visibility" 
      },
      { 
        icon: <BsCrosshair className="text-3xl mb-4 text-primary" />,
        title: "Precision Targeting",
        desc: "Reach ideal audiences with demographic and intent filters" 
      },
      { 
        icon: <BsArrowRepeat className="text-3xl mb-4 text-primary" />,
        title: "Scalability",
        desc: "Adapt campaigns as your service offerings evolve" 
      }
    ]
  };

  return (
    <>
      <SeoMeta title="Search Marketing | Healthcare Marketing Solutions" />
      
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

      {/* Keyword Strategies */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Innovative Keyword Strategies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.keywordStrategies.map((strategy, i) => (
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

      {/* Ad Placements */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{content.adPlacements.title}</h2>
            <p className="text-xl text-gray-600">{content.adPlacements.subtitle}</p>
            <p className="text-lg mt-4 text-gray-700">{content.adPlacements.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.adPlacements.points.map((point, i) => (
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
          <h2 className="text-4xl font-bold mb-16 text-center">Value for Healthcare Advertisers</h2>
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

export default Page;