import { Button } from "@mui/material";
import "./Banner.css"
const Banner = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div className="banner">
        <h1>Business Growth For Gym Owner</h1>
        <p>Manage Gym Anytime AnyWhere</p>
        <Button>Google Play</Button>
        <Button>App Store</Button>
      </div>
      <div>
        <img
          src="https://gymbook.in/assets/img/hero-img.png"
          style={{
            alignSelf: "flex-end",
            width: "30rem",
            height: "auto",
            margin: "5px 202px",
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
