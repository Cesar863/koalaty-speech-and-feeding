import HeroProps from "@/components/Hero/HeroProps";

function Hero(){
    return(
        <>
            <HeroProps
                title='title text'
                subtitle='Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur eget nulla tortor hac consequat sit pulvinar.'
                imageUrl='/profile.jpeg'
                primaryButtonText='primary'
                secondaryButtonText='secondary'
            />
        </>
    )
}

export default Hero