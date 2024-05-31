console.log("Hello work !");

/* WELCOME */
let betweenLinesColor = 150;
let numPointsX = null;
let numPointsY = null;
let unitWidth = null;
let unitHeight = null;
let points = null;

window.addEventListener("load", onLoad);
window.addEventListener("resize", onLoad);

// Main onLoad function
function onLoad() {
  console.log("LOAD WELCOME");

  const height = document.querySelector("#welcome").scrollHeight;
  const svg = createSVGElement(height);
  document.querySelector("#bg").innerHTML = '';
  document.querySelector("#bg").appendChild(svg);

  initializeGridPoints(height);

  randomizePoints();

  generatePolygons(svg);
}

// Create the SVG element
function createSVGElement(height) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", window.innerWidth);
  svg.setAttribute("height", height);
  return svg;
}

// Initialize grid points for the polygon
function initializeGridPoints(height) {
  const unitSize = (window.innerWidth + height) / 20;
  numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
  numPointsY = Math.ceil(height / unitSize) + 1;
  unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1));
  unitHeight = Math.ceil(height / (numPointsY - 1));

  points = [];

  for (let y = 0; y < numPointsY; y++) {
    for (let x = 0; x < numPointsX; x++) {
      points.push({
        x: unitWidth * x,
        y: unitHeight * y,
        originX: unitWidth * x,
        originY: unitHeight * y,
      });
    }
  }
}

// Randomize points within the grid
function randomizePoints() {
  points.forEach(point => {
    if (point.originX !== 0 && point.originX !== unitWidth * (numPointsX - 1)) {
      point.x = point.originX + Math.random() * unitWidth - unitWidth / 2;
    }
    if (point.originY !== 0 && point.originY !== unitHeight * (numPointsY - 1)) {
      point.y = point.originY + Math.random() * unitHeight - unitHeight / 2;
    }
  });
}

// Generate polygons based on the points
function generatePolygons(svg) {
  points.forEach((point, i) => {
    if (point.originX !== unitWidth * (numPointsX - 1) && point.originY !== unitHeight * (numPointsY - 1)) {
      const neighbors = getNeighbors(i);
      const rando = Math.floor(Math.random() * 2);
      createPolygon(svg, rando, neighbors);
    }
  });
}

// Get the neighbors of a point
function getNeighbors(index) {
  return {
    topLeftX: points[index].x,
    topLeftY: points[index].y,
    topRightX: points[index + 1].x,
    topRightY: points[index + 1].y,
    bottomLeftX: points[index + numPointsX].x,
    bottomLeftY: points[index + numPointsX].y,
    bottomRightX: points[index + numPointsX + 1].x,
    bottomRightY: points[index + numPointsX + 1].y,
  };
}

// Create a polygon element and add it to the SVG
function createPolygon(svg, rando, { topLeftX, topLeftY, topRightX, topRightY, bottomLeftX, bottomLeftY, bottomRightX, bottomRightY }) {
  for (let n = 0; n < 2; n++) {
    const polygon = document.createElementNS(svg.namespaceURI, "polygon");
    const pointsStr = getPointsString(rando, n, { topLeftX, topLeftY, topRightX, topRightY, bottomLeftX, bottomLeftY, bottomRightX, bottomRightY });
    polygon.setAttribute("points", pointsStr);
    polygon.setAttribute("fill", `rgba(0,0,255,${Math.random() / 5})`);
    polygon.setAttribute("stroke", `rgba(${betweenLinesColor},${betweenLinesColor},${betweenLinesColor},${Math.random()})`);
    svg.appendChild(polygon);
  }
}

// Get points string for the polygon based on random value
function getPointsString(rando, n, { topLeftX, topLeftY, topRightX, topRightY, bottomLeftX, bottomLeftY, bottomRightX, bottomRightY }) {
  if (rando === 0) {
    return n === 0
      ? `${topLeftX},${topLeftY} ${bottomLeftX},${bottomLeftY} ${bottomRightX},${bottomRightY}`
      : `${topLeftX},${topLeftY} ${topRightX},${topRightY} ${bottomRightX},${bottomRightY}`;
  } else {
    return n === 0
      ? `${topLeftX},${topLeftY} ${bottomLeftX},${bottomLeftY} ${topRightX},${topRightY}`
      : `${bottomLeftX},${bottomLeftY} ${topRightX},${topRightY} ${bottomRightX},${bottomRightY}`;
  }
}

/*********************************************************************/

/* CONTACT */
// Inititialisation des copier dans le press papier
var telephone = document.querySelector("#clipboard-tel");
telephone.addEventListener("click", (event) => {
  event.preventDefault();
  /*
    new Clipboard('#btnCopyToClipboard');
    */
  // Get the text field
  var copyText = "0644043059";
  var input = document.createElement("input");
  input.value = copyText;

  // Select the text field
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(input.value);

  // Alert the copied text
  alert("Copied the text: " + input.value);
});
/****************************************************************************/
