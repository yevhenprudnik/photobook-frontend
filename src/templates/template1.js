export const buildHtml = (img1, img2, text1, text2) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Figures Inside Square</title>
    <style>
.container {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
}

.square {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: #3498db;
}

.top-img {
  display: flex;
  padding-top: 5%;
  padding-left: 5%;
  align-items: center;
}

.circle-img {
  width: 50%;
  border-radius: 100%;
}

.bottom-img {
  display: flex;
  align-items: center;
  padding-top: 15%;
  padding-left: 30%;
}

.rectangle-img {
  width: 90%;
}

    </style>
  </head>
  <body>
    <div class="container">
      <div class="square">
        <div class="top-img">
          <div>
            <img
              src="${img1}"
              alt="Circle Image"
              class="circle-img"
            />
          </div>
          <span> ${text1} </span>
        </div>
        <div class="bottom-img">
          <span> ${text2} </span>
          <div>
            <img
              src="${img2}"
              alt="Circle Image"
              class="rectangle-img"
            />
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
