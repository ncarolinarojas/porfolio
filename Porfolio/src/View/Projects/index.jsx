import Layout from '../../Components/Layout'
import Projects from '../../Sections/Projects';
import style from './projects.module.css';

const ProjectsView = () => {
    return(
        <div>
        <Layout>
            <div>
            <Projects/>
            </div>
        </Layout>
        </div>
    )
}

export default ProjectsView;