"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      type="button"
      className="rounded-full bg-white px-12 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={() => router.back()}
    >
      Não
    </Button>
  );
};

export default BackButton;
