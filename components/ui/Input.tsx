import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  error?: string;
  label?: string;
}

const Input = (props: InputProps) => {
  const { inputClass, error, label, ...rest } = props;
  return (
    <div className="w-full">
      <div className="mb-0">
        {label && (
          <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
            {label}
          </label>
        )}
        <input
          {...rest}
          type="text"
          className={`${
            error
              ? "border-2 border-red-500 focus:border-red-500"
              : "border-stroke focus:border-primary"
          } input-error`}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
