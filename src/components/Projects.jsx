import FlowingMenu from './FlowingMenu'

const Projects = () => {
    const demoItems = [
        { link: 'https://rag-ui-production.up.railway.app/', text: 'Rag Api', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    ];
    return (
        <div>
            <div className="text-start mb-16 mt-16 ml-24" >
                <h2 className="text-4xl md:text-5xl font-bold">
                    Projects
                </h2>
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems}
                    speed={15}
                    textColor="#ffffff"
                    bgColor="#060010"
                    marqueeBgColor="#ffffff"
                    marqueeTextColor="#060010"
                    borderColor="#ffffff"
                />
            </div>
        </div>
    )
}

export default Projects