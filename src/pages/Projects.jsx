import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Sporting Good Discounter Shopping Page',
      description: 'This is a shopping page for a sporting goods discounter store built with HTML, CSS, and JavaScript. This page includes many features such as a modal for each product that includes a carousel of images and a description of the product. The page is also complete with a sortable table of products with several filters to narrow down the products displayed.',
      shortDescription: 'A shopping page for a sporting goods discounter store built with HTML, CSS, and JavaScript.',
      imageUrl: '/images/project1a.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },

    {
      title: 'Dino Jump Game',
      description: 'This game mimics the popular Chrome dinosaur game. The game is built with HTML, CSS, and JavaScript. The game was improved by adding a scoreboard that tracks the player\'s score. This score is also the variable that determines the speed of the cactus and rock obstacles. This speed is increased each time the player successfully jumps over the obstacles 5 times.',
      shortDescription: 'A simple game built with HTML, CSS, and JavaScript that simulates the popular Chrome dinosaur game.',
      imageUrl: '/images/project2a.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    // Add more projects as needed
  ]

  return (
    <>
      <>
        <title>My Projects</title>
        <meta name="description" content="Portfolio projects showcase" />
      </>

      <main className="portfolio">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Projects
