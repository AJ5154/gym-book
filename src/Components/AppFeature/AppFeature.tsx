import "./AppFeatures.css";
const AppFeature = () => {
  return (
    <div>
      <h2
        className="app_heading"
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "100",
        }}
      >
        App Features
      </h2>
      <p className="app_p">How 1000+ Gym Using GymBook to manage there gym</p>
    </div>
  );
};

export default AppFeature;
