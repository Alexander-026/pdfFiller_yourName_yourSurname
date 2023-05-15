import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant: "primary" | "secondary";
};

const Button: FC<ButtonProps> = (
  { className, variant, children, ...rest },
  ref
) => {
  return (
    <button
      className={classNames(styles.button, className, variant)}
      {...rest}
      {...ref}
    >
      {children}
    </button>
  );
};

export default Button;
