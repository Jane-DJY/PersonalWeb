import placeholders from '../assets/placeholders';

interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "The Lighthouse: Shining a Light on the Gender Gap in Economic Engagement",
      year: "2024",
      description: "This video uses data visualization to explore the structural roots of gender disparities in global investment markets, revealing how economic, legal, and educational factors create barriers for female investors. By mapping global economic, legal, and educational data onto a lighthouse model, the video vividly illustrates gender gaps between different countries and regions, showing how economic foundations, legal protections, and education levels affect women's investment opportunities and economic independence.",
      image: placeholders.lighthouse,
      link: "https://datav.iwencai.com/#/data-news"
    },
    {
      title: "Twin Cloud - Using Atmospheric Data Visualization to Depict the Breath of Cities",
      year: "2024",
      description: "Cloud layers map ground activities. Volcanoes, industry, cities, wars, and rainforests all leave traces in the sky. Over the past three years, extreme weather has become frequent, with clouds becoming silent witnesses to human behavior. Many microscopic changes, though difficult to detect, can be perceived through data. Climate change is an example: the atmosphere is a map of ground activities, with crises hidden within it.",
      image: placeholders.twin_cloud,
      link: "https://www.youtube.com/watch?v=Sm0dKHHafbY"
    },
    {
      title: "Stock Forest: Revealing the Evolving Stories of the Stock Market through Visualization",
      year: "2024",
      description: "This video explores the evolution of the US stock market through multidimensional data mapping, using tree diagrams to represent each listed company. By analyzing characteristics such as tree color, height, and width, we delve into various market dynamics, including company health, market valuation, and industry concentration.",
      image: placeholders.stock_forest,
      link: "https://www.youtube.com/watch?v=dQfNq47BmBo"
    },
    {
      title: "A 72-Year Retrospective of the Asian Games: How Has Women's Sports Evolved?",
      year: "2023",
      description: "This work compiles statistics on medals won by men and women across different events in the past eighteen Asian Games. In the first Asian Games, women were only allowed to participate in track and field events. By the 2010 Guangzhou Asian Games, all major events were finally open to women! This work serves as a data archive, and while reviewing this history, a phrase kept echoing in my mind: \"Mothers always stand in place, so that when daughters look back, they know how far they've come.\"",
      image: placeholders.womensports,
      link: "https://terry2tan.github.io/womensports/"
    },
    {
      title: "Your Feeling Is Right: Movies Are Getting Longer",
      year: "2022",
      description: "Through IMDB data analysis, we found that the length of popular movies has indeed been gradually increasing, especially in the years following the pandemic. Moreover, long movies also receive significant financial investment, with high salaries for big stars and substantial marketing expenses, most of which are concentrated on just a few films. This makes one wonder: are viewers' choices truly free? It seems that while there appear to be more movies, we actually have fewer choices!",
      image: placeholders.movies_longer,
      link: "https://huchenhaoarvin.github.io/movie-getting-longer-web-en/"
    },
    {
      title: "Who runs China?",
      year: "2019",
      description: "This project introduces the composition of representatives in China's 13th National People's Congress (NPC), providing detailed analysis through data and images of their gender, age, ethnicity, education, and professional backgrounds. It also extends to the evolving trends in \"Two Sessions\" report content, reflecting changes in China's political system operation and national governance priorities.",
      image: placeholders.who_runs_china,
      link: "https://news.cgtn.com/event/2019/whorunschina/index.html"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title fade-in">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card interactive fade-in delay-${index % 3 + 1}`}
          >
            <div className="project-image-container">
              <div className="project-year">{project.year}</div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
