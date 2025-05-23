interface Paper {
  title: string;
  authors: string;
  year: string;
  journal: string;
  link: string;
}

const Papers = () => {
  const papers: Paper[] = [
    {
      title: "Online attention dynamics: The triangle framework of theory, big data and simulations",
      authors: "Peng Lu, Dianhan Chen, Gang Zhang, Jieying Ding",
      year: "2023",
      journal: "Expert Systems with Applications",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0957417423014021"
    },
    {
      title: "Double Tap for This Post: Understanding the Communication of Data Visualization on Social Media",
      authors: "Yang Shi, Yechun Peng, Jieying Ding, Xingyu Lan, Nan Cao",
      year: "2025",
      journal: "Proceedings of the ACM on Human-Computer Interaction",
      link: "https://idvxlab.com/papers/2025CSCW_Infocommunication_Shi.pdf"
    }
  ];

  return (
    <div className="papers-container">
      <h2 className="section-title fade-in">Academic Papers</h2>
      
      <div className="papers-list">
        {papers.map((paper, index) => (
          <div 
            key={index} 
            className={`paper-card interactive fade-in delay-${index + 1}`}
          >
            <div className="paper-year">{paper.year}</div>
            <h3 className="paper-title">{paper.title}</h3>
            <p className="paper-authors">{paper.authors}</p>
            <p className="paper-journal">{paper.journal}</p>
            <a 
              href={paper.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="paper-link"
            >
              View Paper
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Papers;
