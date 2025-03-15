import Image from "next/image";

export const heading1 = (
  <>
    <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>

    <p className="text-[#4a4a4a] dark:text-[#ffffea] mb-12 max-w-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </p>

    <button className="btn-primary">Get Started</button>
  </>
);

export const section2 = (
  <div className="md:grid hidden gap-8 grid-cols-1">
    <div className="rounded-2xl overflow-hidden h-48">
      <Image
        className="img scale-animation"
        src="/images/hero-1.jpeg"
        alt="Hotel 1"
        width={300}
        height={300}
      />
    </div>

    <div className="grid grid-cols-2 gap-8 h-48">
      <div className="rounded-2xl overflow-hidden">
        <Image
          className="img scale-animation"
          src="/images/hero-2.jpeg"
          alt="Hotel 2"
          width={300}
          height={300}
        />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Image
          className="img scale-animation"
          src="/images/hero-3.jpeg"
          alt="Hotel 3"
          width={300}
          height={300}
        />
      </div>
    </div>
  </div>
);
