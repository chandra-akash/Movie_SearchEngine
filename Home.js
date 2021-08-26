
function slideshow ()
{
    const arr = [ 'https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg', 'https://i.ytimg.com/vi/1aL4XZGeE6w/maxresdefault.jpg', 'https://icelandmag.is/sites/default/files/styles/main_story/public/thumbnails/image/xmen-film-header-v4-02-1-front-main-stage.jpg?itok=pVwn2yrT', 'https://i.ytimg.com/vi/FSCEdJ9N1LM/maxresdefault.jpg', 'https://i.ytimg.com/vi/59GzfGLqL7k/maxresdefault.jpg', 'https://cdn.mos.cms.futurecdn.net/MYL7N3YpdrJKMrYutYa8pn.jpg', 'https://static.india.com/wp-content/uploads/2020/08/sanjay-dutt-upcoming-films.jpg' ]
    let div = document.getElementById( 'slideshow' );
    let img = document.createElement( 'img' );
    let i = 0;
    img.src = arr[ 0 ];
    div.append( img );
    setInterval( function ()
    {
        if ( i == arr.length )
        {
            i = 0;
        }
        img.src = arr[ i ];
        i++;
    }, 3000 )
}
slideshow();


async function getMovie ()
{
    var movie = document.getElementById( "movie" ).value;
    var poster = document.getElementById( "moviePoster" );
    try
    {
        let res = await fetch( `http://www.omdbapi.com/?t=${ movie }&apikey=ef3c69f6` );
        let data = await res.json();
        console.log( "data:", data );
        console.log( "data2:", data.Response );
        if ( data.Response == 'False' )
        {
            document.getElementById( "alert" ).style.display = `block`;
            document.getElementById( "errorMessage" ).style.display = `block`;
            document.getElementById( "errorGIF" ).style.display = `block`;
            document.getElementById( "errorMessage" ).textContent = `NOT  FOUND           check the spelling`;

            setTimeout( () =>
            {
                window.location.reload();
            }, 5000 );
        } else
        {
            if ( data.imdbRating > '8.5' )
            {
                document.getElementById( "tag" ).style.display = 'block';
                document.getElementById( "tag" ).innerHTML = 'Best movie';
                document.getElementById( "tag" ).style.backgroundColor = "purple";
                // console.log( best );
            } else
            {
                document.getElementById( "tag" ).style.display = 'none';
            }
            document.getElementById( "movieContainer" ).style.display = "grid";
            document.getElementById( "moviePoster" ).src = data.Poster;
            document.getElementById( "movies_title" ).innerHTML = `Title:  ${ data.Title }`;
            document.getElementById( "movies_rating" ).innerHTML = `IMDb Rating:  ${ data.imdbRating }`;
            document.getElementById( "movies_released" ).innerHTML = `Released Date:  ${ data.Released }`;
            document.getElementById( "actors" ).innerHTML = `Actors:  ${ data.Actors }`;
            document.getElementById( "director" ).innerHTML = `Director:  ${ data.Director }`;
            document.getElementById( "writer" ).innerHTML = `Writer:  ${ data.Writer }`;
            document.getElementById( "language" ).innerHTML = `Language:  ${ data.Language }`;
        }

    } catch ( err )
    {
        console.log( "err:", err );
    }
}
// getMovie();