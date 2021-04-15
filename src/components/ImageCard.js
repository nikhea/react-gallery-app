const images = ({image:{webformatURL,views, downloads, likes, tags, id}}) => {
   const tagss = tags.split(',')
  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={webformatURL} alt='aslfjajd' className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
        </div>
        <ul>
          <li>
                <strong>views: {views}</strong>
          </li>
          <li>
                  <strong>downloads: {downloads}</strong>
          </li>
          <li>
                      <strong>likes: {likes}</strong>
          </li>
          
        </ul>
      </div>
      <div className="px-6 py-4 "> 
        {tagss.map((tag, index) => (
         <span key={index} className=" inline-block bg-gray-200 rounded-full px-3 py-1
         text-sm font-semibold text-gray-700 mr-2"> #{tag}</span>
        ))}
      </div>
    </div>

    )
}

export default images
