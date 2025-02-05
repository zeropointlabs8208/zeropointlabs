import section2Img from "@/public/section2Img.png";
import stockImg from "@/public/stockImg.png";
import profileImg1 from "@/public/profileImg1.png";
import profileImg2 from "@/public/profileImg2.png";

export function Section2() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-[80%] md:w-[540px] max-w-full">
              <img
                alt="Team celebrating success"
                className="rounded-lg w-full"
                src={section2Img.src}
              />
              <img
                alt="Stock Image"
                className="absolute rounded-[14px] md:rounded-[24px] w-[90px] md:w-[190px] h-[110px] md:h-[238px] -bottom-4 md:-bottom-8 -right-6 md:-right-10"
                src={stockImg.src}
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
            <span className="bg-[#BEE1E6] px-4 py-2 rounded-full font-medium text-sm md:text-base">
              Digital Marketing Agency
            </span>
            <h2 className="text-2xl md:text-[33px] font-bold mt-4 leading-tight">
              Fresh Ideas for your business design.
            </h2>
            <p className="text-gray-700 mt-4 text-sm md:text-[16px] leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>

            {/* Testimonials */}
            <div className="mt-6 space-y-6">
              {[{ name: "Garddy", img: profileImg1 }, { name: "Herdrick", img: profileImg2 }].map((person, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    alt={person.name}
                    className="w-12 h-12 rounded-full"
                    src={person.img.src}
                  />
                  <div className="pt-1">
                    <h3 className="font-bold">{person.name}</h3>
                    <p className="text-gray-700 mt-2 text-sm md:text-[16px] leading-relaxed">
                      Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis
                      sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum
                      quod nulla, inventore numquam recusandae dolores minima omnis voluptas?
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
