import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Mubin', lastName: 'Shaikh',email: 'shaikhmubin572@gmail.com',
    $id: '0',
    userId: '12',
    dwollaCustomerUrl: '0',
    dwollaCustomerId: '0',
    name: '0',
    address1: '0',
    city: '0',
    state: '0',
    postalCode: '0',
    dateOfBirth:'0',
    ssn: '0',
  };
  
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
} 
