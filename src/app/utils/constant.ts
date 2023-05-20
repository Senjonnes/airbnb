import { Frame } from '../models/frame.model';

export const LOGO =
  'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20102%2032%22%3E%3Cg%20id%3D%22ss2089917462_1%22%3E%3Cpath%20d%3D%22M%200%2032%20L%200%200%20L%20102%200%20L%20102%2032%20Z%22%20fill%3D%22transparent%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2029.386%2022.71%20C%2029.243%2022.307%2029.075%2021.918%2028.916%2021.556%20C%2028.67%2021.001%2028.413%2020.445%2028.164%2019.907%20L%2028.144%2019.864%20C%2025.925%2015.059%2023.544%2010.188%2021.066%205.387%20L%2020.961%205.183%20C%2020.708%204.693%2020.447%204.186%2020.178%203.688%20C%2019.86%203.057%2019.474%202.464%2019.028%201.917%20C%2018.524%201.317%2017.896%200.834%2017.185%200.503%20C%2016.475%200.171%2015.7%20-0%2014.916%200%20C%2014.132%200%2013.358%200.172%2012.648%200.503%20C%2011.938%200.835%2011.309%201.317%2010.806%201.918%20C%2010.359%202.465%209.974%203.059%209.656%203.689%20C%209.385%204.191%209.121%204.703%208.866%205.198%20L%208.769%205.387%20C%206.291%2010.188%203.909%2015.059%201.69%2019.864%20L%201.658%2019.934%20C%201.413%2020.463%201.161%2021.01%200.919%2021.556%20C%200.759%2021.917%200.592%2022.306%200.448%2022.71%20C%200.037%2023.81%20-0.094%2024.995%200.067%2026.159%20C%200.238%2027.334%200.713%2028.445%201.446%2029.38%20C%202.179%2030.316%203.144%2031.044%204.246%2031.493%20C%205.078%2031.83%205.968%2032.002%206.866%2032%20C%207.148%2032%207.43%2031.983%207.71%2031.951%20C%208.846%2031.806%209.941%2031.437%2010.932%2030.864%20C%2012.232%2030.134%2013.515%2029.064%2014.917%2027.535%20C%2016.319%2029.064%2017.603%2030.134%2018.902%2030.864%20C%2019.893%2031.437%2020.989%2031.806%2022.124%2031.951%20C%2022.404%2031.983%2022.686%2032%2022.968%2032%20C%2023.866%2032.002%2024.756%2031.83%2025.588%2031.493%20C%2026.69%2031.044%2027.655%2030.316%2028.389%2029.38%20C%2029.122%2028.445%2029.597%2027.334%2029.768%2026.159%20C%2029.929%2024.995%2029.798%2023.81%2029.386%2022.71%20Z%20M%2014.917%2024.377%20C%2013.182%2022.177%2012.068%2020.134%2011.677%2018.421%20C%2011.517%2017.779%2011.479%2017.113%2011.566%2016.457%20C%2011.634%2015.977%2011.811%2015.518%2012.082%2015.115%20C%2012.416%2014.681%2012.846%2014.33%2013.337%2014.089%20C%2013.829%2013.847%2014.37%2013.722%2014.918%2013.722%20C%2015.466%2013.722%2016.006%2013.848%2016.498%2014.089%20C%2016.989%2014.331%2017.419%2014.682%2017.753%2015.115%20C%2018.024%2015.518%2018.201%2015.977%2018.269%2016.458%20C%2018.356%2017.114%2018.318%2017.78%2018.157%2018.422%20C%2017.766%2020.135%2016.653%2022.177%2014.917%2024.377%20Z%20M%2027.741%2025.869%20C%2027.621%2026.691%2027.289%2027.467%2026.776%2028.122%20C%2026.264%2028.776%2025.589%2029.285%2024.818%2029.599%20C%2024.039%2029.911%2023.194%2030.022%2022.361%2029.92%20C%2021.495%2029.809%2020.66%2029.524%2019.907%2029.082%20C%2018.75%2028.432%2017.579%2027.435%2016.261%2025.971%20C%2018.359%2023.385%2019.669%2021%2020.154%2018.877%20C%2020.372%2017.984%2020.42%2017.058%2020.293%2016.147%20C%2020.179%2015.363%2019.888%2014.615%2019.442%2013.959%20C%2018.919%2013.252%2018.238%2012.677%2017.452%2012.28%20C%2016.666%2011.884%2015.798%2011.678%2014.917%2011.678%20C%2014.037%2011.678%2013.169%2011.884%2012.383%2012.28%20C%2011.597%2012.676%2010.915%2013.251%2010.393%2013.959%20C%209.947%2014.614%209.656%2015.362%209.541%2016.146%20C%209.415%2017.057%209.462%2017.982%209.68%2018.875%20C%2010.165%2020.999%2011.475%2023.384%2013.573%2025.971%20C%2012.255%2027.435%2011.084%2028.432%209.928%2029.082%20C%209.175%2029.524%208.34%2029.809%207.474%2029.92%20C%206.641%2030.022%205.795%2029.911%205.016%2029.599%20C%204.246%2029.285%203.571%2028.776%203.058%2028.122%20C%202.546%2027.467%202.213%2026.691%202.094%2025.869%20C%201.979%2025.033%202.077%2024.182%202.378%2023.395%20C%202.493%2023.073%202.627%2022.757%202.793%2022.382%20C%203.027%2021.851%203.277%2021.311%203.518%2020.79%20L%203.55%2020.72%20C%205.756%2015.942%208.125%2011.098%2010.589%206.323%20L%2010.687%206.133%20C%2010.938%205.646%2011.198%205.143%2011.46%204.656%20C%2011.71%204.155%2012.013%203.682%2012.364%203.244%20C%2012.675%202.869%2013.065%202.567%2013.506%202.359%20C%2013.947%202.152%2014.429%202.044%2014.917%202.044%20C%2015.405%202.044%2015.887%202.152%2016.328%202.359%20C%2016.769%202.567%2017.159%202.869%2017.47%203.244%20C%2017.821%203.681%2018.124%204.154%2018.374%204.655%20C%2018.634%205.137%2018.891%205.636%2019.14%206.119%20L%2019.245%206.323%20C%2021.71%2011.098%2024.078%2015.941%2026.285%2020.72%20L%2026.305%2020.763%20C%2026.55%2021.294%2026.803%2021.842%2027.042%2022.382%20C%2027.208%2022.758%2027.342%2023.074%2027.457%2023.394%20C%2027.758%2024.182%2027.855%2025.033%2027.741%2025.869%20Z%22%20fill%3D%22rgb(255%2C56%2C92)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2041.685%2024.12%20C%2040.886%2024.12%2040.151%2023.959%2039.479%2023.639%20C%2038.808%2023.319%2038.233%2022.87%2037.721%2022.294%20C%2037.21%2021.717%2036.826%2021.045%2036.539%2020.308%20C%2036.251%2019.539%2036.123%2018.706%2036.123%2017.809%20C%2036.123%2016.912%2036.283%2016.048%2036.571%2015.279%20C%2036.858%2014.51%2037.274%2013.837%2037.785%2013.229%20C%2038.297%2012.652%2038.904%2012.172%2039.607%2011.851%20C%2040.31%2011.531%2041.045%2011.371%2041.877%2011.371%20C%2042.676%2011.371%2043.379%2011.531%2044.018%2011.883%20C%2044.657%2012.204%2045.169%2012.684%2045.584%2013.293%20L%2045.68%2011.723%20L%2048.621%2011.723%20L%2048.621%2023.799%20L%2045.68%2023.799%20L%2045.584%2022.038%20C%2045.169%2022.678%2044.625%2023.191%2043.922%2023.575%20C%2043.283%2023.927%2042.516%2024.12%2041.685%2024.12%20Z%20M%2042.452%2021.237%20C%2043.027%2021.237%2043.539%2021.076%2044.018%2020.788%20C%2044.466%2020.468%2044.817%2020.051%2045.105%2019.539%20C%2045.361%2019.026%2045.488%2018.418%2045.488%2017.745%20C%2045.488%2017.072%2045.361%2016.464%2045.105%2015.951%20C%2044.849%2015.439%2044.466%2015.022%2044.018%2014.702%20C%2043.571%2014.382%2043.027%2014.254%2042.452%2014.254%20C%2041.876%2014.254%2041.365%2014.414%2040.886%2014.702%20C%2040.438%2015.022%2040.087%2015.439%2039.799%2015.951%20C%2039.543%2016.464%2039.415%2017.072%2039.415%2017.745%20C%2039.415%2018.418%2039.543%2019.026%2039.799%2019.539%20C%2040.055%2020.051%2040.438%2020.468%2040.886%2020.788%20C%2041.365%2021.076%2041.876%2021.237%2042.452%2021.237%20Z%20M%2053.639%208.456%20C%2053.639%208.808%2053.575%209.129%2053.415%209.385%20C%2053.256%209.641%2053.032%209.865%2052.744%2010.025%20C%2052.457%2010.186%2052.137%2010.25%2051.817%2010.25%20C%2051.498%2010.25%2051.178%2010.186%2050.89%2010.025%20C%2050.603%209.865%2050.379%209.641%2050.219%209.385%20C%2050.059%209.097%2049.995%208.808%2049.995%208.456%20C%2049.995%208.104%2050.059%207.783%2050.219%207.527%20C%2050.379%207.239%2050.603%207.046%2050.89%206.886%20C%2051.178%206.726%2051.498%206.662%2051.817%206.662%20C%2052.137%206.662%2052.457%206.726%2052.744%206.886%20C%2053.032%207.046%2053.256%207.271%2053.415%207.527%20C%2053.543%207.783%2053.639%208.072%2053.639%208.456%20Z%20M%2050.219%2023.767%20L%2050.219%2011.691%20L%2053.415%2011.691%20L%2053.415%2023.767%20Z%20M%2061.95%2014.862%20L%2061.95%2014.894%20C%2061.79%2014.83%2061.598%2014.798%2061.438%2014.766%20C%2061.247%2014.734%2061.087%2014.734%2060.895%2014.734%20C%2060%2014.734%2059.329%2014.99%2058.881%2015.535%20C%2058.402%2016.079%2058.178%2016.848%2058.178%2017.841%20L%2058.178%2023.767%20L%2054.982%2023.767%20L%2054.982%2011.691%20L%2057.922%2011.691%20L%2058.018%2013.517%20C%2058.338%2012.876%2058.721%2012.396%2059.265%2012.043%20C%2059.776%2011.691%2060.383%2011.531%2061.087%2011.531%20C%2061.31%2011.531%2061.534%2011.563%2061.726%2011.595%20C%2061.822%2011.627%2061.886%2011.627%2061.95%2011.659%20Z%20M%2063.228%2023.767%20L%2063.228%206.726%20L%2066.425%206.726%20L%2066.425%2013.229%20C%2066.872%2012.652%2067.384%2012.204%2068.023%2011.851%20C%2068.662%2011.531%2069.365%2011.339%2070.165%2011.339%20C%2070.964%2011.339%2071.699%2011.499%2072.37%2011.819%20C%2073.041%2012.14%2073.617%2012.588%2074.128%2013.165%20C%2074.639%2013.741%2075.023%2014.414%2075.311%2015.151%20C%2075.598%2015.919%2075.726%2016.752%2075.726%2017.649%20C%2075.726%2018.546%2075.566%2019.411%2075.279%2020.18%20C%2074.991%2020.948%2074.576%2021.621%2074.064%2022.23%20C%2073.553%2022.806%2072.945%2023.287%2072.242%2023.607%20C%2071.539%2023.927%2070.804%2024.088%2069.973%2024.088%20C%2069.174%2024.088%2068.47%2023.927%2067.831%2023.575%20C%2067.192%2023.255%2066.68%2022.774%2066.265%2022.166%20L%2066.169%2023.735%20Z%20M%2069.397%2021.237%20C%2069.973%2021.237%2070.484%2021.076%2070.964%2020.788%20C%2071.411%2020.468%2071.763%2020.051%2072.05%2019.539%20C%2072.306%2019.026%2072.434%2018.418%2072.434%2017.745%20C%2072.434%2017.072%2072.306%2016.464%2072.05%2015.951%20C%2071.763%2015.439%2071.411%2015.022%2070.964%2014.702%20C%2070.516%2014.382%2069.973%2014.254%2069.397%2014.254%20C%2068.822%2014.254%2068.311%2014.414%2067.831%2014.702%20C%2067.384%2015.022%2067.032%2015.439%2066.744%2015.951%20C%2066.489%2016.464%2066.361%2017.072%2066.361%2017.745%20C%2066.361%2018.418%2066.489%2019.026%2066.744%2019.539%20C%2067%2020.051%2067.384%2020.468%2067.831%2020.788%20C%2068.311%2021.076%2068.822%2021.237%2069.397%2021.237%20Z%20M%2076.941%2023.767%20L%2076.941%2011.691%20L%2079.881%2011.691%20L%2079.977%2013.261%20C%2080.329%2012.684%2080.808%2012.236%2081.416%2011.883%20C%2082.023%2011.531%2082.726%2011.371%2083.525%2011.371%20C%2084.42%2011.371%2085.187%2011.595%2085.827%2012.012%20C%2086.498%2012.428%2087.009%2013.037%2087.361%2013.805%20C%2087.713%2014.574%2087.904%2015.503%2087.904%2016.56%20L%2087.904%2023.799%20L%2084.708%2023.799%20L%2084.708%2016.976%20C%2084.708%2016.144%2084.516%2015.471%2084.133%2014.99%20C%2083.749%2014.51%2083.238%2014.254%2082.566%2014.254%20C%2082.087%2014.254%2081.671%2014.35%2081.288%2014.574%20C%2080.936%2014.798%2080.649%2015.087%2080.425%2015.503%20C%2080.201%2015.887%2080.105%2016.368%2080.105%2016.848%20L%2080.105%2023.767%20Z%20M%2089.503%2023.767%20L%2089.503%206.726%20L%2092.699%206.726%20L%2092.699%2013.229%20C%2093.146%2012.652%2093.658%2012.204%2094.297%2011.851%20C%2094.936%2011.531%2095.64%2011.339%2096.439%2011.339%20C%2097.238%2011.339%2097.973%2011.499%2098.644%2011.819%20C%2099.315%2012.14%2099.891%2012.588%20100.402%2013.165%20C%20100.914%2013.741%20101.297%2014.414%20101.585%2015.151%20C%20101.873%2015.919%20102%2016.752%20102%2017.649%20C%20102%2018.546%20101.841%2019.411%20101.553%2020.18%20C%20101.265%2020.948%20100.85%2021.621%20100.338%2022.23%20C%2099.827%2022.806%2099.22%2023.287%2098.516%2023.607%20C%2097.813%2023.927%2097.078%2024.088%2096.247%2024.088%20C%2095.448%2024.088%2094.745%2023.927%2094.105%2023.575%20C%2093.466%2023.255%2092.955%2022.774%2092.539%2022.166%20L%2092.443%2023.735%20Z%20M%2095.703%2021.237%20C%2096.279%2021.237%2096.79%2021.076%2097.27%2020.788%20C%2097.717%2020.468%2098.069%2020.051%2098.356%2019.539%20C%2098.612%2019.026%2098.74%2018.418%2098.74%2017.745%20C%2098.74%2017.072%2098.612%2016.464%2098.356%2015.951%20C%2098.101%2015.439%2097.717%2015.022%2097.27%2014.702%20C%2096.822%2014.382%2096.279%2014.254%2095.703%2014.254%20C%2095.128%2014.254%2094.617%2014.414%2094.137%2014.702%20C%2093.69%2015.022%2093.338%2015.439%2093.05%2015.951%20C%2092.763%2016.464%2092.667%2017.072%2092.667%2017.745%20C%2092.667%2018.418%2092.795%2019.026%2093.05%2019.539%20C%2093.306%2020.051%2093.69%2020.468%2094.137%2020.788%20C%2094.617%2021.076%2095.096%2021.237%2095.703%2021.237%20Z%22%20fill%3D%22%23FF385C%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';

export const FRAMER =
  'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2011%2016%22%3E%3Cpath%20d%3D%22M%2011%200%20L%2011%205.333%20L%205.5%205.333%20L%200%200%20Z%20M%200%205.333%20L%205.5%205.333%20L%2011%2010.667%20L%205.5%2010.667%20L%205.5%2016%20L%200%2010.667%20Z%22%20fill%3D%22rgb(34%2C34%2C34)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';

export const ROUTES: any[] = [
  {
    id: 1,
    path: '/',
    name: 'All Homes',
    icon: 'assets/images/airbnb.png',
  },
  {
    id: 2,
    path: '/amazing-views',
    name: 'Amazing Views',
    icon: 'assets/images/airbnb-av.png',
  },
  {
    id: 3,
    path: '/tiny-homes',
    name: 'Tiny Homes',
    icon: 'assets/images/airbnb-th.png',
  },
  {
    id: 4,
    path: '/chefs-kitchen',
    name: "Chef's Kitchen",
    icon: 'assets/images/airbnb-ck.png',
  },
  {
    id: 5,
    path: '/surfing',
    name: 'Surfing',
    icon: 'assets/images/airbnb-s.png',
  },
  {
    id: 6,
    path: '/mansions',
    name: 'Mansions',
    icon: 'assets/images/airbnb-m.png',
  },
  {
    id: 7,
    path: '/luxe',
    name: 'Luxe',
    icon: 'assets/images/airbnb-l.png',
  },
  {
    id: 8,
    path: '/treehouses',
    name: 'Treehouses',
    icon: 'assets/images/airbnb-t.png',
  },
  {
    id: 9,
    path: '/camping',
    name: 'Camping',
    icon: 'assets/images/airbnb-c.png',
  },
  {
    id: 10,
    path: '/beachfront',
    name: 'Beachfront',
    icon: 'assets/images/airbnb-b.png',
  },
  {
    id: 11,
    path: '/farms',
    name: 'Farms',
    icon: 'assets/images/airbnb-f.png',
  },
  {
    id: 12,
    path: '/castles',
    name: 'Castles',
    icon: 'assets/images/airbnb-cs.png',
  },
  {
    id: 13,
    path: '/islands',
    name: 'Islands',
    icon: 'assets/images/airbnb-i.png',
  },
  {
    id: 14,
    path: '/vineyards',
    name: 'Vineyards',
    icon: 'assets/images/airbnb-v.png',
  },
  {
    id: 15,
    path: '/amazing-pools',
    name: 'Amazing Pools',
    icon: 'assets/images/airbnb-ap.png',
  },
  {
    id: 16,
    path: '/skiing',
    name: 'Skiing',
    icon: 'assets/images/airbnb-sk.png',
  },
  {
    id: 17,
    path: '/desert',
    name: 'Desert',
    icon: 'assets/images/airbnb-de.png',
  },
];

export const FRAMES: Frame[] = [
  {
    id: 1,
    name: 'Whitefish Estate',
    altImage:
      'https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp',
    tile1:
      'https://framerusercontent.com/images/nw3QmXYFLApMRCcnn6znTEo6KE.webp',
    tile2:
      'https://framerusercontent.com/images/0cV9whDLvUPcMsXBUPQL6qaR54.webp',
    locations: 'Whitefish, Montana, United States',
    price: '$10,000',
    time: 'night',
    rate: '5.00',
    guest: '16+',
    bedrooms: '8',
    beds: '8',
    baths: '8',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=48.410967,-114.331586&amp;z=13&amp;output=embed',
  },
  {
    id: 2,
    name: 'Luxury stay in Weston, Saint James, Barbados',
    altImage:
      'https://framerusercontent.com/images/afIWyPD7bAqXpOTuGYeO4FzrnU.webp',
    tile1:
      'https://framerusercontent.com/images/UbZMotnt6f6PzRjoEUkUqqPoGE.webp',
    tile2:
      'https://framerusercontent.com/images/qpfhB78P3kED99kanRfNuDVscmY.webp',
    locations: 'Weston, Saint James, Barbados',
    price: '$1,500',
    time: 'night',
    rate: '5.00',
    guest: '8',
    bedrooms: '4',
    beds: '5',
    baths: '4',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=13.215804,-59.640795&amp;z=13&amp;output=embed',
  },
  {
    id: 3,
    name: 'Numero 22 - Lake Como - Design Living & Lake View',
    altImage:
      'https://framerusercontent.com/images/wTSsHOfD0gXYkODZBWWWOfdkw.webp',
    tile1:
      'https://framerusercontent.com/images/wqIEfjRYn0UbT7uk0i5wpVndBQ.webp',
    tile2:
      'https://framerusercontent.com/images/7d8JdJuuXTeM5XjBXGWdIr3RBEQ.jpeg',
    locations: 'Laglio, Lombardia, Italy',
    price: '$359',
    time: 'night',
    rate: '4.99',
    guest: '6',
    bedrooms: '2',
    beds: '3',
    baths: '3',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=45.882746,9.139109&amp;z=13&amp;output=embed',
  },
  {
    id: 4,
    name: '7,500 sq ft Private Beachfront Estate',
    altImage:
      'https://framerusercontent.com/images/3E8SIyOR9oYK20P1hy1BtAelgI.webp',
    tile1:
      'https://framerusercontent.com/images/qhnktNKSOAVYxIll8u7LGPNS4so.webp',
    tile2:
      'https://framerusercontent.com/images/PoKbATiObNHJkj0Odn6Iu1w4hI.webp',
    locations: 'Dubai, United Arab Emirates',
    price: '$2,478',
    time: 'night',
    rate: '4.73',
    guest: '14',
    bedrooms: '6',
    beds: '11',
    baths: '6.5',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=25.179749,55.224732&amp;z=13&amp;output=embed',
  },
  {
    id: 5,
    name: 'Bohemian & Spacious / Private Pool and Garden',
    altImage:
      'https://framerusercontent.com/images/0RUEx3es60Z3CuB1eFkBxcPxmA.webp',
    tile1:
      'https://framerusercontent.com/images/zeX5Tu6LII3hUoS8pW7mPBKT1qs.webp',
    tile2:
      'https://framerusercontent.com/images/OkcW86CbpLKD4v3ivzgsilMcBTQ.webp',
    locations: 'Tulum, Quintana Roo, Mexico',
    price: '$199',
    time: 'night',
    rate: '4.97',
    guest: '4',
    bedrooms: '2',
    beds: '2',
    baths: '2.5',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=20.206639,-87.464194&amp;z=13&amp;output=embed',
  },
  {
    id: 6,
    name: 'Designer A-Frame Cabin in the Trees',
    altImage:
      'https://framerusercontent.com/images/3fX1fjZlrzbcXKbTqPD7FpY4Z8.webp',
    tile1:
      'https://framerusercontent.com/images/ENEPYDh4R9AUcypFQEWP6b3w2U.webp',
    tile2:
      'https://framerusercontent.com/images/msJ4Xe9nhyZpzv3PKhcbBqcpik.webp',
    locations: 'Lake Arrowhead, California, United States',
    price: '$225',
    time: 'night',
    rate: '4.93',
    guest: '6',
    bedrooms: '3',
    beds: '4',
    baths: '2',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=34.246788,-117.171436&z=13&output=embed',
  },
  {
    id: 7,
    name: 'Fully Renovated 2 BR on River w/ Pool - Walk to To',
    altImage:
      'https://framerusercontent.com/images/lIXcszNPyY7PC0yaVFg5TBtmfA.webp',
    tile1:
      'https://framerusercontent.com/images/9okvhQW7JdXxSXTXxATdClfOb0.webp',
    tile2:
      'https://framerusercontent.com/images/AhLiImdJyUhRKUinKF7uKxDOSWI.webp',
    locations: 'Aspen, Colorado, United States',
    price: '$546',
    time: 'night',
    rate: '5.00',
    guest: '6',
    bedrooms: '2',
    beds: '4',
    baths: '2',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=39.190798,-106.822348&z=13&output=embed',
  },
  {
    id: 8,
    name: "Magnolia's Hillcrest Cottage",
    altImage:
      'https://framerusercontent.com/images/ZEBw6ci9AF1cD4D1sFdPW3Mj5rE.webp',
    tile1:
      'https://framerusercontent.com/images/fZDWOKLuy6S414Va8FCCB8jJmp0.webp',
    tile2:
      'https://framerusercontent.com/images/pAhD9dvshjzpMRsn8tHZ83xkvw.webp',
    locations: 'Waco, Texas, United States',
    price: '$500',
    time: 'night',
    rate: '4.97',
    guest: '2',
    bedrooms: '1',
    beds: '1',
    baths: '1',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=31.545696,-97.170071&z=13&output=embed',
  },
  {
    id: 9,
    name: 'Unique Architecture Cave House by Cycladica',
    altImage:
      'https://framerusercontent.com/images/WO8ADTYBrqd6BunOnEocxOAS7c.webp',
    tile1:
      'https://framerusercontent.com/images/ImMdsP7sC0bAGrrcwfZ3RRrNs8.webp',
    tile2:
      'https://framerusercontent.com/images/2OcuFeFe4oCEt8IdSGRCPn5Wb3M.webp',
    locations: 'Oia, South Aegean, Greece',
    price: '$930',
    time: 'night',
    rate: '4.95',
    guest: '4',
    bedrooms: '2',
    beds: '2',
    baths: '1',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=36.460418,25.382158&z=13&output=embed',
  },
  {
    id: 10,
    name: 'ATELIER ArtVillas Costa Rica',
    altImage:
      'https://framerusercontent.com/images/XKmxgbyaDgBCY0OI7iczwdFvcU.webp',
    tile1:
      'https://framerusercontent.com/images/dRYTC1oC821VJz65ZIMEIsXF6oM.webp',
    tile2:
      'https://framerusercontent.com/images/rHh4itrsOeZsM02efToBJqtvhdc.webp',
    locations: 'Uvita, Osa, Puntaneras, Costa Rica',
    price: '$830',
    time: 'night',
    rate: '4.80',
    guest: '6',
    bedrooms: '3',
    beds: '3',
    baths: '2',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=9.152646,-83.745990&z=13&output=embed',
  },
  {
    id: 11,
    name: 'Mountainside Luxury Cabin with Batulao View',
    altImage:
      'https://framerusercontent.com/images/cD0vsVdMfYV5dXwD5abiySgong.webp',
    tile1:
      'https://framerusercontent.com/images/04wJwR2xERkTc69QFMHSb8eICKM.webp',
    tile2:
      'https://framerusercontent.com/images/UrptHuiXtQEpFr8laYuk1LdvjHY.webp',
    locations: 'Calaca, Calabarzon, Philippines',
    price: '$483',
    time: 'night',
    rate: '4.87',
    guest: '8',
    bedrooms: '2',
    beds: '3',
    baths: '3',
    description:
      'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
    locationUrl:
      'https://maps.google.com/maps?q=13.919598,120.813774&z=13&output=embed',
  },
];

export const ROOM_NUMBERS: string[] = ['Any', '1', '2', '3', '4', '5+'];
