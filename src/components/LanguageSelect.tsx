import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/translations/useTranslation';

export function LanguageSelect() {
  const { setLanguage } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ghost">
          <Globe className="h-[1.1rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Language Select</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="hover:!bg-slate-100" onClick={() => setLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:!bg-slate-100" onClick={() => setLanguage('fr')}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:!bg-slate-100" onClick={() => setLanguage('pl')}>
          Polski
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
