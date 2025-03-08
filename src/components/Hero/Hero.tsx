import HeroProps from "@/components/Hero/HeroProps";

function Hero(){
    return(
        <>
            <HeroProps
                bubbleText="Introducting Something Amazing"
                title='Lorem ipsum odor amet'
                subtitle='Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur eget nulla tortor hac consequat sit pulvinar.'
                imageUrl='/profile.jpeg'
                primaryButtonText='primary'
                secondaryButtonText='secondary'
                primaryHref='/'
                secondaryHref='/'
            />
        </>
    )
}

export default Hero