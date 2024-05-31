"use client";
import GlobalStyle from "./globalStyles";
import StyledComponentsRegistry from "@/app/lib/registry";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/components/Topbar";
import client from "./lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <GlobalStyle />
        <body>
          <StyledComponentsRegistry>
            <Topbar />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </ApolloProvider>
  );
}
