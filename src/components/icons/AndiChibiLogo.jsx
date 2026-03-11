import logo from './andi_chibi_logo.png';

export default function AndiChibiLogo({ className, alt = "Andi Chibi Logo" }) {
    return (
        <img src={logo} alt={alt} className={className} />
    );
}
