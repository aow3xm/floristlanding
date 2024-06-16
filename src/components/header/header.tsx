"use client";
import { paths } from "@/helpers/paths";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import clsx from "clsx";
import useScroll from "@/hooks/useScroll";
export default function Header() {
  const isScrolled = useScroll();
  const headerClass = clsx("fixed w-full z-50 py-5 duration-500", {
    "bg-black/5 backdrop-blur-md": isScrolled,
  });
  return (
    <header className={headerClass}>
      <div
        className="container mx-auto flex justify-between items-center text-white"
        style={{ fontFamily: "var(--font-lato)" }}
      >
        <Link href={paths.home}>
          <Image src="/brand.svg" alt="Logo" width={50} height={50} />
        </Link>
        <div className="hidden md:block space-x-8">
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
