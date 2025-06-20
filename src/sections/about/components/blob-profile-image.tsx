interface BlobProfileImageProps {
  imageSrc: string;
  altText: string;
}

const BlobProfileImage: React.FC<BlobProfileImageProps> = ({
  imageSrc,
  altText,
}) => {
  return (
    <div className="hidden xl:block relative">
      {/* Animated Blob Border */}
      <div
        className="absolute bg-gradient-to-br from-purple-400/60 to-pink-400/60 blur-sm"
        style={{
          width: "320px",
          height: "550px",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "wobblyBlob 4s ease-in-out infinite",
          top: "-4px",
          left: "-4px",
        }}
      ></div>

      {/* Animated Image Container */}
      <div
        className="relative w-80 h-[540px] overflow-hidden"
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "wobblyBlobImage 6s ease-in-out infinite",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
          style={{
            imageRendering: "auto",
            filter: "contrast(1.05) brightness(1.02)",
          }}
          loading="lazy"
        />

        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-purple-300/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-300/10"></div>
      </div>

      {/* Subtle outer glow */}
      <div className="-z-10 absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-2xl scale-110"></div>
    </div>
  );
};

export default BlobProfileImage;
