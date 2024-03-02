import * as React from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

const SiteLogo = () => {
  return (
    <Link href="/" className="text-3xl font-bold">
      Hello<span className="text-blue-500">World</span>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex gap-6 md:gap-10">
      <SiteLogo />
      <nav className="flex gap-6">
        {siteConfig.navItems.map(
          (item, index) =>
            item.href && (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className="flex items-center text-sm font-medium text-muted-foreground"
              >
                {item.label}
              </Link>
            )
        )}
      </nav>
    </div>
  );
};

export default Header;
