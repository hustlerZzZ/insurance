import { FaLongArrowAltRight } from "react-icons/fa";

function Who() {
    return (

        <div className="flex items-center justify-between mx-auto max-w-7xl mt-24 ">
            <div className="left w-1/2 mr-8">
                <img src="./Who-img.jpg" alt="About-image" className="w-full" />
            </div>
            <div className="right w-1/2 ml-7 ">
                <div>
                    <h1 className="text-6xl font-bold mb-5 relative">Who <span className=" after:bg-[url('http://claimpro.ai/wp-content/uploads/2023/10/Line01.png')] after:w-[90px] after:h-[9px] after:absolute after:left-40 after:-bottom-2
 ">we</span> are</h1>
                    <h2 className="text-2xl mt-2 text-blue-500 font-semibold">Your speciality insurance expert </h2>
                </div>
                <p className="text-zinc-500 mt-4 w-4/5 font-bold">Our experience in specialty insurance markets and coverages provides competitive coverage solutions for you. Our goal is to simplify the purchase of competitive specialty insurance and to make specialty insurance understandable, accessible, efficient and affordable. </p>
                <div className=" mt-10 text-blue-500 font-bold flex items-center underline underline-offset-8">
                    <button className="    mr-2">Learn more
                    </button><FaLongArrowAltRight />
                </div>
            </div>
        </div>
    );


}
export default function Home() {
  return (
   <>
    <div className="flex items-center justify-center mx-auto max-w-7xl mt-16 ">
      <div className="left w-1/2 ">
        <div>
          <h1 className="text-6xl font-bold mb-5 relative">Lets make a <span className=" after:bg-[url('http://claimpro.ai/wp-content/uploads/2023/10/Line01.png')] after:w-[304px] after:h-[9px] after:absolute after:left-0 after:-bottom-2
 ">impact</span>  in <br/> our lives together</h1>
          <h2 className="text-3xl mt-2 text-zinc-500">Let's protect our loved ones <span className="underline underline-offset-8 decoration-1	 decoration-wavy">❤️</span>. </h2>
        </div>
        <div>
          <button className="px-5 mt-10 py-3 bg-blue-500 rounded-full text-white font-bold">Check our plans</button>
        </div>
      </div>
      <div className="right w-1/2">
        <img src="./heart.jpg" alt="heart" className="w-full" />
      </div>
    </div>
       <Who/>
   </>
  );


}
