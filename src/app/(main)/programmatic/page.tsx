import SeoMeta from "@/partials/SeoMeta";
import { BsSpeedometer, BsGear, BsArrowRepeat } from "react-icons/bs";
import Line from "@/components/line";

const Programmatic  = () => {
 const content = {
   title: "Programmatic Advertising",
   description: "Programmatic advertising enables precision targeting to deliver your message to the right audience at the right time on the most effective platforms. Our solutions are powered by data-driven insights and designed to optimize your campaigns for maximum ROI.",
   howWeDrive: {
     title: "How We Drive Results",
     points: [
       {
         icon: <BsSpeedometer className="text-4xl text-primary" />,
         title: "Healthcare Data Precision",
         desc: "Utilize healthcare-specific data to precisely target patients and caregivers"
       },
       {
         icon: <BsGear className="text-4xl text-primary" />,
         title: "Real-Time Optimization",
         desc: "Implement real-time bidding to maximize the efficiency of your ad spend"
       },
       {
         icon: <BsArrowRepeat className="text-4xl text-primary" />,
         title: "Continuous Improvement",
         desc: "Monitor and adjust campaigns for sustained improvement and results"
       }
     ]
   },
   channels: [
     { title: "Display Advertising", desc: "High-impact visuals across websites and apps" },
     { title: "Connected TV (CTV)", desc: "Tailored messages on Roku, Hulu & more" },
     { title: "Audio Ads", desc: "Engage listeners on podcasts and streaming services" },
     { title: "Native Advertising", desc: "Seamless content integration across platforms" }
   ],
   dsps: {
     title: "Healthcare-Specific DSPs",
     description: "Unlike general-purpose platforms like Trade Desk or DV360, we leverage healthcare-dedicated DSPs for:",
     points: [
       { title: "Condition-Based Targeting", desc: "Precise data for specific health concerns" },
       { title: "HCP Targeting", desc: "NPI-based data for unparalleled accuracy" }
     ]
   },
   benefits: [
     { title: "Improved Efficiency", desc: "Focus on medical audiences, eliminate waste" },
     { title: "Enhanced Precision", desc: "Target by condition, specialty, region" },
     { title: "Compliance", desc: "HIPAA-compliant data security standards" }
   ]
 };

 return (
   <>
     <SeoMeta title="Programmatic Advertising" />
     <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
       <div className="container max-w-6xl mx-auto px-4">
         <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
           {content.title}
         </h1>
         <p className="text-xl leading-relaxed max-w-3xl">
           {content.description}
         </p>
       </div>
     </section>

     <section className="py-16">
       <div className="container max-w-6xl mx-auto px-4">
         <div className="grid md:grid-cols-3 gap-8">
           {content.howWeDrive.points.map((point, i) => (
             <div 
               key={i} 
               className="group p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
             >
               <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                 {point.icon}
               </div>
               <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
               <p className="text-gray-600">{point.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <section className="py-16 bg-white">
       <div className="container max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-bold mb-12">Channels We Use</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {content.channels.map((channel, i) => (
             <div key={i} className="p-6 border-l-2 border-primary hover:bg-gray-50 transition-colors">
               <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
               <p className="text-gray-600">{channel.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
       <div className="container max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-bold mb-4">{content.dsps.title}</h2>
         <p className="text-xl mb-8">{content.dsps.description}</p>
         <div className="grid md:grid-cols-2 gap-8">
           {content.dsps.points.map((point, i) => (
             <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
               <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
               <p className="text-gray-600">{point.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <section className="py-16">
       <div className="container max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-bold mb-12 text-center">Why It Works</h2>
         <div className="grid md:grid-cols-3 gap-8">
           {content.benefits.map((benefit, i) => (
             <div key={i} className="text-center p-6">
               <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
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