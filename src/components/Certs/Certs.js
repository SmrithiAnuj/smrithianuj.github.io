import uniqid from 'uniqid'
import { certs } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Certs.css'

const Certs = () => {
  if (!certs.length) return null

  return (
    <section id='certs' className='section certs'>
      <h2 className='section__title'>Certs</h2>

      <div className='certs__grid'>
        {certs.map((project) => (
          <ProjectContainer key={uniqid()} project={project} isCert={true} />
        ))}
      </div>
    </section>
  )
}

export default Certs
