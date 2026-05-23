import { ReactNode } from "react";
import { AuthProvider } from "./auth-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
