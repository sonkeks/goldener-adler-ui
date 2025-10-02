import useTitle from "@/hooks/useTitle";
import type {FunctionComponent, PropsWithChildren} from "react";

interface PageProps extends PropsWithChildren {
  title?: string,
}

export const Page: FunctionComponent<PageProps> = ({children, title}) => {
  useTitle(title);
  return <>{children}</>
}
