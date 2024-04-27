import { Card, CardDescription, CardImage, CardTitle } from '../ui/Card/Card';

const projects = [
  {
    coverImage: '',
    title: 'Fresh Moe',
    description:
      'Fresh Moe was a start up company that aims to revolutionize fresh fruits and vegetable industry on a large scale. I wrote Backend services for E-Commerce, Delivery, Inventory, Stock applications for flutter app. E-Commerce web apps and business landing pages.',
    link: '',
    tools: ['Laravel', 'PHP', 'Vue'],
  },
  {
    coverImage: '',
    title: 'Lewre Bespoke',
    description:
      'Lewre is a well known shoe company based in Malaysia. Took part in frontend, UI development for their new E-commerce web application',
    link: '',
    tools: ['React', 'MUI'],
  },
  {
    coverImage: '',
    title: 'Tharapa',
    description:
      'Tharapa is a online shopping website and chatbot solution for social media platforms and others. I maintined already existing features on the project and added new features as per client requests and enhancements.',
    link: '',
    tools: ['Laravel', 'PHP', 'Vue', 'Vuetify', 'Nodejs'],
  },
  {
    coverImage: '',
    title: 'Livechat',
    description:
      'Livechat is a chat solution that combines most of the popular messaging tools like messenger, viber and telegram. I maintined already existing features on the project and added new features as per client requests and enhancements.',
    link: '',
    tools: ['Laravel', 'PHP', 'Vue', 'Vuetify', 'Nodejs'],
  },
  {
    title: 'Burmese to English name translation',
    description:
      'This project is for translating names that are in burmese to english name for banks. I developed this project form scratch. I developed admin interface to add words for translation and to submit csv files to accept millions of name data. Then I wrote a backend service to translate those name.',
    link: '',
    tools: ['Laravel', 'PHP', 'Vue', 'Vuetify'],
  },
  {
    coverImage: '',
    title: 'DSLA POS',
    description:
      'DSLA POS is an all-in-one solution that involves, analytics, recommendations, e-commerce and POS. I developed backend services and frontend web and android solutions for backoffice and POS app.',
    link: '',
    tools: ['Nest', 'Node', 'React', 'React Native', 'Laravel', 'PHP'],
  },
  {
    coverImage: '',
    title: 'DSLA Gamespace',
    description:
      'DSLA Gamespace is a platform as a service where clients can integrate gamespace SDK or backend into their exsiting apps. I developed admin panel for managing games, platforms, users and gamification elements such as ads, rewards and progression ladder and React Native SDK to integrate on other apps',
    link: '',
    tools: ['Nest', 'Node', 'React', 'React Native'],
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
          <Card key={index} className="w-[330px]">
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
