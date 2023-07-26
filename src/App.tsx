import AppLayout from './AppLayout'
import { UserContextProvider } from './context/UserContext';

function App() {
  
  return (
    <UserContextProvider>
      <AppLayout>{/* CHILDREN HERE */}</AppLayout>
    </UserContextProvider>
  );
}

export default App; 