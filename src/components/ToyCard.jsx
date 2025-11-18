import { Link } from 'react-router';

const ToyCard = ({ toy }) => {
  const { toyId, pictureURL, toyName, rating, availableQuantity, price } = toy

  return (
    <div data-aos="fade-up">
      <div key={toyId} className='card rounded-xl md:rounded-lg bg-blue-50 p-4 shadow-lg'>
        <figure>
          <img className='w-full rounded-xl md:rounded-lg' src={pictureURL} alt={toyName} />
        </figure>
        <div>
          <h2 className='card-title text-lg my-2 ml-2 text-blue-500 min-h-14'>{toyName}</h2>
          <span className='flex px-1 justify-between text-gray-700 text-xl font-semibold'>
            <p className='px-2'>⭐ {rating}</p>
            <p className='px-2'>${price}</p>
          </span>
          <p className='text-md my-2 font-semibold text-center text-blue-500'>Available Quantity: <span className='text-green-600'> {availableQuantity}</span></p>
        </div>
        <Link to={`/toy/${toyId}`} className="btn h-14 bg-blue-500 text-white hover:bg-blue-700">View More</Link>
      </div>
    </div>

  );
};

export default ToyCard;