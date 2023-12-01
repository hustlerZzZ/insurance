export default function Home() {
  return (
    <div className="flex">
      <div className="left w-1/2">
        <div>
          <h1>Lets make a impact in our lives together</h1>
          <h2>We protect our loved ones ❤️.</h2>
        </div>
        <div>
          <button className="">Check our plans</button>
        </div>
      </div>
      <div className="right w-1/2">
        <img src="./heart.jpg" alt="heart" className="w-full" />
      </div>
    </div>
  );
}
