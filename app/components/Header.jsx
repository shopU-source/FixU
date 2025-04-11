import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-o z-10 !mb-5 !mt-5">
      <div className="flex items-center justify-around">
        <div className="col1 w-[30%]">
          <div className="img">
            <img src="/favicon.png" alt="" className="w-[150px] h-[70px]" />
          </div>
        </div>
        <div className="col2 w-[70%]">
          <div className="links flex items-center justify-end gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/contact"}>Contact us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
