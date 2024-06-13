import { Button } from "@/components/ui/button";
import { paths } from "@/helpers/paths";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className="fixed w-full py-5 bg-red-50">
      <div
        className="container mx-auto flex justify-between items-center"
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
          <Button className="px-10" variant="outline">
            {" "}
            Call Us
          </Button>
        </div>
      </div>
    </header>
  );
}
