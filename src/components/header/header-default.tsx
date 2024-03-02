'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import siteConfig from '@/config/site';

const SiteLogo = () => {
  return (
    <Link href="/" className="text-3xl font-bold">
      Hello<span className="text-blue-500">World</span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          {siteConfig.navItems.map((item, index) => (
            <NavigationMenuItem key={`${item.href}-${index}`}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <SiteLogo />
      <NavigationMenu>
        <NavigationMenuList>
          {siteConfig.navItems.map((item, index) => (
            <NavigationMenuItem key={`${item.href}-${index}`}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
