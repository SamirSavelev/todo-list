import { FC, SVGProps } from "react";
import { ReactComponent as ProjectsIcon } from "@assets/menu/projects.svg";
import { ReactComponent as PrifileIcon } from "@assets/menu/profile.svg";
import { ReactComponent as SettingsIcon } from "@assets/menu/settings.svg";

interface MenuItem {
  title: string;
  href: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export const menu: Array<MenuItem> = [
  {
    title: "Проекты",
    href: "/projects",
    Icon: ProjectsIcon,
  },
  {
    title: "Профиль",
    href: "/profile",
    Icon: PrifileIcon,
  },
  {
    title: "Настройки",
    href: "/settings",
    Icon: SettingsIcon,
  },
];
