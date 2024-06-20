import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
      <section className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between '>
          <Link href="/">
              <Image src="/img/logo.png" width={40} alt="Synergetix logo" />
          </Link>
    </section>
  )
}

export default Navbar