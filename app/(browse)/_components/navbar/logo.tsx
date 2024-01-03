import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export  function Logo () {
    return (
        <Link href='/'>
            <div className="hidden lg:flex items-end gap-x-4 hover:opacity-75 transition">
                <div className="bg-white rounded-full p-1">
                    <Image
                     src='/logo.svg'
                     width='32'
                     height='32'
                     alt='Ghost'
                    />
                </div>
            </div>
        </Link>
    )
}