import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { ReturnComponentType } from 'types';

type ButtonProps = {
  outline?: boolean;
  className: string;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  // onClick,
  outline,
  children,
  className,
}): ReturnComponentType => (
  <button
    type="button"
    // onClick={onClick}
    className={classNames('button', className, {
      'button--outline': outline,
    })}
  >
    {children}
  </button>
);
Button.defaultProps = {
  outline: false,
};
