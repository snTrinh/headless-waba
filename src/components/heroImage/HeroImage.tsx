import React from "react";
import styles from "./HeroImage.module.css";

interface HeroImageProps {
  imageUrl: string;
  title: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, title }) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default HeroImage;
