import hero from "../assets/yuhan-du-qsqVYKxqlzs-unsplash.jpg";

const Hero = () => {
    return (
        <div>
            <img src={hero} className="w-full max-h-[800px] object-cover" />
        </div>
    );
};

export default Hero;