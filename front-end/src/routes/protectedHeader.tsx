import Header1 from "../components/Nams-Layout/header";

function ProtectedHeader({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("session-token");

  if (token) {
    return <div>{children}</div>;
  }

  return <Header1 />;
}

export default ProtectedHeader;
