import { FC, SVGProps } from "react";
import { ReactComponent as ProjectsIcon } from "@assets/menu/projects.svg";
import { ReactComponent as PrifileIcon } from "@assets/menu/profile.svg";
import { ReactComponent as SettingsIcon } from "@assets/menu/settings.svg";

interface MenuItem {
  href: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export const menu: Array<MenuItem> = [
  {
    href: "/projects",
    Icon: ProjectsIcon,
  },
  {
    href: "/profile",
    Icon: PrifileIcon,
  },
  {
    href: "/settings",
    Icon: SettingsIcon,
  },
];
