
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
  { name: "dodoheaven", lat:17.7, lon:63.5, size:9, lan:"🇯🇵" },
  { name: "cpc", lat:39, lon:25.7, size:9, lan:"🇲🇽" },
  { name: "syunmatata", lat:61.7, lon:82.8, size:9, lan:"🇨🇳" },
  { name: "chaos", lat:18.9, lon:81, size:8, lan:"🇺🇸" },
  { name: "moriorinvictus", lat:78.2, lon:14, size:8, lan:"🇲🇽" },
  { name: "ascendents", lat:30.1, lon:11, size:7, lan:"🇺🇸" },
  { name: "dashwood9", lat:12.1, lon:50, size:5, lan:"🇯🇵" },
  { name: "mkk", lat:33, lon:45, size:6, lan:"🇯🇵" },
  { name: "dharius", lat:15.8, lon:71.1, size:6, lan:"🇮🇳" },
  { name: "grtf", lat:69.6, lon:13.6, size:6, lan:"🇨🇳" },
  { name: "los-mugiwaras", lat: 	40, lon:85, size:7, lan:"🇲🇽" },
  { name: "raskolnikov", lat:60.9, lon:33.8, size:6, lan:"🇺🇸" },
  { name: "chialuc24", lat:70.6, lon:34.0, size:3, lan:"🇲🇽" },
  { name: "capsule-corp", lat:70, lon:30, size:7, lan:"🇺🇸" },
  { name: "yoshi", lat:49.6, lon:17.7, size:6, lan:"🇯🇵" },
  { name: "orthrus", lat:88.7, lon:21.4, size:5, lan:"🇨🇳" },
  { name: "hug-us", lat:25.2, lon:70.7, size:4, lan:"🇨🇳" },
  { name: "akatsuki", lat:27, lon:17, size:4, lan:"🇲🇽" },
  { name: "668-334", lat:64.6, lon:29.1, size:4, lan:"🇨🇳" },
  { name: "gucchann-maruggo", lat:72.8, lon:84.6, size:3, lan:"🇨🇳" }, //check!
  { name: "smokedaweed", lat:48, lon:48, size:3, lan:"🇲🇽" },
  { name: "tredmir", lat:84, lon:63, size:3, lan:"🇧🇷" },
  { name: "mega-dodo", lat:11, lon:11, size:3, lan:"🇯🇵" }, //check!
  
  // { name: "korea1", lat:75.4, lon:83.0, size:3, lan:"🇰🇷" },
  { name: "lamancha", lat:57.4, lon:18.8, size:3, lan:"🇺🇸" },
  { name: "acupuncture", lat:84.6, lon:21.9, size:3, lan:"🇨🇳" },
  { name: "makiny", lat:76.2, lon:40.6, size:3, lan:"🇨🇳" },
  { name: "from", lat:78.9, lon:36, size:3, lan:"🇯🇵" },
  { name: "tono", lat:46, lon:63, size:3, lan:"🇯🇵" },
  // { name: "aiden7667", lat:84, lon:57, size:3, lan:"🇺🇸" },
  { name: "asian7", lat:84.1, lon:81.8, size:3, lan:"🇨🇳" },
  { name: "asian8", lat:65.8, lon:83.5, size:3, lan:"🇨🇳" },
  // { name: "maru-ggo", lat:73, lon:84, size:3, lan:"🇨🇳" },
  { name: "garuzinho", lat:38, lon:17, size:3, lan:"🇧🇷" },
  { name: "5ep", lat:32.3, lon:17.3, size:2, lan:"🇨🇳" },
  { name: "order-of-axe", lat:41, lon:66, size:2, lan:"🇺🇸" },
  { name: "702165", lat:81.7, lon:81.2, size:2, lan:"🇨🇳" },
]; const updated = "20220106"


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