import { type ReactNode } from 'react';

import classNames from 'clsx';

import cls from './Formcontrol.module.scss';

interface FormControlProps {
  id: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  children: ReactNode;
  className?: string;
}

export const FormControl = ({
  id,
  label,
  helperText,
  errorMessage,
  children,
  className = '',
  ...otherProps
}: FormControlProps) => (
  <div
    className={classNames(cls.fieldset, {}, [className])}
    {...otherProps}
  >
    {label && <label htmlFor={id}>{label}</label>}

    {children}

    {Boolean(helperText && !errorMessage) && 
      <span className={cls.helperText}>{helperText}</span>
    }

    {errorMessage && <span className={cls.error}>{errorMessage}</span>}
  </div>
);
