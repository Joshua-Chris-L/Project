import Politics from "../assets/Politics.png";

function NewsCardContent() {
  return (
    <div className="flex flex-col md:flex-row mt-10 lg:px-30 md:gap-4 px-2">
      <div className="w-full md:w-1/2">
        <img
          className="w-full max-w-md object-cover rounded"
          src={Politics}
          alt="NewsCardPicture"
        />
      </div>
      <div className="w-full md:w-1/2 lg:mr-55 md:pl-4">
        <h1 className="text-2xl mb-4">Where to Watch John Wick: Chapter 4</h1>
        <p className="mb-4">
          There has been no official announcement regarding John Wicj: Chater 4
          streaming release. However, given its a Lionsgate film, John Wick:
          Chapter 4 will eventually be released on Starz .... Lorem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, s
        </p>
        <p className="flex mt-2 text-sm">
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Movies
          </span>
          <span className="text-center font-bold text-lg leading-none mx-2">
            ·
          </span>
          <span> 4 min read </span>
        </p>
      </div>
    </div>
  );
}

export default NewsCardContent;
{
  /* <div className="block md:flex lg:flex">
      <div className="ml-30 mt-10">
        <img className="w-full" src={Politics} alt="NewsCardPicture" />
      </div>
      <div className="h-20 w-full ml-10 mr-30 mt-10 ">
        <h1 className="text-2xl mb-10">
          {" "}
          Where to Watch John Wick: Chapter 4{" "}
        </h1>
        <p>
          There has been no official announcement regarding John Wicj: Chater 4
          streaming release. However, given its a Lionsgate film, John Wick:
          Chapter 4 will eventually be released on Starz .... Lorem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, s
        </p>
        <p className="flex mt-2">
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Movies{" "}
          </span>
          <span className="text-center font-bold text-lg leading-none ml-2 mr-2">
            ·
          </span>
          <span> 4 min read </span>
        </p>
      </div>
    </div> */
}
