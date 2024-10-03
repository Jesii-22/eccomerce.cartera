import Image from 'next/image';

const HomeHero = () => {
  return (
    <Image
      src={`/imgs/banners.carteras.jpg`}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto hero-image"
      alt="hero"
    />
  );
};

export default HomeHero;
