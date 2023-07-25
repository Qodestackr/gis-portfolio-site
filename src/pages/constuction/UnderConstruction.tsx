import { FaTools } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';

export default function UnderConstruction() {
  useDocumentTitle('Under Construction');

  const currentLocation = useLocation();
  const pageName = currentLocation.pathname;

  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl font-extrabold">
      <FaTools className="text-green-500 w-24 h-24" />

      <div className="flex flex-col justify-between items-center ml-4">
        <h2 className="text-green-500">Coming Soon</h2>
        <h3 className="text-slate-600">*{pageName} Page is Under Construction</h3>
      </div>
    </div>
  );
}
