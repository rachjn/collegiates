import Image from "next/image";

function Carousel({ imgs }) {
  return (
    <>
      {/* <div className="flex gap-4 w-[200%] overflow-hidden">
        {[...params.imgs, ...params.imgs].map((carouselImg, index) => (
          <div key={index} className="animate-scroll">
            <CarouselSquare src={carouselImg} />
          </div>
        ))}
      </div> */}
      <div className="overflow-hidden w-full relative">
        <div className="absolute top-0 left-0 w-[25rem] h-full bg-gradient-to-r from-off-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[25rem] h-full bg-gradient-to-l from-off-white to-transparent z-10" />
        <div className="flex gap-4 w-max animate-scroll">
          {[...imgs, ...imgs].map((carouselImg, index) => (
            <CarouselSquare key={index} src={carouselImg} />
          ))}
        </div>
      </div>
    </>
  );
}

function CarouselSquare(params) {
  return (
    <>
      <div className="bg-gray-400 h-[30rem] w-[30rem] rounded-[2rem] relative">
        <Image
          src={`/${params.src}`}
          fill={true}
          alt="Carousel image"
          className="object-cover rounded-[2rem]"
        />
      </div>
    </>
  );
}

export { Carousel, CarouselSquare };
