import { Outlet } from "react-router-dom";
import CandidateHeader from "../components/CandidateHeader";

const CandidateLayout = () => {
  return (
    <div className=''>
      <div className='header'>
        <CandidateHeader />
      </div>
      <Outlet />
    </div>
  );
};
export default CandidateLayout;
