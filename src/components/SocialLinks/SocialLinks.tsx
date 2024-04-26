import { SocialIcon } from 'react-social-icons';

export default function SocialLinks() {
  return (
    <div className="fixed right-3 top-0 z-10 flex h-screen items-center">
      <div className="glassBg flex flex-col items-center justify-center gap-4 rounded-full p-2">
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
    </div>
  );
}
