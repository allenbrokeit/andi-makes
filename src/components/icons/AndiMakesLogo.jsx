import logo from './andi_makes_chibi_subtitle_large.png';

export default function AndiMakesLogo({ className, alt = "Andi Makes Logo" }) {
    return (
        <img src={logo} alt={alt} className={className} />
    );
}
