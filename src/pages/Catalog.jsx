import Item from "../components/Catalog/Item";
import "../styles/Catalog.css"

function Catalog() {
 
  const mockData = [
    { brand: "berg", name: "зеркало настенное liotti 43 CM", price: 6900, amount: 82, url: require("../assets/images/catalog/mirror.jpg").default },
    { brand: "homeadore", name: "зеркало vintage 116 CM", price: 29700, amount: 3, url: require("../assets/images/catalog/mirror_3.jpg").default },
    // { brand: "umbra", name: "зеркала декоративные Dima 022 / 022 / 018 CM", price: 4700, amount: 11, url: require("../assets/images/catalog/mirror_5.jpg").default },
    { brand: "la forma", name: "зеркало takashi 60 CM", price: 9900, amount: 10, url: require("../assets/images/catalog/mirror_4.jpg").default },
    { brand: "tomas stern", name: "фактурная картина winter garden 50 CM", price: 3300, amount: 82, url: require("../assets/images/catalog/painting_tree.jpg").default },
    { brand: "la forma", name: "картина umbelina 50X120 CM", price: 11990, amount: 5, url: require("../assets/images/catalog/painting.jpg").default },
    { brand: "la forma", name: "фактурная картина alvida 50X50 CM", price: 5990, amount: 3, url: require("../assets/images/catalog/brick_wall.jpg").default },
    { brand: "la forma", name: "картина yulissa 50X70 CM", price: 7990, amount: 5, url: require("../assets/images/catalog/painting_2.jpg").default },
    { brand: "eichholtz", name: "плед", price: 11200, amount: 0, url: require("../assets/images/catalog/plaid_2.jpg").default },
    { brand: "eichholtz", name: "настольная лампа half moon 48X13X53 CM", price: 67300, amount: 2, url: require("../assets/images/catalog/crescent_lamp.jpg").default },
    { brand: "tkano", name: "покрывало вафельное из хлопка Essential", price: 4790, amount: 89, url: require("../assets/images/catalog/plaid.jpg").default },
    { brand: "eichholtz", name: "настольная лампа riley 46X28X73 CM", price: 73200, amount: 1, url: require("../assets/images/catalog/rings_lamp.jpg").default },
    { brand: "tomas stern", name: "зеркало butterfly meadow 74X71X7 CM", price: 8800, amount: 10, url: require("../assets/images/catalog/mirror_5.jpg").default },
    { brand: "homeadore", name: "декоративная фигурка bunny 16X12X19 CM", price: 7300, amount: 0, url: require("../assets/images/catalog/rabbit_figurine.jpg").default },
    { brand: "presenttime", name: "полигональная статуэтка origami cat", price: 4800, amount: 0, url: require("../assets/images/catalog/cat_figurine.jpg").default },
    { brand: "restoration hardware", name: "слон миниатюра 40X29X28 CM бронза", price: 74500, amount: 1, url: require("../assets/images/catalog/elephant_figurine.jpg").default }
 ]

  return (
    <div className="catalog-content">
      <Item data={mockData}/>
      {/* <img className="test" src={require("").default}alt="" /> */}
    </div>
  );
}

export default Catalog;