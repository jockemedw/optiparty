import { Suspense } from "react";
import VerdictBoard from "@/components/VerdictBoard";

export default function Home() {
  return (
    <main>
      <Suspense>
        <VerdictBoard />
      </Suspense>
    </main>
  );
}
