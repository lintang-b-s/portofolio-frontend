import Button from '../components/reusable/Button';
import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.js';
import Organizations from '../components/profile/OrganizationsGrid.js'
import TechnologiesListPage from '../components/profile/TechnologiesGrid.js'
// error ada di ProjectsGrid

const Home = () => {
    return (
        <div className='container mx-auto'>
            <AppBanner></AppBanner>

         
            <ProjectsGrid></ProjectsGrid>
{/* technologiesne error */}
            <TechnologiesListPage></TechnologiesListPage>

            <Organizations></Organizations>

            


        </div>
    )
}

export default Home;