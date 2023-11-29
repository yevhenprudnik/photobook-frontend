import { useState } from "react";
import { buildHtml } from "../../templates/template1";

const images = [
  "https://www.telegraph.co.uk/content/dam/music/2022/09/29/TELEMMGLPICT000310965819_trans_NvBQzQNjv4BqPWZQj7ux8-UhpCyh34jJNnfvap5gYklvl0Q3SnbtO9A.jpeg?imwidth=480",
  "https://townsquare.media/site/366/files/2018/08/Ronnie-James-Dio.jpg?w=1620&q=75",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDBbxFxAim4zq5RqyReg6wQZIMtgep8-99Q&usqp=CAU",
  "https://www.telegraph.co.uk/content/dam/music/2022/09/29/TELEMMGLPICT000310979788_trans_NvBQzQNjv4BqBwIox_BSEd9QZItqcEPhq8JOh_HSRMPT1Y-N53JqBIA.jpeg",
];

const texts = [
  "Hello, there!",
  "Rainbow in the DARK",
  "Last in Line",
  "Stargazer",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const changeContent = () => {
    console.log({index});
    setIndex(index === 2 ? 0 : index + 1);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: buildHtml(
              images[index],
              images[index + 1],
              texts[index],
              texts[index + 1]
            ),
          }}
        ></div>
        <button onClick={changeContent}>Click me</button>
      </div>
    </div>
  );
};

export default Home;
