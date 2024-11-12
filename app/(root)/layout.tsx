import SideBar from '@/components/SideBar'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'AAA', lastName: 'XXX'};
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn}/>
         {children}
     </main>
  )
}