import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Layout({ children, authPage = false }) {
    return (
        <>
            {!authPage && (
                <div className="bg-[#151C38] sticky top-0 z-[999]">
                    {/* <Navbar /> */}
                </div>
            )}
            {children}
            {!authPage && <Footer />}
        </>
    );
}
