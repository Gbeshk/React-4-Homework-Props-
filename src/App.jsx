import "./App.css";
import Organism from "./components/organism/organism";
import pizzapic from "./assets/images/pizza.svg";
import tortellinipic from "./assets/images/tortellini.svg";
import cakepic from "./assets/images/cake.svg";
function App() {
  return (
    <>
      <Organism
        imgsrc={pizzapic}
        name="Pepperoni Pizza"
        text="Premium pepperoni and cheese is made with real mozzarella on original hand_tossed crust."
        pcal="265 Cal"
        pcf="P/F/C: 12/10/31"
        temp="53.8 °C"
        newprice="$23.90"
        oldprice="$29.90"
        leafid="pizzaleaf"
      />
      <Organism
        imgsrc={tortellinipic}
        name="Tortellini"
        text="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        pcal="270 Cal"
        pcf="P/F/C: 18/4/41"
        temp="42.4 °C"
        newprice="$17.90"
        oldprice="$22.90"
      />
      <Organism
        imgsrc={cakepic}
        name="Strawberry Cake"
        pcal="346 Cal"
        text="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
        pcf="P/F/C: 6/14/49"
        temp="13.9 °C"
        newprice="$13.90"
        oldprice="$18.90"
        fireid="cakefire"
        leafid="cakeleaf"
      />
    </>
  );
}

export default App;
