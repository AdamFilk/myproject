'use client';
import { cn } from '@/libs/utils/cn';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/Input/Input';
import { Textarea } from '../ui/Input/TextArea';
import { useScroll } from '@/libs/providers/scroll-context-provider';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const { contactSectionRef } = useScroll();
  const [submitting, setSubmitting] = useState<boolean>(false);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setSubmitting(true);
    event.preventDefault();
    event.currentTarget.checkValidity();
    try {
      const formData = new FormData(event.currentTarget);

      const jsonData: { [key: string]: string } = {};

      // Convert FormData to JSON object
      formData.forEach((value, key) => {
        jsonData[key] = value.toString();
      });

      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle response if necessary
      const data = await response.json();
      // ...
      toast.success(`Email sent!. Get back to you soon.`);
    } catch (e) {
      toast.error('Sorry, something went wrong');
    }
    setSubmitting(false);
  }

  return (
    <section
      className="my-20 flex flex-col items-center justify-center"
      ref={contactSectionRef}
    >
      <h1 className="mt-5 max-w-4xl text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug">
        Contact
      </h1>
      <div className="mb-5 h-2 w-40 bg-gradient-to-r from-rose-500 to-red-500" />
      <div className="flex w-full flex-col flex-wrap items-start justify-center gap-4 md:flex-row">
        <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 dark:border-white/[0.2] dark:bg-black md:rounded-2xl md:p-8">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Send me an email
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            {`Let's keep in touch`}
          </p>

          <form className="my-8" onSubmit={onSubmit}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <LabelInputContainer>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="firstname"
                  placeholder="Your name"
                  type="text"
                  name="name"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="example@gmail.com"
                type="email"
                name="email"
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                name="message"
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              <div className="flex items-center justify-center">
                Send
                {submitting ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 animate-spin fill-red-500 text-gray-200 dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  <> &rarr;</>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};
