"use client";

import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let scroll: InstanceType<
      typeof import("locomotive-scroll").default
    > | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
          smoothWheel: true,
        },
      });
    })();

    return () => {
      scroll?.destroy();
    };
  }, []);

  return <>{children}</>;
}
