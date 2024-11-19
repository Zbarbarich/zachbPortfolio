//import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
//import Layout from '../components/Layout'

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      imageUrl: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.com'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      imageUrl: '/images/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.com'
    },
    // Add more projects as needed
  ]

  return (
    <>
      <>
        <title>My Projects</title>
        <meta name="description" content="Portfolio projects showcase" />
      </>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Projects
