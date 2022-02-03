import react, { useEffect } from 'react'
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from './components/AppRouter'
import { fetchAuth } from './store/actionCreators/userAC';
import { fetchCart } from './store/actionCreators/cartAC'

function App() {
   const dispatch = useDispatch();
   const { isAuth, isInitialized } = useSelector(state => state.user)

   useEffect(() => {
      dispatch(fetchAuth())
   }, [])

   useEffect(() => {
      if (isAuth) dispatch(fetchCart())
   }, [isAuth])

   return (
      <>
         {isInitialized
            ? <AppRouter />
            : null}
      </>
   );
}

export default App;
