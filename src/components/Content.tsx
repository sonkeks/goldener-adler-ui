import type {FunctionComponent, PropsWithChildren} from "react";

interface ContentProps extends PropsWithChildren {
  className?: string;
}

export const Content: FunctionComponent<ContentProps> = ({ children, className }) => {
  return (
    <div className={`max-w-6xl m-auto px-2 ${className ?? ""}`}>
      {children}
    </div>
  )
}
