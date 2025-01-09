import BlogCard from "@/components/BlogCard";
import TabContainer from "@/components/TabContainer";
import Line from "@/components/line";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import BannerShape from "../../shapes/banner-s-1";
import BannerShape2 from "../../shapes/banner-s-2";
import FeatureShape1 from "../../shapes/feature-s-1";
import FeatureShape2 from "../../shapes/feature-s-2";

interface Banner {
 title: string;
 images: {
   left: string;
   main: string;
   right: string;
 };
 facility: string[];
 content?: string;
}

interface FeaturePost {
 title: string;
 subtitle: string;
 description: string;
 image: string;
}

interface Blogs {
 title: string;
 subtitle: string;
 button: {
   label: string;
   link: string;
 };
}

interface FrontMatter {
 banner: Banner;
 process: any;
 feature_post: FeaturePost[];
 blogs: Blogs;
}

const { blog_folder } = config.settings;

const Home = () => {
 const homepage = getListPage("_index.md");
 const posts = getSinglePage(blog_folder);
 const { frontmatter } = homepage;
 const { banner, process, feature_post, blogs } = frontmatter as FrontMatter;
 const { images, facility } = banner;

 return (
   <>
     <SeoMeta {...frontmatter} />
     <section className="section banner relative overflow-hidden before:z-10 after:z-10">
       <div className="container relative z-30">
         <div className="row items-center">
           <div className="lg:col-6">
             <h1 className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px]" 
                 dangerouslySetInnerHTML={markdownify(banner.title)}
             />
             <p className="mb-6 text-lg"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
             />
             <form className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row">
               <input
                 type="search"
                 className="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
                 placeholder="Enter Your Email Address"
               />
               <button type="submit" className="btn btn-primary btn-md">
                 Get A Quote
               </button>
             </form>
             <div className="py-2">
               <hr className="h-[1px] border-0 border-b border-border/50 bg-transparent" />
             </div>
             <ul className="flex flex-wrap gap-x-6 gap-y-2">
               {facility.map((text: string, i: number) => (
                 <li key={i}>
                   <BsCheckLg className="mr-2 inline-block text-2xl text-emerald-400" />
                   <p className="inline-block align-middle text-lg font-medium text-dark">
                     {text}
                   </p>
                 </li>
               ))}
             </ul>
           </div>
           <div className="mx-auto max-w-[600px] pt-24 lg:col-6 lg:pt-0">
             <div className="image-block relative mr-[5.5%] md:mr-6 lg:ml-6">
               <Image
                 width={448}
                 height={564}
                 className="banner-image w-100 h-auto max-w-full"
                 src={images.main}
                 alt="banner"
               />
               <Image
                 width={211}
                 height={121}
                 className="absolute bottom-16 left-0 w-[40%] rounded-lg shadow-md"
                 src={images.left}
                 alt="banner-left"
               />
               <Image
                 width={211}
                 height={254}
                 className="absolute right-0 top-0 w-[30%] rounded-lg md:-right-32 md:top-14 md:w-[40%] xl:top-36"
                 src={images.right}
                 alt="banner-right"
               />
               <div className="pointer-events-none absolute left-[40px] top-[-50px] -z-20 w-[40%] select-none">
                 <BannerShape className="text-secondary" />
               </div>
               <div className="pointer-events-none absolute bottom-[-70px] right-[-130px] -z-20 w-[40%] select-none">
                 <BannerShape2 className="text-quinary" />
               </div>
             </div>
           </div>
         </div>
       </div>
       <Line className="line-bg absolute z-20" color="bg-line-yellow" />
     </section>

     <TabContainer {...process} />

     {feature_post.map((post, i) => (
       <section
         key={i}
         className="relative z-20 overflow-hidden"
       >
         <div className="container relative z-20">
           <div className="row gy-4 items-center">
             <div className={`lg:col-7 ${(i + 1) % 2 === 0 ? "order-2" : "order-1"}`}>
               <div className={`feature-clip-path-${i + 1} relative`}>
                 <Image
                   width={727}
                   height={613}
                   src={post.image}
                   className="mx-auto block"
                   alt="feature"
                 />
                 <div className="pointer-events-none absolute right-[100px] top-[-10px] -z-10 hidden select-none lg:block">
                   <FeatureShape1 className="text-quinary" />
                 </div>
                 <div className="pointer-events-none absolute bottom-[130px] left-0 -z-10 hidden select-none lg:block">
                   <FeatureShape2 className="text-secondary" />
                 </div>
               </div>
             </div>
             <div className={`lg:col-5 ${(i + 1) % 2 === 0 ? "order-1" : "order-2"}`}>
               <span className="mb-6 inline-block font-medium uppercase text-red-400">
                 {post.subtitle}
               </span>
               <div className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6">
                 <h2 className="font-semibold">{post.title}</h2>
               </div>
               <p className="pl-6 text-lg">{post.description}</p>
             </div>
           </div>
         </div>
         <Line className="line-bg absolute left-0 top-1/2 z-10 flex h-full w-full -translate-y-1/2 justify-between" color="bg-line-sky" />
       </section>
     ))}

     <section className="section-md articles relative z-20 overflow-hidden after:-z-10">
       <div className="container relative z-30">
         <div className="row items-end justify-between pb-12">
           <div className="lg:col-8 xl:col-6">
             <span className="mb-6 inline-block font-medium uppercase text-red-400">
               {blogs.subtitle}
             </span>
             <div className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0">
               <h2 className="font-semibold">{blogs.title}</h2>
             </div>
           </div>
           <div className="col-auto">
             <Link href={blogs.button.link} className="btn btn-outline-primary btn-sm">
               {blogs.button.label}
             </Link>
           </div>
         </div>
         <div className="row gy-4">
           {posts.slice(0, 3).map((post, i) => (
             <BlogCard key={i} data={post} />
           ))}
         </div>
       </div>
       <Line className="line-bg absolute z-20" color="bg-line-sky" />
     </section>
   </>
 );
};

export default Home;