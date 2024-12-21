import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
      setImages(response.data);
      
    
  };

  return (
    <div className="h-auto p-12 w-full bg-slate-700">
      <div>
        <button onClick={fetchData} className="px-6 py-3 rounded bg-slate-900 text-white">
          Get data
        </button>
        <div className="h-auto w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="flex flex-col items-center justify-center h-48 w-48 m-4">
              <img
                src={image.download_url}
                alt={image.author}
                className="object-cover w-full h-full rounded"
              />
              <p className="text-white mt-2 text-sm">{image.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
