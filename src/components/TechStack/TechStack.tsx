import ReactSVG from '@/assets/images/react.svg';
import ReactNativeSVG from '@/assets/images/reactnative.svg';
import ExpressSVG from '@/assets/images/express.svg';
import JavascriptSVG from '@/assets/images/javascript.svg';
import NextSVG from '@/assets/images/nextjs.svg';
import NodeSVG from '@/assets/images/nodejs.svg';
import TypeScriptSVG from '@/assets/images/typescript.svg';
import PHPImg from '@/assets/images/PHP-logo.svg.png';
import LaravelSVG from '@/assets/images/laravel-2.svg';
import VueSVG from '@/assets/images/vue.svg';
import NestJSSVG from '@/assets/images/nest.png';
import Image from 'next/image';

const techstacks = [
  {
    name: 'Javascript',
    image: JavascriptSVG,
  },
  {
    name: 'Typescript',
    image: TypeScriptSVG,
  },
  {
    name: 'React',
    image: ReactSVG,
  },
  {
    name: 'React Native',
    image: ReactNativeSVG,
  },
  {
    name: 'Nextjs',
    image: NextSVG,
  },
  {
    name: 'Nodejs',
    image: NodeSVG,
  },
  {
    name: 'Express',
    image: ExpressSVG,
  },
  {
    name: 'Nestjs',
    image: NestJSSVG,
  },
  {
    name: 'PHP',
    image: PHPImg,
  },
  {
    name: 'Laravel',
    image: LaravelSVG,
  },
  {
    name: 'Vue',
    image: VueSVG,
  },
];
export default function TechStack() {
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <h1 className="mt-5 max-w-4xl text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug">
        Techstack
      </h1>
      <div className="mb-5 h-2 w-40 bg-gradient-to-r from-rose-500 to-red-500" />
      <div className="flex max-w-screen-xl flex-wrap items-center justify-center">
        {techstacks.map((tech, index) => (
          <div className="m-3" key={index}>
            <Image src={tech.image} alt={tech.name} width={120} height={120} />
            <p className="text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
