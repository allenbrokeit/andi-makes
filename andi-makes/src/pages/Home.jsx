import Card from '../components/Card';

export default function Home() {
    return (
        <div className="w-full flex-grow flex items-center justify-center">
            <Card className="max-w-2xl w-full text-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
                        Welcome to <span className="text-blue-600">Andi Makes</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-gray-700">
                        Your one stop shop for all of your printing and copying needs!
                    </h2>

                    <div className="pt-8">
                        <p className="text-gray-500 max-w-lg mx-auto">
                            We provide high-quality services tailored to your personal and business needs.
                            Explore our wide range of services to get started.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
