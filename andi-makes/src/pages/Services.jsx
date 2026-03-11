import Card from '../components/Card';
import { SERVICES } from '../constants/data';

export default function Services() {
    return (
        <div className="w-full max-w-5xl py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight mb-4">
                    Our Services
                </h1>
                <p className="text-lg text-gray-600">
                    Professional printing and copying services at competitive prices
                </p>
            </div>

            {/* 2x3 Grid definition: 3 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                    <Card
                        key={service.id}
                        className="flex flex-col items-center justify-center p-8 text-center hover:scale-105 transition-transform duration-300 cursor-default"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {service.name}
                        </h3>
                        <div className="text-3xl font-extrabold text-blue-600">
                            <span className="text-xl mr-1">₱</span>
                            {service.price.toFixed(2)}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
