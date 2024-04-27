import { cn } from '@/libs/utils/cn';

type ButtonProps = {
  className?: string;
  onClick: () => void;
  label: string;
};

export default function Button({ className, onClick, label }: ButtonProps) {
  return (
    <button
      className={cn(
        'transform rounded-full bg-red-500 px-12 py-4 font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:scale-105 hover:bg-red-400 ',
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
