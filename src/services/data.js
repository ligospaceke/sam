// src/services/data.js
// Seed content. The story text is the founder's own; the admin panel can override
// any chapter in the browser (see store.js). Body format:
//   blank line = new paragraph, "> text" = quote, "- text" lines = list.
(function () {
  var S = (window.SMK = window.SMK || {});

  S.data = {
    site: {
      name: "Samuel M.K.",
      alias: "Smaltal",
      born: "21 July 1990",
      org: "L.I.G.O. SPACE",
      motto: "Humanity First. Every Life Matters.",
      crown: "What crowns us: Love.",
      phone: "+254 791 236179",
      email: "",
      website: "https://ligospace.co.ke",
      tagline: "He once moved people with music. Now he builds the pathways — ideas, opportunity, purpose and love — that move whole communities."
    },

    dimensions: ["Body", "Mind", "Emotion / Heart", "Identity / Self", "Relational / Social", "Purpose"],

    path: [
      ["Music", "from music to ministry"],
      ["Questions", "from questions to ideas"],
      ["Ideas", "from ideas to frameworks"],
      ["Systems", "from frameworks toward systems"]
    ],

    gallery: [
      { file: "assets/1.jpg", caption: "Graduation day" },
      { file: "assets/2.jpg", caption: "The Lord is my shepherd" },
      { file: "assets/3.jpg", caption: "Navy coat, city street" },
      { file: "assets/4.jpg", caption: "Black and white" },
      { file: "assets/5.jpg", caption: "In the studio" },
      { file: "assets/6.jpg", caption: "In worship" },
      { file: "assets/7.jpg", caption: "Plaid blazer" },
      { file: "assets/8.jpg", caption: "With the Word" },
      { file: "assets/9.jpg", caption: "Portrait" },
      { file: "assets/10.jpg", caption: "Coffee break" },
      { file: "assets/11.jpg", caption: "The SMK mark" }
    ],

    chapters: [
      {
        id: "voice", img: "assets/6.jpg", kicker: "The Voice", title: "Smaltal: a voice that could not stay hidden",
        body:
          "Samuel M.K. was born on 21 July 1990 in a church compound, to Reverend John and his late mother, Lucy. Faith, family and community came first. Then came the voice.\n\n" +
          "At high school his friends named him Smaltal: small in stature, remarkable in song. The name stayed, and so did the music. Today he is a minister of the Gospel, a worshipper, a praise-and-worship soloist and a poet.\n\n" +
          "It was not always quiet. Late-night singing once earned him warnings from neighbours in rented homes. Years later, at the launch of one of his songs at PEFA Church, the standing ovation reportedly broke three long wooden church benches.\n\n" +
          "> From warnings in rented houses to broken benches in a standing ovation."
      },
      {
        id: "mind", img: "assets/1.jpg", kicker: "The Mind", title: "A thinker who wants things to fit",
        body:
          "Samuel is a thinker, a critic, a poet and a designer of ideas. He asks questions, weighs both sides, and believes justice must move from principle into execution.\n\n" +
          "He sees what looks disconnected and asks how it can come together. He sees what looks difficult and asks how to make it comfortable. The word that suits his mind best is SYNCHRONIZED.\n\n" +
          "His learning never followed a straight line: Commerce (Finance) at the Technical University of Kenya to third year, then a turn toward Biblical and theological studies, and the rest from life itself.\n\n" +
          "And the eye for style? Intentional and distinctive, in his own words:\n\n" +
          "> “My taste of fashion is not questionable.”"
      },
      {
        id: "home", img: "assets/8.jpg", kicker: "Faith & Family", title: "The foundation beneath the work",
        body:
          "Above every title stands his faith. Samuel is a born-again Christian and a minister of the Gospel who believes God is the Creator and the reason behind it all. It shapes his calling, his creativity and his duty to other people.\n\n" +
          "Behind the public vision is a private world. He is married to Mercy Asali Samuel, and together they have two sons and a daughter: Wisdom Baraka, Blessing Amani and Praise Kibali. They are his cheering team, and part of the love and sacrifice behind the journey.\n\n" +
          "Faith is also why service, dignity and people matter to him."
      },
      {
        id: "builder", img: "assets/3.jpg", kicker: "The Builder", title: "From music to human possibility",
        body:
          "This is not a story of leaving music behind. It is a story of expansion. The man who learned to move people through song began asking why people with ability lack opportunity, why dreams lack structure, and why people surrounded by others still feel disconnected.\n\n" +
          "Those questions became the Synchronized Human System™, an emerging six-dimension framework, and the thinking behind L.I.G.O. SPACE, the institution he founded to build pathways for people.\n\n" +
          "He does not present himself as finished. Still learning, still asking, still building.\n\n" +
          "> “Most people are not lost; they are simply unsynchronized.”\n\n" +
          "WHAT CROWNS US: LOVE."
      }
    ]
  };
})();
