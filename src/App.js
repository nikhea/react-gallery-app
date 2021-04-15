import {useState, useEffect} from 'react'
import axios from 'axios'
import ImageCard from './components/ImageCard'
import ImageSearch from "./components/ImageSearch"
function App() {
  const [images, setImages] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [term , setTerm] = useState('');

  useEffect( async () => {
       const fetchData = await axios(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
       const data = await fetchData.data
       setImages(data.hits)
       setIsLoading(false)
  }, [term])
  console.log(images);
  return (
    <div className="container mx-auto mt-40">
      <ImageSearch searchText={(text) => setTerm(text)}/>
     
     {!isLoading && images.length === 0 && <h1 className=" text-blue-500 container text-6xl text-center mx-auto">NO IMAGES FOUND</h1>}
     
     { isLoading ? <h1 className=" text-blue-500 container text-6xl text-center mx-auto">LOADING....</h1> :  <div className="grid grid-cols-3 gap-4">
        {
          images.map((image) => (
            <ImageCard image={image} key={image.id}/>
          ) )
        } </div>}
    </div>
      );
}

export default App;
