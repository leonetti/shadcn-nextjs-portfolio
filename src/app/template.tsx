'use client';

import React, { useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// Prevents instant page opening
function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  let pathname = usePathname();

  return (
    <>
      <AnimatePresence mode={'wait'} initial={false}>
        <motion.div
          className="w-full h-screen flex flex-row relative"
          key={pathname}
          initial={{
            opacity: 0,
            x: '-50vw',
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: '-50vw',
          }}
          transition={{
            type: 'tween',
            ease: 'backInOut',
            // ease: [0.5, 0, 0, 1.0],
            duration: 0.5,
          }}
        >
          {/* Completing page exit animation and load new page */}
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
