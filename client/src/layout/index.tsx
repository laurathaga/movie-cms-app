import Header from '../components/header/Header';
import Footer from '../components/footer';

export default Layout({ children }) {
   return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
   )
}

