"use client";

import { useState, useCallback } from "react";
import { useKonamiCode } from "./hooks/useKonamiCode";
import { FloatingBalloon } from "./FloatingBalloon";
import { AchievementModal } from "./AchievementModal";

export function KonamiCodeEasterEgg() {
  const [showBalloon, setShowBalloon] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleKonamiActivated = useCallback(() => {
    setShowBalloon(false);
    setShowModal(true);
  }, []);

  useKonamiCode(handleKonamiActivated);

  return (
    <>
      {showBalloon && <FloatingBalloon />}
      <AchievementModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
