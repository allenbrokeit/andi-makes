import Card from '../components/Card';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Standard form submission logic would go here
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div className="w-full flex-grow flex items-center justify-center py-8">
            <Card className="max-w-xl w-full">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight mb-2">
                        Contact Us
                    </h1>
                    <p className="text-gray-600">
                        Have a question? Drop us a message!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-shadow"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-shadow"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-shadow resize-none"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:ring-4 focus:ring-blue-200 outline-none"
                    >
                        Send Message
                    </button>

                </form>

            </Card>
        </div>
    );
}
