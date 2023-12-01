export default function Home() {
  return (
    <div className="flex items-center mx-6">
      <div className="left w-1/2 ">
        <div>
          <h1 className="text-6xl font-bold mb-5 ">Lets make a impact in <br/> our lives together</h1>
          <h2 className="text-3xl mt-2 text-zinc-600">We protect our loved ones <span className="underline underline-offset-8 decoration-1	 decoration-wavy">❤️</span>. </h2>
        </div>
        <div>
          <button className="px-5 mt-10 py-3 bg-blue-500 rounded-full text-white font-bold">Check our plans</button>
        </div>
      </div>
      <div className="right w-1/2">
        <img src="./heart.jpg" alt="heart" className="w-full" />
      </div>
    </div>
  );
}
