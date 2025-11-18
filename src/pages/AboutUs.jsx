
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {

  return (
    <div className="min-h-screen bg-blue-50 mb-2 shadow-lg rounded-lg">
      <Helmet>
        <title>ToyTopia - About Us</title>
      </Helmet>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">
          About ToyTopia
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center">
          At <span className="font-semibold">ToyTopia</span>, we believe play
          sparks creativity and imagination. Since 2022, our mission has been to
          inspire young minds through fun, learning-driven toys that make every
          playtime magical. We're a cheerful team of dreamers, designers, and
          toy-enthusiasts shaping a world where creativity has no limits.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="text-center">
            <img
              src="/Alex.jpg"
              alt="Alex - Creative Lead"
              className="w-28 h-28 object-cover rounded-full mx-auto border shadow-sm"
            />
            <p className="mt-2 font-medium">Alex</p>
            <p className="text-sm text-gray-500">Creative Lead</p>
          </div>

          <div className="text-center">
            <img
              src="/Maya.jpg"
              alt="Maya - Product Designer"
              className="w-28 h-28 object-cover rounded-full mx-auto border shadow-sm"
            />
            <p className="mt-2 font-medium">Maya</p>
            <p className="text-sm text-gray-500">Product Designer</p>
          </div>

          <div className="text-center">
            <img
              src="/Leo.jpg"
              alt="Leo - Support Hero"
              className="w-28 h-28 object-cover rounded-full mx-auto border shadow-sm"
            />
            <p className="mt-2 font-medium">Leo</p>
            <p className="text-sm text-gray-500">Support Hero</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;