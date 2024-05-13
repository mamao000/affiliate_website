import GlobalStyle from "./globalStyles";
import StyledComponentsRegistry from "./lib/registry";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/components/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        <StyledComponentsRegistry>
          <Topbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
