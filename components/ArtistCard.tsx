interface Artist {
  name: string;
  category: string;
  location: string;
  price: string;
  image?: string;
}

export default function ArtistCard({ name, category, location, price, image }: Artist) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition bg-white">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded mb-2"
        />
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Category: {category}</p>
      <p className="text-sm text-gray-600">Location: {location}</p>
      <p className="text-sm text-gray-600 mb-2">Price: {price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}
