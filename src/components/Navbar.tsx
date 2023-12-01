import Link from "next/link";

function Navbar() {
  return (
    <div className="flex p-4 justify-between border-2">
      <div>
        <h2 className="font-bold text-2xl">Logo</h2>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-4">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-4 py-2 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Navbar;
