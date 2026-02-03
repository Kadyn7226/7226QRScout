import { Theme, useTheme } from '@/components/ThemeProvider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Computer, Moon, Sun } from 'lucide-react';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const handleValueChange = (value: Theme) => {
    if (value === 'light' || value === 'dark' || value === 'system') {
      setTheme(value);
    }
  };

  return (
  
      <ToggleGroupItem value="dark" aria-label="dark theme">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
     
    </ToggleGroup>
  );
}
