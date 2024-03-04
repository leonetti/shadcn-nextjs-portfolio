'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useAnimationControls } from 'framer-motion';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import NavigationLink from '@/components/navigation/navigation-link';
import siteConfig from '@/config/site';
import ThemeToggle from '@/components/theme/theme-toggle';

const containerVariants = {
  close: {
    width: '5rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
    transition: {
      type: 'easeInOut',
      duration: 0.5,
    },
  },
  open: {
    rotate: 180,
    transition: {
      type: 'easeInOut',
      duration: 0.5,
    },
  },
};

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  const handleOpenClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      containerControls.start('open');
      svgControls.start('open');
    } else {
      containerControls.start('close');
      svgControls.start('close');
    }
  }, [isOpen, containerControls, svgControls]);

  return (
    <motion.div
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="bg-neutral-900 text-md flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
        <Button
          className="p-1 rounded-full flex bg-transparent hover:bg-transparent"
          onClick={() => handleOpenClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200 max-w-none hover:stroke-neutral-400"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={svgVariants}
              animate={svgControls}
              initial="close"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Button>
      </div>

      <NavigationMenu className="flex flex-col gap-3 max-w-full justify-start items-stretch">
        {siteConfig.navItems.map((item, index) => (
          <NavigationLink
            href={item.href}
            label={item.label}
            icon={item.icon}
            key={`${item.href}-${index}`}
          />
        ))}
      </NavigationMenu>
      <ThemeToggle />
    </motion.div>
  );
};

export default MainNavigation;
