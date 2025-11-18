import useToys from '../hooks/useToys';
import LoadingSpinner from './LoadingSpinner';
import ToyCard from './ToyCard';

const PopularToys = () => {
  const { toys, loading } = useToys();

  return (
    <div className='my-2 border-2 border-blue-500 rounded-md shadow-xl' >
      <h1 className='text-2xl md:text-3xl py-4 font-semibold text-center bg-blue-500 text-white'>
        Popular Toys
      </h1>

      {loading ? (
        <div className='flex justify-center items-center py-20'>
          <LoadingSpinner />
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {toys.map(toy => ( 
            <ToyCard key={toy.toyId} toy={toy}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularToys;