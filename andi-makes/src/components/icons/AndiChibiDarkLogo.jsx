import logo from './andi_makes_chibi_dark_bkgrnd.png';

export default function AndiChibiDarkLogo({ className, alt = "Andi Chibi Dark Logo" }) {
    return (
        <img src={logo} alt={alt} className={className} />
    );
}
