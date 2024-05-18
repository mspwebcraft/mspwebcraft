import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaClass?: string;
  error?: string;
  label?: string;
}

const Textarea = (props: TextareaProps) => {
  const { textareaClass, error, label, ...rest } = props;
  return (
    <div className={`w-full ${textareaClass}`}>
      <div className="mb-2">
        {label && (
          <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
            {label}
          </label>
        )}
        <textarea
          {...rest}
          className={`${
            error
              ? "border-2 border-red-500 focus:border-red-500"
              : "border-stroke focus:border-primary"
          } input-error`}
        ></textarea>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Textarea;
