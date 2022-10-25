import { Outlet } from 'react-router-dom';
import Aside from '../Layout/Aside';
import Header from '../Layout/Header';

const RootLayout = (): JSX.Element => {
  return (
    <div className="grid-container">
      <Header />
      <Aside />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">All right reserved.</footer>
    </div>
  );
};

export default RootLayout;
