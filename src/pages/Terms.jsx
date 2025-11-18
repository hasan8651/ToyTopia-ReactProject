import { Helmet } from "react-helmet-async";

const Terms = () => {
    return (
        <div className="min-h-screen bg-blue-50 mb-2 shadow-lg rounded-lg">
            <Helmet>
                <title>ToyTopia - Terms and Conditions</title>
            </Helmet>

            <section className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">
                    Terms and Conditions
                </h1>

                <div>
                    <h3 className="text-xl font-semibold">
                        By accessing or using ToyTopia, you agree to these Terms. If you disagree, do not use the Site.
                    </h3>
                    <ul className="text-md list-disc marker:text-blue-500 pl-6">
                        <li>Eligibility: You must be 13+ or have guardian consent.</li>
                        <li>Accounts: Keep credentials confidential; you're responsible for activities.</li>
                        <li>Orders: Orders are offers; we may refuse or limit. Availability, pricing, and descriptions may change or contain errors; we may correct or cancel and refund.</li>
                        <li>Payments & Taxes: You authorize charges and are responsible for applicable taxes.</li>
                        <li>Returns: Eligible items may be returned per our Return Policy.</li>
                        <li>User Content: You grant us a nonexclusive license to use content you submit.</li>
                        <li>Prohibited: No unlawful, fraudulent, or harmful activity.</li>
                        <li>Disclaimer: Provided “as is” without warranties.</li>
                        <li>Liability: To the maximum extent permitted, we are not liable for indirect or consequential damages.</li>
                        <li>Changes: We may update Terms; continued use means acceptance.</li>
                        <li>If you have any query, contact: <span className="text-blue-500 underline cursor-pointer">support@toytopia.com.</span></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Terms;