import { useQRScoutState } from '@/store/store';


export function Footer() {
  const teamNumber = useQRScoutState(state => state.formData.teamNumber);
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center justify-center p-2 gap-2">
        <div className="h-24 w-96">
        <img src="src/assets/7226_logo_animated2.svg" alt="WavOps Logo">
        </div>
          </>
        )}
      </div>
    </footer>
  );
}
