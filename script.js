
const cfg = {
  grid: [10,20,30,40,50,60,70,80,90]
};
const style = {
  grid: {
    line: "stroke-width:.1;stroke:#fff;stroke-opacity: .4;",
    txt: "font-size:.1rem; stroke:none; fill:#999;"
  },
  marker: {
    line: "stroke-width:.1;stroke:red;stroke-opacity: .8;",
  },
  tribe: {
    circle: "stroke-width:.2;stroke:white;stroke-opacity: .8;fill:#00000077",
    label: "font-size:1.5px; stroke:none; fill:#fff;",
    labelbg: "font-size:1.5px; stroke:#00000044; fill:#000;"
    // labelbg: "font-size:1.5px; stroke:#ffffffcc; fill:#000;"
  }
  // grid: {
  //   color: "#cccccc"
  // }
};

const tribes = [
  { name: "pride", lat:17.7, lon:63.5, size:7, lan:"🇺🇸" },
  { name: "skade", lat:25, lon:71, size:3, lan:"🇺🇸" },
  { name: "ra", lat:30, lon:84, size:5, lan:"🇺🇸" },
  { name: "the4nation", lat:83.8, lon:60.1, size:6, lan:"🇺🇸" },
  // { name: "dodoheaven", lat:17.7, lon:63.5, size:9, lan:"🇯🇵" },
  { name: "popculture", lat:45, lon:30, size:6, lan:"🇺🇸" },
  { name: "nightmare", lat:78.8, lon:77.4, size:9, lan:"🇺🇸" },
  { name: "kgb", lat:87.4, lon:51.0, size:9, lan:"?" },
  // { name: "nightmare", lat:80, lon:75, size:9, lan:"🇨🇳" },
  { name: "north", lat:51.5, lon:41.8, size:6, lan:"🇺🇸" },
  { name: "cuca", lat:78, lon:45, size:7, lan:"🇲🇽" },
  { name: "pacosg", lat:38.7, lon:17.7, size:4, lan:"🇲🇽" },

  // { name: "ascendents", lat:30.1, lon:11, size:7, lan:"🇺🇸" },
  // { name: "dharius", lat:15.8, lon:71.1, size:6, lan:"🇮🇳" },
  // { name: "tredmir", lat:84, lon:63, size:3, lan:"🇧🇷" },
]; const updated = "20230222"


const markers = [
  // { name: "tiny final sand", lat: 17.5, lon: 89.5 },
  { name: "red obe center", lat: 79.7, lon: 18.0 },
  { name: "blue obe center", lat: 25, lon: 25.8 },
  { name: "green obe center", lat: 58.7, lon: 70.1 },
  { name: "lil beach oasis w", lat: 60.0, lon: 14.5 },
  { name: "lil beach oasis s", lat: 87.0, lon: 55.5 },
  { name: "small cave berg", lat: 14.4, lon: 15.4 },
  { name: "north berg", lat: 11.7, lon: 29.7 },
  { name: "hidden lake", lat: 22.0, lon: 67.5 },
  { name: "far northeast speck", lat: 13.1, lon: 85.5 },
  { name: "lil horn south of cave", lat: 71.9, lon: 83.7 },
  { name: "lil horn facing volc", lat: 54.5, lon: 38.3 },
  { name: "pedestal", lat: 43.7, lon: 64.4 },
];

function update(){
  document.getElementById("graph").innerHTML = build_svg();

  // var circles = document.getElementsByClassName('tribe');
  // for (var i = 0; i < circles.length; i++) {
  //     circles[i].addEventListener('mouseover', mouseOverEffect);
  //     circles[i].addEventListener('mouseout', mouseOutEffect);
  // }
  // document.getElementsByClassName("xtribe").addEventListener('mouseover', function(e) {
  //   console.log('hi')
  //   // e.currentTarget.setAttribute('fill', 'red');
  //   // e.currentTarget.setAttribute('stroke', 'none');
  // });
}

// function mouseOverEffect() {
//   console.log('hi');
//   // this.classList.add("bar-highlight");
// }
// function mouseOutEffect() {
//   console.log('bye');
//   // this.classList.remove("bar-highlight");
// }


function build_svg(){
  let svg = ``;
  svg += `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 -5 109 110" stroke="currentColor">
  <defs>
    <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
      <image preserveAspectRatio=none href="map.jpg" x="-6.2" y="-7" width="110.5" height="114" opacity=1.0 />
    </pattern>
    <filter id="blur">
      <feGaussianBlur stdDeviation="10"></feGaussianBlur>
    </filter>
  </defs>
  `;
  
  // svg += `<rect width="100" height="100" style="stroke-width:.1;stroke:${style.grid.color}" />`;
  svg += `<rect width="100" height="100" fill="url(#img1)" stroke=none />`;
  
  cfg.grid.forEach(x => {
    svg += `<line x1=0 y1=${x} x2=100 y2=${x} style="${style.grid.line}" />`;
    svg += `<line x1=${x} y1=0 x2=${x} y2="100" style="${style.grid.line}" />`;

    svg += `<text x=-4 y=${x+.8} style="${style.grid.txt}">${x}</text>`;
    svg += `<text x=${x-1} y=103 style="${style.grid.txt}">${x}</text>`;
  });
  
  tribes.forEach(x => {
    svg += `<circle class="tribe" cx=${x.lon} cy=${x.lat} r=${0.8 + (x.size*.14)} style="${style.tribe.circle}" />`;
    // svg += `<text x=${x.lon+2} y=${x.lat+.5} style="${style.tribe.labelbg}">${x.name} ${x.lan}</text>`;
    // svg += `<text class=tribe x=${x.lon-0.3} y=${x.lat+.5} style="${style.tribe.label}">${x.name} ${x.lan}</text>`;
    svg += `<text class=tribe x=${x.lon+2} y=${x.lat+.5} style="${style.tribe.label}">${x.name} ${x.lan}</text>`;
  });

  // markers.forEach(x => {
  //   svg += `<circle cx=${x.lon} cy=${x.lat} r=1 style="stroke-width:.2;stroke:red;stroke-opacity: .8;" />`;
  //   svg += `<line x1=${x.lon} y1=${x.lat} x2=${x.lon+2} y2=${x.lat-2} style="${style.marker.line}" />`;
  // });

  svg += `<text x=73.3 y=98 style="${style.tribe.label}">updated ${updated}</text>`;


  svg += `</svg>`;
  return svg;
}


  
update();
