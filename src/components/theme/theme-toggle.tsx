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

const ThemeToggle = () => {
  const form = useForm();
  const { setTheme, theme } = useTheme();

  const handleSubmit = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8"
      >
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
        <Button type="submit" variant={null} className="w-6 p-0">
          <SunIcon className="dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </Button>
      </form>
    </Form>
  );
};

export default ThemeToggle;
