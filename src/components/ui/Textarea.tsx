import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-white"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full rounded-xl border bg-[var(--color-bg-card)] px-4 py-3
            text-white placeholder-[var(--color-text-dim)]
            transition-all duration-200 resize-none
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50
            disabled:cursor-not-allowed disabled:opacity-50
            ${error
              ? 'border-red-500 focus:ring-red-500/50'
              : 'border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
            }
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-[var(--color-text-dim)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
