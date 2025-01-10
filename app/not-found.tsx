"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex flex-center flex-col min-h-screen">
        <Image src="/images/logo.svg" alt={APP_NAME} width={64} height={64} />
        <div className="flex flex-center flex-col space-y-4 shadow-xl rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center">
            404 - Page Not Found
          </h1>
          <p className="text-center">
            The page you are looking for does not exist.
          </p>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    </>
  );
}
