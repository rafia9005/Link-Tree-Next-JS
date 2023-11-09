export default function HeroLayout() {
    const getRandomSizes = () => {
        const sizes = [];
        for (let i = 0; i < 100; i++) {
            const randomSize = Math.floor(Math.random() * 2) + 1; 
            sizes.push(randomSize);
        }
        return sizes;
    };

    const randomSizes = getRandomSizes();

    return (
        <div className="hero relative h-screen bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="box text-center text-white">
                    <center>
                        <img src="https://www.rafii.site/pp.png" alt="" width={140} className="rounded-md"/>
                    </center>
                    <h3 className="text-sm lg:text-md" style={{ padding: '10px 0', marginTop: '10px' }}>www.rafii.site</h3>
                    <h1 className="lg:text-3xl text-2xl text-white gradient-text">hi I am a Full-Stack Developer <br /> with 1 year experience</h1>
                    <div className="list">
                    <ul>
                        <li className="bg-blue-400"><a href="https://github.com/rafia9005">Github</a></li>
                        <li className="bg-gray-700"><a href="https://www.tiktok.com/@rafii.site">Tiktok</a></li>
                        <li className="bg-pink-700"><a href="https://instagram.com/rafii.site">Instagram</a></li>
                        <li className="bg-blue-600"><a href="https://id.linkedin.com/in/ahmad-rafi-i-76ba80260">LinkedIn</a></li>
                        <li className="bg-black"><a href="">Twitter</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-12 gap-8">
                    {randomSizes.map((size, index) => (
                        <div
                            key={index}
                            className={`h-${size} w-${size} bg-white rounded-full animate-pulse`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
