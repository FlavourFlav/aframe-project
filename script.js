function createBox(latitude, longitude) {
    const model = document.createElement('a-box');
    model.setAttribute('gps-entity-place',`latitude:  ${latitude}; longitude: ${longitude};`);
    model.setAttribute("look-at", '[gps-camera]');
    model.setAttribute('color', 'red');
    model.setAttribute('width', '100');
    model.setAttribute('height', '100');
    model.setAttribute('depth', '100');
    model.addEventListener("loaded", () => {
        window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
      });  
    return model;
}

function createText(latitude, longitude, text) {
    const model = document.createElement('a-text');
    model.setAttribute('value', text);
    model.setAttribute('gps-entity-place',`latitude:  ${latitude}; longitude: ${longitude};`);
    model.setAttribute("scale", "50 50 50")
    model.setAttribute("color", "black")
    model.setAttribute("look-at", '[gps-camera]');
    model.addEventListener("loaded", () => {
        window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
      });  
    return model;
}

const scene = document.querySelector('a-scene');
const data = loadData();
data.forEach((location) => {
    const box = createBox(location.latitude, location.longitude);
    const text = createText(location.latitude, location.longitude, location.adresse);
    scene.appendChild(text);
    scene.appendChild(box);
});

function loadData() {
    return [
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Am Harras",
          "anzahl": 1,
          "latitude": 48.116937,
          "longitude": 11.539696
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Am Laimer Anger",
          "anzahl": 1,
          "latitude": 48.139583,
          "longitude": 11.499722
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Effnerplatz",
          "anzahl": 1,
          "latitude": 48.152053,
          "longitude": 11.61331
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Eisbachwelle",
          "anzahl": 1,
          "latitude": 48.143299,
          "longitude": 11.587664
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Ella-Linges-Platz",
          "anzahl": 1,
          "latitude": 48.109448,
          "longitude": 11.580458
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Fuerstenried West",
          "anzahl": 1,
          "latitude": 48.089022,
          "longitude": 11.479991
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Gärtnerplatz",
          "anzahl": 1,
          "latitude": 48.131938,
          "longitude": 11.575562
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Giesing",
          "anzahl": 1,
          "latitude": 48.110649,
          "longitude": 11.594981
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Hasenbergl",
          "anzahl": 1,
          "latitude": 48.213482,
          "longitude": 11.55649
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Hauptbahnhof \n(Haupteingang)",
          "anzahl": 1,
          "latitude": 48.140178,
          "longitude": 11.561537
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Helmut-Fischer-Platz",
          "anzahl": 1,
          "latitude": 48.162815,
          "longitude": 11.571408
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Hohenzollernplatz",
          "anzahl": 1,
          "latitude": 48.161357,
          "longitude": 11.568332
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Innsbrucker Ring",
          "anzahl": 1,
          "latitude": 48.12043,
          "longitude": 11.61725
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Josephsburg",
          "anzahl": 1,
          "latitude": 48.127107,
          "longitude": 11.634952
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Karlsplatz Stachus",
          "anzahl": 1,
          "latitude": 48.139506,
          "longitude": 11.566152
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Kolumbusplatz",
          "anzahl": 1,
          "latitude": 48.119252,
          "longitude": 11.576524
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Königsplatz",
          "anzahl": 1,
          "latitude": 48.145648,
          "longitude": 11.563894
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Lehel",
          "anzahl": 1,
          "latitude": 48.139489,
          "longitude": 11.58902
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Leonrodplatz",
          "anzahl": 1,
          "latitude": 48.158785,
          "longitude": 11.54716
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Mangfallplatz",
          "anzahl": 1,
          "latitude": 48.097609,
          "longitude": 11.581043
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Mariahilfplatz",
          "anzahl": 1,
          "latitude": 48.125709,
          "longitude": 11.583
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Marienhof",
          "anzahl": 1,
          "latitude": 48.138562,
          "longitude": 11.575579
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Münchener Freiheit  \n(Bus- und Trambahnhof)",
          "anzahl": 1,
          "latitude": 48.162629,
          "longitude": 11.586506
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Neuperlach Zentrum",
          "anzahl": 1,
          "latitude": 48.101137,
          "longitude": 11.645523
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Neuperlach Zentrum Busplatte",
          "anzahl": 2,
          "latitude": 48.100902,
          "longitude": 11.647556
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Olympia-Einkaufszentrum",
          "anzahl": 1,
          "latitude": 48.183422,
          "longitude": 11.531137
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Orleansplatz",
          "anzahl": 1,
          "latitude": 48.128563,
          "longitude": 11.603294
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Partnachplatz",
          "anzahl": 1,
          "latitude": 48.116879,
          "longitude": 11.52664
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Prinzregentenplatz",
          "anzahl": 2,
          "latitude": 48.139519,
          "longitude": 11.606915
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Rotkreuzplatz",
          "anzahl": 1,
          "latitude": 48.152831,
          "longitude": 11.51236
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Scheidplatz",
          "anzahl": 1,
          "latitude": 48.170936,
          "longitude": 11.573068
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Schwanthalerhöhe",
          "anzahl": 1,
          "latitude": 48.133612,
          "longitude": 11.539528
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Silberhornstr",
          "anzahl": 1,
          "latitude": 48.115327,
          "longitude": 11.579466
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Thalkirchen",
          "anzahl": 1,
          "latitude": 48.101011,
          "longitude": 11.546677
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Theresienwiese",
          "anzahl": 1,
          "latitude": 48.135896,
          "longitude": 11.54954
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Trudering",
          "anzahl": 2,
          "latitude": 48.125561,
          "longitude": 11.663359
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Trudering",
          "anzahl": 1,
          "latitude": 48.12169,
          "longitude": 11.670604
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Viktualienmarkt",
          "anzahl": 1,
          "latitude": 48.135138,
          "longitude": 11.576598
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Weissenburger Platz",
          "anzahl": 1,
          "latitude": 48.128575,
          "longitude": 11.596116
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Weissenburgerstr.",
          "anzahl": 1,
          "latitude": 48.128665,
          "longitude": 11.594405
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Wettersteinplatz",
          "anzahl": 1,
          "latitude": 48.109056,
          "longitude": 11.574316
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Willy-Brand Platz\n(Messestadt West)",
          "anzahl": 1,
          "latitude": 48.13311,
          "longitude": 11.691526
        },
        {
          "typ": "Öffentlicher Platz ",
          "ort": "München",
          "adresse": "Wittelsbacher Platz",
          "anzahl": 1,
          "latitude": 48.14335,
          "longitude": 11.5761
        },
        {
          "typ": "Stadtwerke München",
          "ort": "München",
          "adresse": "Münchener Freiheit (Sperre + Bahnsteig)",
          "anzahl": 5,
          "latitude": 48.161515,
          "longitude": 11.586589
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Brienner Str.",
          "anzahl": 1,
          "latitude": 48.143084,
          "longitude": 11.574497
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Hofgarten",
          "anzahl": 1,
          "latitude": 48.143398,
          "longitude": 11.581796
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Isartor",
          "anzahl": 1,
          "latitude": 48.135284,
          "longitude": 11.581345
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Karlsplatz Stachus",
          "anzahl": 1,
          "latitude": 48.139083,
          "longitude": 11.566419
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Kaufingerstr.",
          "anzahl": 1,
          "latitude": 48.137944,
          "longitude": 11.572625
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Königsplatz",
          "anzahl": 1,
          "latitude": 48.145934,
          "longitude": 11.56346
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Marienhof",
          "anzahl": 1,
          "latitude": 48.139392,
          "longitude": 11.57582
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Max Joseph Platz",
          "anzahl": 1,
          "latitude": 48.139666,
          "longitude": 11.577512
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Max Mannheimer Platz",
          "anzahl": 1,
          "latitude": 48.145259,
          "longitude": 11.567504
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Maximilianstr.",
          "anzahl": 1,
          "latitude": 48.138303,
          "longitude": 11.584898
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Platzl",
          "anzahl": 1,
          "latitude": 48.137958,
          "longitude": 11.580036
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Promenadeplatz",
          "anzahl": 1,
          "latitude": 48.139796,
          "longitude": 11.573586
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Sebastiansplatz",
          "anzahl": 1,
          "latitude": 48.134484,
          "longitude": 11.573955
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Sendlinger Str.",
          "anzahl": 1,
          "latitude": 48.135736,
          "longitude": 11.571608
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Türkenstr.",
          "anzahl": 1,
          "latitude": 48.14588,
          "longitude": 11.57321
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Viktualienmarkt",
          "anzahl": 1,
          "latitude": 48.135133,
          "longitude": 11.576591
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Wiener Platz",
          "anzahl": 1,
          "latitude": 48.134146,
          "longitude": 11.595687
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Arabellapark/ Klinikum Bogenhausen",
          "anzahl": 1,
          "latitude": 48.15374,
          "longitude": 11.62376
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Arabellastraße ",
          "anzahl": 1,
          "latitude": 48.15349,
          "longitude": 11.61858
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Briefzentrum",
          "anzahl": 1,
          "latitude": 48.14901,
          "longitude": 11.52444
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Burghausener Straße",
          "anzahl": 1,
          "latitude": 48.147286,
          "longitude": 11.529734
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Cosimabad",
          "anzahl": 1,
          "latitude": 48.1535,
          "longitude": 11.62882
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Deroystr.",
          "anzahl": 1,
          "latitude": 48.144258,
          "longitude": 11.545887
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Deroystr.",
          "anzahl": 1,
          "latitude": 48.144309,
          "longitude": 11.545104
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Donnersbergerstraße",
          "anzahl": 1,
          "latitude": 48.14641,
          "longitude": 11.53507
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Fritz-Meyer-Weg",
          "anzahl": 1,
          "latitude": 48.1725,
          "longitude": 11.63671
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Hackerbrücke",
          "anzahl": 1,
          "latitude": 48.14191,
          "longitude": 11.549163
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Hauptbahnhof ",
          "anzahl": 1,
          "latitude": 48.1403,
          "longitude": 11.560697
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Hopfenstr",
          "anzahl": 1,
          "latitude": 48.14242,
          "longitude": 11.55443
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Karlsplatz",
          "anzahl": 1,
          "latitude": 48.138599,
          "longitude": 11.565138
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Karlsplatz",
          "anzahl": 1,
          "latitude": 48.139293,
          "longitude": 11.564806
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Kriemhildenstraße",
          "anzahl": 1,
          "latitude": 48.152257,
          "longitude": 11.515357
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Mariannenplatz",
          "anzahl": 1,
          "latitude": 48.13523,
          "longitude": 11.58663
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Marsstr",
          "anzahl": 1,
          "latitude": 48.14504,
          "longitude": 11.54178
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Müllerstraße ",
          "anzahl": 1,
          "latitude": 48.1317404,
          "longitude": 11.572815
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Prinz-Eugen-Park",
          "anzahl": 1,
          "latitude": 48.16257,
          "longitude": 11.62927
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Regina-Ullmann-Straße",
          "anzahl": 1,
          "latitude": 48.16993,
          "longitude": 11.63505
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Reichenbachplatz ",
          "anzahl": 1,
          "latitude": 48.13324,
          "longitude": 11.57665
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Romanplatz",
          "anzahl": 1,
          "latitude": 48.15564,
          "longitude": 11.51236
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Schlösselgarten",
          "anzahl": 1,
          "latitude": 48.15873,
          "longitude": 11.62903
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "St. Emmeram",
          "anzahl": 1,
          "latitude": 48.17608,
          "longitude": 11.63142
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Steubenplatz",
          "anzahl": 1,
          "latitude": 48.15003,
          "longitude": 11.5209
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Steubenplatz",
          "anzahl": 1,
          "latitude": 48.15027,
          "longitude": 11.51978
        },
        {
          "typ": "Tramlinie Linie 16/17",
          "ort": "München",
          "adresse": "Taimerhofstraße",
          "anzahl": 1,
          "latitude": 48.16668,
          "longitude": 11.63077
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Agnes-Bernauer-Platz",
          "anzahl": 1,
          "latitude": 48.139926,
          "longitude": 11.495528
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Agnes-Bernauer-Straße",
          "anzahl": 1,
          "latitude": 48.139334,
          "longitude": 11.511576
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Am Knie",
          "anzahl": 1,
          "latitude": 48.14547,
          "longitude": 11.470974
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Am Lockschuppen ",
          "anzahl": 1,
          "latitude": 48.14081,
          "longitude": 11.523562
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Barthstraße",
          "anzahl": 1,
          "latitude": 48.140366,
          "longitude": 11.530451
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Fürstenrieder Straße",
          "anzahl": 1,
          "latitude": 48.139364,
          "longitude": 11.503407
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Hauptbahnhof Süd",
          "anzahl": 1,
          "latitude": 48.14025,
          "longitude": 11.560892
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Hermann-Lingg-Str.",
          "anzahl": 1,
          "latitude": 48.13913,
          "longitude": 11.551703
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Holzapfelstraße",
          "anzahl": 1,
          "latitude": 48.1393,
          "longitude": 11.546761
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Lautensackstr. ",
          "anzahl": 1,
          "latitude": 48.139664,
          "longitude": 11.518346
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Lohensteinstr",
          "anzahl": 1,
          "latitude": 48.142231,
          "longitude": 11.482035
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Maxmonument",
          "anzahl": 1,
          "latitude": 48.13786,
          "longitude": 11.58761
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Offenbachstraße",
          "anzahl": 1,
          "latitude": 48.146148,
          "longitude": 11.46587
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Pasing Rathaus",
          "anzahl": 1,
          "latitude": 48.1488,
          "longitude": 11.4613
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Schrenkstr. ",
          "anzahl": 1,
          "latitude": 48.139624,
          "longitude": 11.541207
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Trappentreustraße",
          "anzahl": 1,
          "latitude": 48.139945,
          "longitude": 11.53526
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Westbad",
          "anzahl": 1,
          "latitude": 48.142315,
          "longitude": 11.475519
        },
        {
          "typ": "Tramlinie Linie 19",
          "ort": "München",
          "adresse": "Willibaldplatz",
          "anzahl": 1,
          "latitude": 48.141364,
          "longitude": 11.488669
        },
        {
          "typ": "Tramlinie Linie 23",
          "ort": "München",
          "adresse": "Am Münchner Tor",
          "anzahl": 1,
          "latitude": 48.17614,
          "longitude": 11.58821
        },
        {
          "typ": "Tramlinie Linie 23",
          "ort": "München",
          "adresse": "Anni-Alberts.-Str.",
          "anzahl": 1,
          "latitude": 48.17976,
          "longitude": 11.58926
        },
        {
          "typ": "Tramlinie Linie 23",
          "ort": "München",
          "adresse": "Domagkstr.",
          "anzahl": 1,
          "latitude": 48.1838,
          "longitude": 11.59031
        },
        {
          "typ": "Tramlinie Linie 23",
          "ort": "München",
          "adresse": "Parzivalplatz",
          "anzahl": 1,
          "latitude": 48.17188,
          "longitude": 11.58596
        },
        {
          "typ": "Tramlinie Linie 23",
          "ort": "München",
          "adresse": "Potsdamer Str.",
          "anzahl": 1,
          "latitude": 48.16773,
          "longitude": 11.58626
        },
        {
          "typ": "Tramlinie Linie 23",
          "ort": "München",
          "adresse": "Schwabing Nord",
          "anzahl": 1,
          "latitude": 48.18671,
          "longitude": 11.59089
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Ackermannstraße",
          "anzahl": 1,
          "latitude": 48.168285,
          "longitude": 11.565021
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Ackermannstraße",
          "anzahl": 1,
          "latitude": 48.167535,
          "longitude": 11.564831
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Elisabethplatz",
          "anzahl": 1,
          "latitude": 48.15792,
          "longitude": 11.57485
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Elisabethplatz",
          "anzahl": 1,
          "latitude": 48.15732,
          "longitude": 11.57511
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Gartenstr. ",
          "anzahl": 1,
          "latitude": 48.171994,
          "longitude": 11.564941
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Herzogstraße",
          "anzahl": 1,
          "latitude": 48.16371,
          "longitude": 11.564328
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Herzogstraße ",
          "anzahl": 1,
          "latitude": 48.163712,
          "longitude": 11.564352
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Hohenzollernplatz",
          "anzahl": 1,
          "latitude": 48.161229,
          "longitude": 11.568193
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Karolinenplatz",
          "anzahl": 1,
          "latitude": 48.14533,
          "longitude": 11.56943
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Kurfürstenplatz",
          "anzahl": 1,
          "latitude": 48.15998,
          "longitude": 11.57483
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Nordbad",
          "anzahl": 1,
          "latitude": 48160876,
          "longitude": 11.56453
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Nordendstraße",
          "anzahl": 1,
          "latitude": 48.15488,
          "longitude": 11.57548
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Petuelring ",
          "anzahl": 1,
          "latitude": 48.175171,
          "longitude": 11.566387
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Pinakothek",
          "anzahl": 1,
          "latitude": 48.14875,
          "longitude": 11.571878
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Pinakothek",
          "anzahl": 1,
          "latitude": 48.14924,
          "longitude": 11.57199
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Schellingstraße",
          "anzahl": 1,
          "latitude": 48.15127,
          "longitude": 11.573339
        },
        {
          "typ": "Tramlinie Linie 27",
          "ort": "München",
          "adresse": "Schellingstraße",
          "anzahl": 1,
          "latitude": 48.15078,
          "longitude": 11.5732
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Deutsches Museum",
          "anzahl": 2,
          "latitude": 48.130365,
          "longitude": 11.583793
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Deutsches Museum",
          "anzahl": 2,
          "latitude": 48.131738,
          "longitude": 11.58581
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Olympiapark \n(Coubertin-Platz)",
          "anzahl": 2,
          "latitude": 48.17429,
          "longitude": 11.551189
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Olympiapark \n(Coubertin-Platz)",
          "anzahl": 2,
          "latitude": 48.174434,
          "longitude": 11.548796
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Poccistr",
          "anzahl": 2,
          "latitude": 48.124876,
          "longitude": 11.549616
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Poccistr",
          "anzahl": 2,
          "latitude": 48.12503,
          "longitude": 11.54938
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Sendlinger-Tor-Platz",
          "anzahl": 0,
          "latitude": 48.133954,
          "longitude": 11.567202
        },
        {
          "typ": "Öffentlicher Platz",
          "ort": "München",
          "adresse": "Sendlinger-Tor-Platz",
          "anzahl": 0,
          "latitude": 48.133966,
          "longitude": 11.565666
        },
        {
          "typ": "Öffentlicher Platz / TOS",
          "ort": "München",
          "adresse": "Odeonsplatz",
          "anzahl": 3,
          "latitude": 48.142887,
          "longitude": 11.577463
        },
        {
          "typ": "Öffentlicher Platz / TOS",
          "ort": "München",
          "adresse": "Odeonsplatz",
          "anzahl": 3,
          "latitude": 48.142656,
          "longitude": 11.578044
        },
        {
          "typ": "Öffentlicher Platz / TOS",
          "ort": "München",
          "adresse": "Odeonsplatz",
          "anzahl": 3,
          "latitude": 48.14238,
          "longitude": 11.577907
        },
        {
          "typ": "Smarter City",
          "ort": "München",
          "adresse": "Gruenfinger",
          "anzahl": 2,
          "latitude": 48.146017,
          "longitude": 11.409967
        },
        {
          "typ": "Smarter City",
          "ort": "München",
          "adresse": "Gruenfinger",
          "anzahl": 2,
          "latitude": 48.145949,
          "longitude": 11.408143
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Marienplatz Ost",
          "anzahl": 3,
          "latitude": 48.137197,
          "longitude": 11.575504
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Marienplatz Ost",
          "anzahl": 3,
          "latitude": 48.137337,
          "longitude": 11.575855
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Marienplatz Ost",
          "anzahl": 3,
          "latitude": 48.136943,
          "longitude": 11.576383
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Marienplatz West",
          "anzahl": 2,
          "latitude": 48.137278,
          "longitude": 11.57469
        },
        {
          "typ": "TOS",
          "ort": "München",
          "adresse": "Marienplatz West",
          "anzahl": 2,
          "latitude": 48.137474,
          "longitude": 11.575241
        }
       ]
}

