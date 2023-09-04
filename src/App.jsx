import image from "./lautaro-andreani-xkBaqlcqeb4-unsplash (1).jpg";
import "./App.css";

import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ImageComponent imageProp={image} alt="react" style={{ margin: "3rem", border: "4px solid #33ACBA" }} />
      <ButtonComponent
        title="Sono un bottone"
        style={{
          border: "none",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: "#33ACBA",
          color: "white",
          fontWeight: "bold",
        }}
      />
    </div>
  );
}

export default App;
