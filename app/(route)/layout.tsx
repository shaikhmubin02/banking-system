import Sidebar from "@/components/Sidebar";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) { 
    const loggedIn = {firstName: 'Mubin', lastName: 'Shaikh'};

    return (
      <main className="flex h-screen w-full font-inter">  
        <Sidebar user={loggedIn} />   
        
        {children}
      </main>
    );
  }
  
