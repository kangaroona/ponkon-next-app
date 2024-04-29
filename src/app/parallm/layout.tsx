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
    <div className="flex flex-col p-4 gap-2">
      {" "}
      {children}
      {team}
      {detail}
    </div>
  );
}
