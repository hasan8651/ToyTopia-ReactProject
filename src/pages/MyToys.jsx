import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

const MyToys = () => {
  const { myToys } = useContext(AuthContext);

  if (myToys.length === 0)
    return (
      <p className="px-12 text-2xl md:text-3xl py-10 font-semibold text-center mx-auto text-blue-500 mt-10">
        No toys yet — click “Try Now” on Toy Details to add one! <br />
        <span className="text-sm text-center mx-auto text-red-500">[Note: This is a Temporary List]</span>
      <Helmet><title>ToyTopia - No Toys</title></Helmet>
      </p>
    );

  return (
    <div>
      <Helmet><title>ToyTopia - My Toys</title></Helmet>
      <h1 className='text-2xl md:text-3xl py-4 font-semibold text-center mx-auto text-blue-500'>
        Toy(s) You Liked to Try
      </h1>
      <div className="max-w-7xl mx-auto mt-4 p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myToys.map((toy) => (
          <div key={toy.toyId} className="border-2 border-blue-500 bg-blue-50 rounded-lg p-4 shadow-lg">
            <img
              src={toy?.pictureURL}
              alt={toy.toyName}
              className="w-full object-cover rounded"
            />
            <h3 className="font-semibold mt-2 text-blue-500">{toy.toyName}</h3>
            <span className="mt-2 flex justify-between">
              <p className="text-sm font-semibold text-gray-600">Price: <span className='text-green-600'> ${toy.price}</span> </p>
              <p className="text-sm font-semibold text-gray-600">In Stock: <span className='text-green-600'> {toy.availableQuantity}</span></p>
            </span>
            <p className="mt-2 text-sm text-gray-600">Seller: {toy.sellerName}</p>
            <p className=" text-sm text-gray-600">mail us: {toy.sellerEmail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;