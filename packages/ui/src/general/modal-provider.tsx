"use client";

import { useMounted } from "../hooks/use-mounted";



export const ModalProvider = () => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <SignInModal /> */}
      {/* <LanguageModal /> */}
      {/* add your own modals here... */}
    </>
  );
};
