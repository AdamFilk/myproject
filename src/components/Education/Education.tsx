import { Card, CardDescription, CardTitle } from '../ui/Card/Card';

export default function Education() {
  const educations = [
    {
      title: 'Highschool',
      from: 'B.E.H.S No(1) Dagon',
      graduated: '2016',
    },
    {
      title: 'Level 4 Diploma in Computing',
      from: 'NCC',
      graduated: 'Nov - 2017',
    },
    {
      title: 'Level 5 Diploma in Computing',
      from: 'NCC',
      graduated: 'May 2019',
    },
    {
      title: 'Bachelor in Computing',
      from: 'University of Greenwich',
      graduated: 'Jul 2020',
    },
  ];
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <h1 className="mt-5 max-w-4xl text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug">
        Education
      </h1>
      <div className="mb-5 h-2 w-40 bg-gradient-to-r from-rose-500 to-red-500" />
      <div className="flex flex-col flex-wrap items-start justify-center gap-4 md:flex-row">
        {educations.map((edu, index) => (
          <Card key={index} className="h-52 w-[330px]">
            <CardTitle>
              {edu.title}
              <div className="mb-3 mt-3 h-1 w-10 bg-gradient-to-r from-rose-500 to-red-500" />
            </CardTitle>
            <CardDescription className="mt-4">
              <p>{edu.graduated}</p>
              <p>{edu.from}</p>
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
