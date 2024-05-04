export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>This is the authentication layout</h1>
      {children}
    </div>
  );
}
