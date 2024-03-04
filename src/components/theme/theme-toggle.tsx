'use client';

import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ThemeToggle = () => {
  const form = useForm();
  const { setTheme, theme } = useTheme();
  const [cta, SetCta] = useState('Toggle Mode');

  const handleSubmit = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    SetCta(theme === 'light' ? 'Light Mode' : 'Dark Mode');
  }, [theme]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8"
      >
        <VisuallyHidden.Root>
          <FormField
            control={form.control}
            name="next-theme"
            render={({ field }) => (
              <FormItem hidden>
                <FormLabel>Theme Toggle</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Toggle Theme</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </VisuallyHidden.Root>

        <Button
          type="submit"
          className="text-neutral-400 flex gap-3 justify-stretch text-md p-1  w-full hover:text-neutral-200 hover:bg-neutral-700/30 bg-transparent h-auto items-center"
        >
          <div>
            <SunIcon className="min-w-8 w-8 min-h-8 h-8 dark:hidden" />
            <MoonIcon className="min-w-8 w-8 min-h-8 h-8 hidden dark:block" />
          </div>
          <p className="text-inherit overflow-clip whitespace-nowrap tracking-wide">
            {cta}
          </p>
        </Button>
      </form>
    </Form>
  );
};

export default ThemeToggle;
