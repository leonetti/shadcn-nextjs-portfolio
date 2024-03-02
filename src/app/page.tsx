import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hello</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>World</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </main>
  );
}
