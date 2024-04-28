import { createContext, LegacyRef, RefObject, useContext, useRef } from 'react';

// Define types for the context value
interface ScrollContextType {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  aboutSectionRef: any;
  workSectionRef: RefObject<HTMLElement>;
  contactSectionRef: RefObject<HTMLElement>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const workSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToSection,
        aboutSectionRef,
        workSectionRef,
        contactSectionRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext) as ScrollContextType;
};
