import { ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
  console.log("auth provider");
  return children;
}
