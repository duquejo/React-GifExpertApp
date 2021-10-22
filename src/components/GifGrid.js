
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> { category } </h3>
      { loading && <p>Loading...</p> }
      <div className="card-grid">
        {
          images.map( img => <GifGridItem key={ img.id } { ...img } /> ) // Sending all properties with Object Rest operator
        }
      </div>
    </>
  );
};