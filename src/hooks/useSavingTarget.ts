import { useEffect, useState } from 'react';

interface UseSavingsTargetProps {
  currentBalance: number;
  savingTarget: number;
}

const useSavingsTarget = ({ currentBalance, savingTarget }: UseSavingsTargetProps) => {
  const [hasReachedTarget, setHasReachedTarget] = useState<boolean>(false);

  useEffect(() => {
    if (currentBalance >= savingTarget && savingTarget !== 0) {
      setHasReachedTarget(true);
    } else {
      setHasReachedTarget(false);
    }
  }, [currentBalance, savingTarget]);

  return hasReachedTarget;
};

export default useSavingsTarget;