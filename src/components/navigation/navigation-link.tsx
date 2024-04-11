'use-client';

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { type SiteConfig } from '@/config/site';

type NavigationConfigProps = SiteConfig['navItems'][0];

type NavigationLinkProps = {
  href: NavigationConfigProps['href'];
  icon: NavigationConfigProps['icon'];
  label?: NavigationConfigProps['label'];
  closeNavigationMenu: () => void;
};

const NavigationLink = ({
  label,
  href,
  icon: Icon,
  closeNavigationMenu,
}: NavigationLinkProps) => {
  return (
    <NavigationMenuItem asChild>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          onClick={closeNavigationMenu}
          className="text-neutral-400 flex p-1 rounded stroke-0 hover:stroke-neutral-100 stroke-neutral-400 hover:text-neutral-200 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
        >
          {<Icon className="min-w-8 w-8 min-h-8 h-8 stroke-0" />}
          {label && (
            <p className="text-inherit overflow-clip whitespace-nowrap tracking-wide">
              {label}
            </p>
          )}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavigationLink;
