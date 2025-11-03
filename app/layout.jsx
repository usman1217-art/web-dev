import Nav from "./Nav";
import './globals.css';


export const metadata = {
  title: "QBM Cars",
  description: "Your site description",
  icons: {
    icon: "/AA.jpg", // path inside /public
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
