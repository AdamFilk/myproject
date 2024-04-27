'use client';
import * as React from 'react';
import { cn } from '@/libs/utils/cn';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              var(--blue-500),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/textarea rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          rows={10}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 duration-400 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black  transition file:border-0 
            file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 disabled:cursor-not-allowed
            disabled:opacity-50 group-hover/textarea:shadow-none
            dark:bg-zinc-800
            dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600
            `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
