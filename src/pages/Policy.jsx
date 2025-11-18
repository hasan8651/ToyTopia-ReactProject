import { Helmet } from 'react-helmet-async';

const Policy = () => {
    return (
        <div className="min-h-screen bg-blue-50 mb-2 shadow-lg rounded-lg">
            <Helmet>
                <title>ToyTopia - Privacy Policy</title>
            </Helmet>

            <section className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">
                    Privacy Policy
                </h1>
                <div>
                    <p className="text-md">
                        We collect account details, contact info, purchase history, device data, and cookies. We use this data to operate and improve our services, process orders, provide support, personalize content, ensure security, and comply with law. We share data with trusted partners (payments, shipping, analytics) under contract; we do not sell personal data. Cookies help with functionality and analytics; manage them via browser settings. We employ reasonable safeguards, though no method is 100% secure. Your rights may include access, correction, deletion, and opting out of marketing. Our services aren't for children under 13. We may update this policy. Contact: <span className="text-blue-500 underline cursor-pointer">support@toytopia.com.</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Policy; Policy