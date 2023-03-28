import "../styles/globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

const layout = ({ children }) => {
  return (
    <html lang="fa-IR">
      <body className="flex flex-col gap-8">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default layout;
