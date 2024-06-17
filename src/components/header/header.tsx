"use client";
import { paths } from "@/helpers/paths";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import clsx from "clsx";
import useScroll from "@/hooks/useScroll";
export default function Header() {
  const isScrolled:boolean = useScroll(500);
  const headerClass:string = clsx("fixed w-full z-50 py-5 duration-200", {
    "bg-black/5 backdrop-blur-md": isScrolled,
  });
  const linkClass:string = clsx("hidden md:block space-x-8 font-semibold", {
    "text-green-900": isScrolled,
  });
  return (
    <header className={headerClass}>
      <nav
        className="container mx-auto flex justify-between items-center text-white"
        style={{ fontFamily: "var(--font-lato)" }}
      >
          <Link href={paths.home}>
            <Image src="/brand.svg" alt="Logo" width={50} height={50} />
          </Link>
          <div className={linkClass}>
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
            <button className="border rounded px-4 py-1">
              Call Us
            </button>
        </div>

      </nav>
    </header>
  );
}
