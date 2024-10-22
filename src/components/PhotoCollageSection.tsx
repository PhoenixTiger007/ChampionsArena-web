import React from "react";
import Image from "next/image";
import styles from "../styles/PhotoCollage.module.css";

const photos = [
  "/assets/Images/basketball-player-having-team-talks.jpg",
  "/assets/Images/basketball-player-relaxing-court.jpg",
  "/assets/Images/cool-black-man-doing-sports-playing-basketball-sunrise-jumping-silhouette.jpg",
  "/assets/Images/football-trainer-teaching-his-pupils.jpg",
  "/assets/Images/pexels-noellegracephotos-906073.jpg",
  "/assets/Images/pexels-pixabay-274422.jpg",
  "/assets/Images/side-view-female-friends-playing-basketball.jpg",
  "/assets/Images/side-view-smiley-woman-training-with-ball.jpg",
  "/assets/Images/street-basketball-athlete-performing-huge-slam-dunk-court.jpg",
  "/assets/Images/two-basketball-player-outdoors-court.jpg",
  // Repeat some images to fill the 16-image layout
  "/assets/Images/basketball-player-having-team-talks.jpg",
  "/assets/Images/basketball-player-relaxing-court.jpg",
  "/assets/Images/cool-black-man-doing-sports-playing-basketball-sunrise-jumping-silhouette.jpg",
  "/assets/Images/football-trainer-teaching-his-pupils.jpg",
  "/assets/Images/pexels-noellegracephotos-906073.jpg",
  "/assets/Images/pexels-pixabay-274422.jpg",
];

export const PhotoCollageSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#1C1C1C] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Community
        </h2>
        <div className={styles.collage}>
          {photos.map((photo, index) => (
            <div key={index} className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image
                  src={photo}
                  alt={`Community member ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
