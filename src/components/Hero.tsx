import UIButton from "./UI/UIButton";
import '../styles/components/hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__inner">
                <h1 className="hero__title title">Test assignment for front-end developer</h1>
                <p className="hero__text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <UIButton 
                    title='Sign up' 
                    type='link' 
                    href='#signUp' 
                />
            </div>
        </section>
    )
}

export default Hero;