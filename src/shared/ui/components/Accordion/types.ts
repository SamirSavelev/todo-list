import { FC, PropsWithChildren } from "react";

interface AccordionProps extends PropsWithChildren {
  title: string;
}

export type AccordionType = FC<AccordionProps>;
