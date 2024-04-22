export default function ParallmLayout({
  children,
  team,
  detail,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  detail: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      {children}
      {team}
      {detail}
    </>
  );
}
