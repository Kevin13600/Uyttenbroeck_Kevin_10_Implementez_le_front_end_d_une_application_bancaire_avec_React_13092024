import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { checkAuth } from './features/auth/authSlice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import TransactionsPage from './pages/TransactionsPage';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth(token));
  }, [dispatch,token]);
  
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/transactions/:accountId" element={<TransactionsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;