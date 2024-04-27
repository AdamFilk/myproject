import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <section className="my-5 w-full">
      <div className="h-[1px] w-full bg-gray-400" />
      <div className="mx-auto w-full max-w-screen-xl p-3">
        <h1 className="mt-5 max-w-4xl text-start text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug">
          Socials
        </h1>
        <div className="mb-5 h-2 w-40 bg-gradient-to-r from-rose-500 to-red-500" />
        <div className="flex items-center justify-start gap-4">
          <SocialIcon
            url="https://twitter.com/danielfaux0308"
            bgColor="transparent"
            network="x"
            className="transition-color h-10 w-10 rounded-full bg-red-500 duration-150 hover:bg-black"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/aung-chan-o-868983152/"
            bgColor="transparent"
            className="transition-color h-10 w-10 rounded-full bg-red-500 duration-150 hover:bg-sky-700"
          />
          <SocialIcon
            url="https://github.com/AdamFilk"
            bgColor="transparent"
            className="transition-color h-10 w-10 rounded-full bg-red-500 duration-150 hover:bg-black"
          />
        </div>
        <div className="bg-gray-40 my-5 h-[1px] w-full" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-300">
            Created and Designed by &copy; Aung Chan Oo
          </p>
        </div>
      </div>
    </section>
  );
}
