import profileImg3 from "@/public/profileImg3.png";
import profileImg4 from "@/public/profileImg4.png";
import profileImg5 from "@/public/profileImg5.png";


export function Section3() {

    const reviews = [
        {
            profileImg: profileImg3,
            name: 'Eleanor Pena',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.'
        },
        {
            profileImg: profileImg4,
            name: 'Cody Fisher',
            text: 'Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'
        },
        {
            profileImg: profileImg5,
            name: 'Leslie Alexander',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.'
        },
    ]

    return <>
        <section className="py-18">
            <h2 className="text-[33px] font-semibold text-center">
                Fresh Ideas for your business <br className="md:inline hidden" /> design.
            </h2>
            <p className="text-gray-700 text-center font-[400] tracking-[1px] text-[16px] break-all mt-16 p-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br className="md:inline hidden" /> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="container mx-auto flex md:flex-row flex-col gap-4 mt-10 px-4">
                {reviews.map((review, i) =>
                    <div className="flex items-start space-x-4" key={i}>
                        <img
                            alt="Image"
                            className="w-12 h-12 rounded-full"
                            height={100}
                            src={review.profileImg.src}
                            width={100}
                        />
                        <div className="pt-2">
                            <h3 className="font-bold">{review.name}</h3>
                            <p className="text-gray-700 mt-2 font-[400] tracking-[1px] text-[16px] break-all">
                               {review.text}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>

    </>
}