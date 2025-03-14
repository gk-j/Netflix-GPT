import MovieCard from "./MovieCard"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },  // Covers all desktops
        items: 11, // Reduce to 6 for better visibility
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },  // Adjusted to include your MacBook
        items: 6,  // Reduce items for better layout
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 3, // Reduce to 2 for smaller screens
        slidesToSlide: 1
    }
};


export default function MovieList({title,movies}){
    // console.log(movies)
    return(
        <div className="p-5">
            <h1 className="text-xl md:text-2xl font-bold py-2 text-white">{title}</h1>
            {/* <Carousel responsive={responsive} showDots={true} keyBoardControl={true}>
            <div className="flex">
            
                <div className="flex">
                
                    {movies?.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                   
                </div>
                
            </div>
            </Carousel>  */}
            {movies && movies.length > 0 ? (
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={""}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {movies.map(movie => (
                       movie.poster_path&& <MovieCard key={movie.id} posterPath={movie.poster_path} movie_id={movie.id} title={movie.title}/>
                    ))}
                </Carousel>
            ) : (
                <p>No movies available</p>
            )}
        </div>
    )
}