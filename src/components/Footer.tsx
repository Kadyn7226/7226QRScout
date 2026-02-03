// src/components/Footer.tsx
import { useQRScoutState } from '@/store/store';
import { Heart } from 'lucide-react';
// Import your specific logo here
import myLogo from '@/assets/7226_logo_animated2.svg';

export function Footer() {
  const teamNumber = useQRScoutState(state => state.formData.teamNumber);
  
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center justify-center p-2 gap-2">
        <div className="h-24 w-96">
          {/* Your animated logo used directly */}
          <img 
            src={myLogo} 
            alt="Team 7226 Logo" 
            className="h-full w-full object-contain" 
          />
        </div>
        
        {/* Shows heart and number for any team that isn't yours */}
        {teamNumber !== 7226 && (
          <>
            <Heart className="text-primary size-8 fill-primary" />
            <span className="text-2xl text-primary font-rhr-ns">
              {teamNumber}
            </span>
          </>
        )}
      </div>
    </footer>
  );
}
