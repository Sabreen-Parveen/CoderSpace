import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray py-6">
      <div className="flex flex-col md:justify-between md:items-center m-auto w-2/3 font-bold text-gray-500 md:flex-row">
        <div>
          <div className="min-w-max">
            {/* <Image
              height="30px"
              width="200px"
              src="/images/coat.png"
              alt="CoderSpace logo"
            /> */}
          </div>
          <p className="my-1">CoderSpace © 2021</p>
        </div>
      </div>
    </footer>
  );
}
