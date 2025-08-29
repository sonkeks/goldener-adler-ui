import type {FunctionComponent, PropsWithChildren} from "react";

interface ContentProps extends PropsWithChildren {
  maxWidth?: string;
  className?: string;
}

export const Content: FunctionComponent<ContentProps> = ({ children, maxWidth, className }) => {
  return (
    <div className={`${className ?? ""}`}>
      <div className={`${maxWidth ?? "max-w-6xl"} m-auto px-5`}>
        {children}
      </div>
    </div>
  )
}
