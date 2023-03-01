import Rose from "../assets/Butter_Rose.jpg";
import Cinnamon from "../assets/cinnamon_rolls.jpg";
import Ginger from "../assets/ginger_Maple Cake.jpg";
import Red from "../assets/redVelvet.jpg";
import Roses from "../assets/Roses.jpg";
import Strawberry from "../assets/strawberryshortcake.jpg";
import Yellow from "../assets/yellowcake_choc.jpg";
import Custom from "../assets/custom.jpg";

export default function Menu() {
  return (
    <>
      <div className="w3-container">
        <h2 className="w3-center">Menu Items</h2>
        <div className="w3-row-padding w3-section w3-stretch">
          <div className="w3-col s4">
            <div className="w3-card-4">
              <img src={Rose} alt="Rose Cake" style={{ width: "100%" }}></img>
              <div className="w3-container w3-center">
                <p>Photo 1</p>
              </div>
            </div>
          </div>
          <div className="w3-col s4">
            <div className="w3-card-4">
              <img
                src={Cinnamon}
                alt="cinnamon rolls"
                style={{ width: "100%" }}
              ></img>
              <div className="w3-container w3-center">
                <p>Photo 2</p>
              </div>
            </div>
          </div>
          <div className="w3-col s4">
            <div className="w3-card-4">
              <img
                src={Ginger}
                alt="gingerbread and maple desert with almonds to top"
                style={{ width: "100%" }}
              ></img>
              <div className="w3-container w3-center">
                <p>Photo 3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w3-row-padding  w3-section w3-stretch">
          <div className="w3-col s4">
            <div className="w3-card-4">
              <img
                src={Red}
                alt="Red Velvet Cake"
                style={{ width: "100%" }}
              ></img>
              <div className="w3-container w3-center">
                <p>Photo 4</p>
              </div>
            </div>
          </div>
          <div className="w3-col s4">
          <div className="w3-card-4">
            <img
              src={Roses}
              alt="gingerbread and maple desert with almonds to top"
              style={{ width: "100%" }}
            ></img>
              <div className="w3-container w3-center">
                <p>Photo 5</p>
              </div>
            </div>
            
          </div>
          <div className="w3-col s4">
          <div className="w3-card-4">
            <img
              src={Strawberry}
              alt="gingerbread and maple desert with almonds to top"
              style={{ width: "100%" }}
            ></img>
              <div className="w3-container w3-center">
                <p>Photo 6</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="w3-row-padding  w3-section w3-stretch">
          <div className="w3-col s4">
          <div className="w3-card-4">
            <img
              src={Yellow}
              alt="gingerbread and maple desert with almonds to top"
              style={{ width: "100%" }}
            ></img>
              <div className="w3-container w3-center">
                <p>Photo 7</p>
              </div>
            </div>
            
          </div>
          <div className="w3-col s4">
          <div className="w3-card-4">
            <img
              src={Custom}
              alt="gingerbread and maple desert with almonds to top"
              style={{ width: "100%" }}
            ></img>
              <div className="w3-container w3-center">
                <p>Photo 8</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
