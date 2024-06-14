import { Button } from "@/components/ui/button";
import { paths } from "@/helpers/paths";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className="fixed w-full z-50 py-5">
      <div
        className="container mx-auto flex justify-between items-center text-white"
        style={{ fontFamily: "var(--font-lato)" }}
      >
        <Link href={paths.home}>
          <Image src="/brand.svg" alt="Logo" width={75} height={75} />
        </Link>
        <div className="hidden md:block space-x-8 ">
          <Link className={styles.link} href={paths.home}>
            Home
          </Link>
          <Link className={styles.link} href={paths.about}>
            About Us
          </Link>
          <Link className={styles.link} href={paths.contact}>
            Contact
          </Link>
          <Link className={styles.link} href={paths.login}>
            Login
          </Link>
          <button className="border rounded px-4 py-1 hover:scale-105 duration-200">
            Call Us
          </button>
        </div>
      </div>
    </header>
  );
}
