import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill, RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="text-white bg-black flex flex-col gap-10 p-10">
        
        <div className="flex flex-col font-inter">
            <img className="h-24 w-24" src="/logo.png" alt="" />
            <h3 className="font-black text-2xl">Grownify</h3>
            <p className="text-xs">Grow up one habit at a time</p>
        </div>

        <div>
            <h3 className="font-black mb-2 font-inter">Social</h3>
            <div className="flex gap-5">
                <FaFacebook className="size-6" />
                <RiTwitterXFill className="size-6" />
                <RiInstagramFill className="size-6" />
            </div>
        </div>
      
    </div>
  )
}
