export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="grow py-4 grid place-content-center">{children}</main>
    </>
  )
}
