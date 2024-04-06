to serve the site with reload-on-file-save:

`sudo npm install reload`

then run `reload -b` 

You can run your file in http-server.

1> Have Node.js installed in your system.

2> In CMD, run the command npm install http-server -g

3> Navigate to the specific path of your file folder in CMD and run the command http-server

4> Go to your browser and type localhost:8080. Your Application should run





# Glowing rainbow button border:
<!-- HTML !-->
<button class="button-85" role="button">Button 85</button>

/* CSS */
.button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}

# slider button that slides from a sleeping to happy face
<div class="checkbox-wrapper-5">
  <div class="check">
    <input id="check-5" type="checkbox">
    <label for="check-5"></label>
  </div>
</div>

<style>
  .checkbox-wrapper-5 .check {
    --size: 40px;

    position: relative;
    background: linear-gradient(90deg, #f19af3, #f099b5);
    line-height: 0;
    perspective: 400px;
    font-size: var(--size);
  }

  .checkbox-wrapper-5 .check input[type="checkbox"],
  .checkbox-wrapper-5 .check label,
  .checkbox-wrapper-5 .check label::before,
  .checkbox-wrapper-5 .check label::after,
  .checkbox-wrapper-5 .check {
    appearance: none;
    display: inline-block;
    border-radius: var(--size);
    border: 0;
    transition: .35s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
  }

  .checkbox-wrapper-5 .check label {
    width: calc(2.2 * var(--size));
    height: var(--size);
    background: #d7d7d7;
    overflow: hidden;
  }

  .checkbox-wrapper-5 .check input[type="checkbox"] {
    position: absolute;
    z-index: 1;
    width: calc(.8 * var(--size));
    height: calc(.8 * var(--size));
    top: calc(.1 * var(--size));
    left: calc(.1 * var(--size));
    background: linear-gradient(45deg, #dedede, #ffffff);
    box-shadow: 0 6px 7px rgba(0,0,0,0.3);
    outline: none;
    margin: 0;
  }

  .checkbox-wrapper-5 .check input[type="checkbox"]:checked {
    left: calc(1.3 * var(--size));
  }

  .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label {
    background: transparent;
  }

  .checkbox-wrapper-5 .check label::before,
  .checkbox-wrapper-5 .check label::after {
    content: "· ·";
    position: absolute;
    overflow: hidden;
    left: calc(.15 * var(--size));
    top: calc(.5 * var(--size));
    height: var(--size);
    letter-spacing: calc(-0.04 * var(--size));
    color: #9b9b9b;
    font-family: "Times New Roman", serif;
    z-index: 2;
    font-size: calc(.6 * var(--size));
    border-radius: 0;
    transform-origin: 0 0 calc(-0.5 * var(--size));
    backface-visibility: hidden;
  }

  .checkbox-wrapper-5 .check label::after {
    content: "●";
    top: calc(.65 * var(--size));
    left: calc(.2 * var(--size));
    height: calc(.1 * var(--size));
    width: calc(.35 * var(--size));
    font-size: calc(.2 * var(--size));
    transform-origin: 0 0 calc(-0.4 * var(--size));
  }

  .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::before,
  .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::after {
    left: calc(1.55 * var(--size));
    top: calc(.4 * var(--size));
    line-height: calc(.1 * var(--size));
    transform: rotateY(360deg);
  }

  .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::after {
    height: calc(.16 * var(--size));
    top: calc(.55 * var(--size));
    left: calc(1.6 * var(--size));
    font-size: calc(.6 * var(--size));
    line-height: 0;
  }
</style>
