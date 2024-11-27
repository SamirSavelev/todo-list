import { FC } from "react";
import { ProjectListType } from "../data/types";

interface FiltersProps {
  projects: ProjectListType;
}

export type FiltersType = FC<FiltersProps>;
