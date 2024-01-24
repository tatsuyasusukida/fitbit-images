import document from "document";

type State = {
  mode: "tile" | "image";
};

const state: State = {
  mode: "tile",
};

const el = {
  image: document.getElementById("image") as ImageElement,
  tileList: document.getElementById("myList") as TileList,
};

if (!el.image) {
  throw new Error("!el.image");
}

if (!el.tileList) {
  throw new Error("!el.tileList");
}

el.image.onclick = () => {
  state.mode = "tile";
  updateDisplay();
};

el.tileList.onclick = () => {
  state.mode = "image";
  updateDisplay();
};

function updateDisplay() {
  if (state.mode === "tile") {
    el.tileList.class = "";
    el.image.class = "hidden";
  } else if (state.mode === "image") {
    el.tileList.class = "hidden";
    el.image.class = "";
  }
}
