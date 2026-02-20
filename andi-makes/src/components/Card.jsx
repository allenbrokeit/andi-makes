export default function Card({ children, className = '' }) {
    return (
        <div className={`bg-white rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-900/5 p-8 ${className}`}>
            {children}
        </div>
    );
}
