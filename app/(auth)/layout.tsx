import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="">
          <Card className="ml-10 mr-10">
            <CardContent className="mt-6">
            <Image 
            src="/icons/homepage.png"
            alt="homepage image"
            width={800}
            height={800}
            className="rounded"
          />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}