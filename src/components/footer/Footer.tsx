// src/components/footer/Footer.tsx
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Link from "next/link";
import { getClient } from "../../lib/apollo";
import styles from "./Footer.module.css";

export default async function Footer() {
  const client = getClient();

  return (
    <footer className={styles.footer}>
      {/* Left Column: Partners */}
      <div className={styles.footerLeft}>
        <h6>Our Partners</h6>
        <div className={styles.partners}>
          <Link href={"/"} target="_blank" rel="noopener noreferrer">
            <Image
              src={"../../public/next.svg"}
              className={styles.partnerLogo}
              width={100}
              height={50}
              alt={""}
            />
          </Link>
        </div>
      </div>

      {/* Right Column: Social Media */}
      <div className={styles.footerRight}>
        <h6>Follow Us</h6>
        <div className={styles.socialIcons}>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
