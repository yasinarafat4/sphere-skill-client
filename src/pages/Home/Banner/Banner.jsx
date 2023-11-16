import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const bannerImg = [
    "https://i.ibb.co/h79X8BT/banner-1.png",
    "https://i.ibb.co/vqpLRCT/banner-2.png",
    "https://i.ibb.co/j4Yk5m0/banner-3.png",
  ];

  return (
    <AutoplaySlider bullets={false} play={true} interval={6000}>
      {bannerImg.map((imgSrc, index) => (
        <div key={index} className="-mt-24">
          <img src={imgSrc} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default Banner;
