import image5 from "../assets/bananas1.png";
import image2 from "../assets/bbary-1.png";
import image3 from "../assets/coconut.png";
import image4 from "../assets/kiwi.png";
import image1 from "../assets/red_strawberries.png";
import Carousel from "./Slider";

function App() {
  const slides = [
    {
      image: image1,
      title: "Strawberries",
      backgroundColor: "#FBC9C9",
      description: "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.",
    },
    {
      image: image2,
      title: "Blackbary",
      backgroundColor: "#DCB7F2",
      description: "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.",
    },
    {
      image: image3, 
      backgroundColor: "#CEB7B4",
      title: "Coconut",
      description: "Coconuts are tropical fruits with a hard outer husk, a tough shell, and a deliciously sweet, creamy flesh inside. They are widely known for their versatility, providing coconut water, milk, oil, and grated coconut for culinary use. Coconuts are a rich source of healthy fats, fiber, and essential minerals, making them a nutritious addition to various dishes and beverages.",
    },
    {
      image: image4,
      title: "Kiwi",
      backgroundColor: "#F2DBAF",
      description: "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.",
    },
    {
      image: image5,
      title: "Banana",
      backgroundColor: "#FFEE57",
      description: "Bananas are a popular tropical fruit known for their distinctive yellow color and sweet taste. They are botanically classified as berries and grow in clusters on large herbaceous plants. Bananas are rich in essential nutrients such as potassium, vitamin C, and dietary fiber, making them a convenient and healthy snack option for athletes and individuals of all ages.",
    },
  ];

  return (
    <div className="w-[60%] m-auto pt-11">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
