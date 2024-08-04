import { Card, CardDescription, CardImage, CardTitle } from '../ui/Card/Card';
import tharapaImg from '@/assets/images/tharapa.png';
import livechatImg from '@/assets/images/livechat.png';
import dslaPosImg from '@/assets/images/dsla.png';
import gamespaceImg from '@/assets/images/gamespace.png';
import freshmoeImg from '@/assets/images/freshmoe.png';
import easyEstateImg from '@/assets/images/easyestate-ss7.png';

const projects = [
  {
    coverImage: freshmoeImg,
    title: 'Fresh Moe',
    description:
      'Fresh Moe aimed to revolutionize the fresh fruits and vegetable industry on a large scale. I developed backend services for e-commerce, delivery, inventory, and stock management applications for the Flutter app, as well as e-commerce web apps and business landing pages.',
    link: '',
    tools: ['Laravel', 'PHP', 'Vue'],
  },
  {
    coverImage: tharapaImg,
    title: 'Tharapa',
    description:
      'Tharapa is an online shopping platform and chatbot solution for social media and other platforms. I maintained existing features and implemented new features based on client requests and enhancements.',
    link: '',
    tools: ['Laravel', 'PHP', 'Vue', 'Vuetify', 'Nodejs'],
  },
  {
    coverImage: livechatImg,
    title: 'Livechat',
    description:
      'Livechat is a comprehensive chat solution integrating popular messaging tools like Messenger, Viber, and Telegram. I maintained existing features and added new functionalities according to client requirements.',
    link: '',
    tools: ['Laravel', 'PHP', 'Vue', 'Vuetify', 'Nodejs'],
  },
  {
    coverImage: dslaPosImg,
    title: 'DSLA POS',
    description:
      'DSLA POS is an all-in-one solution encompassing analytics, recommendations, e-commerce, and POS functionalities. I developed backend services and frontend web and Android solutions for the back-office and POS app.',
    link: '',
    tools: ['Nest', 'Node', 'React', 'React Native', 'Laravel', 'PHP'],
  },
  {
    coverImage: gamespaceImg,
    title: 'DSLA Gamespace',
    description:
      'DSLA Gamespace is a platform-as-a-service allowing clients to integrate Gamespace SDK or backend into their existing apps. I developed the admin panel for managing games, platforms, users, and gamification elements such as ads, rewards, and progression ladders, along with a React Native SDK for integration into other apps.',
    link: '',
    tools: ['Nest', 'Node', 'React', 'React Native'],
  },
  {
    coverImage: easyEstateImg,
    title: 'Easy Estate',
    description:
      'Easy Estate is a real estate and properties platform. It enables users, agents, and admins to post available properties, promote them with boosting features, and handle inquiries. The platform supports both sale and rental use cases and includes multi-language support for an enhanced user experience.',
    link: '',
    tools: ['Next.js', 'Mantine', 'Tailwind', 'Nest.js'],
  },
];

export default function Projects() {
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <h1 className="mt-5 max-w-4xl text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug">
        Projects
      </h1>
      <div className="mb-5 h-2 w-40 bg-gradient-to-r from-rose-500 to-red-500" />
      <div className="flex max-w-screen-xl flex-wrap items-start justify-center gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="w-[100%] lg:w-[45%]">
            {project.coverImage && <CardImage image={project.coverImage} />}
            <CardTitle>
              {project.title}
              <div className="mb-3 mt-3 h-1 w-10 bg-gradient-to-r from-rose-500 to-red-500" />
            </CardTitle>
            <CardDescription className="mt-4">
              <p>{project.description}</p>
            </CardDescription>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {project.tools.map((tool: string, i) => (
                <span
                  key={i}
                  className="rounded-full bg-zinc-700 px-2 py-0 text-[0.9rem] text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
