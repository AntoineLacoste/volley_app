import { Routes, Route } from 'react-router-dom';
import Teams from '../components/teams';

const router = () => {
    return (
        <Routes>
            <Route path= '/' element = {< Teams />} />
        </Routes>
);
}
export default router;