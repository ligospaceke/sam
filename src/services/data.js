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
      phone: "0182809790",
      website: "https://ligospace.co.ke",
      tagline:
        "The boy who once moved people through music is now trying to move people through ideas, opportunity, purpose and love."
    },

    dimensions: ["Body", "Mind", "Emotion / Heart", "Identity / Self", "Relational / Social", "Purpose"],

    path: [
      ["Music", "from music to ministry"],
      ["Questions", "from questions to ideas"],
      ["Ideas", "from ideas to frameworks"],
      ["Systems", "from frameworks toward systems"]
    ],

    chapters: [
      {
        id: "origin",
        kicker: "Beginnings",
        title: "Before There Was L.I.G.O. SPACE, There Was Smaltal.",
        body:
          "Before there was L.I.G.O. SPACE, before the frameworks, the systems, the questions and the big ideas, there was a boy called Smaltal.\n\n" +
          "Samuel M.K. was born on 21 July 1990, in a church compound, to Reverend John, his father, and his late mother, Lucy.\n\n" +
          "Perhaps there was something significant about that beginning.\n\n" +
          "A church compound.\n\nA family.\n\nFaith.\n\nCommunity.\n\nAnd, eventually, a voice."
      },
      {
        id: "smaltal",
        kicker: "The name",
        title: "The Boy Called Smaltal",
        body:
          "At high school, Samuel was given a name by his friends:\n\nSmaltal.\n\n" +
          "He was small in stature, but remarkably talented in singing.\n\n" +
          "The name stayed.\n\nAnd so did the music.\n\n" +
          "Music was never simply something Samuel performed.\n\n" +
          "Music became one of the deepest languages of his life.\n\n" +
          "He is a minister of the Gospel, a worshipper, a praise-and-worship soloist and a poet.\n\n" +
          "He loves music so deeply that he cannot imagine life without it.\n\n" +
          "When he is low, music can lift him.\n\nWhen he is happy, music can amplify the joy.\n\nWhen words become difficult, music can speak.\n\n" +
          "Music became his special button to press."
      },
      {
        id: "loud",
        kicker: "The voice",
        title: "When Music Was Not Always Quiet",
        body:
          "Samuel's love for music was not always easy on the neighbours.\n\n" +
          "While living in rented homes, there were moments when his late-night singing became too much for other tenants.\n\n" +
          "He was warned that he could be thrown out because he sang at night and disturbed people.\n\n" +
          "But the same voice that once threatened to get him evicted would later move an entire congregation.\n\n" +
          "At the launch of one of his songs at PEFA Church, the response became so intense that the standing ovation reportedly resulted in three long wooden church benches being broken as people stood and pressed forward.\n\n" +
          "From warnings in rented houses...\n\nto broken benches in a standing ovation.\n\n" +
          "That is part of the story of Smaltal.\n\n" +
          "And perhaps it captures something important about Samuel:\n\nhis voice was never meant to remain hidden."
      },
      {
        id: "thinker",
        kicker: "The mind",
        title: "The Man Who Sees Beyond the Obvious",
        body:
          "Samuel M.K. is a thinker.\n\nA critic.\n\nA poet.\n\nA creative.\n\nA designer of ideas.\n\nA go-getter.\n\nA man of his word.\n\nA deeply thoughtful person.\n\n" +
          "He naturally asks questions.\n\nHe examines things from different angles.\n\n" +
          "He likes fitting himself into the shoes of both sides before reaching a conclusion.\n\n" +
          "He cares about justice, not merely as a beautiful concept, but as something that should become justice in action and execution.\n\n" +
          "He looks at things that appear disconnected and asks:\n\nHow can we bring them together?\n\n" +
          "He looks at what appears difficult and asks:\n\nHow can we make it comfortable?\n\n" +
          "He looks at what appears terrible and asks:\n\nHow can we create beautiful butterflies around it?\n\n" +
          "And perhaps one of the words that best describes his mind is:\n\nSYNCHRONIZED.\n\n" +
          "Samuel likes things to fit.\n\nTo connect.\n\nTo make sense.\n\nTo work together.\n\nTo become greater than the individual pieces."
      },
      {
        id: "fashion",
        kicker: "The eye",
        title: "And Yes: The Fashion",
        body:
          "There is another side of Samuel that refuses to be overlooked.\n\nFashion.\n\n" +
          "He has an eye for style, design and presentation.\n\nHis taste is intentional.\n\nDistinctive.\n\nCreative.\n\n" +
          "And, in his own words:\n\n" +
          "> “My taste of fashion is not questionable.”\n\n" +
          "It is a line that captures something about his personality: Samuel does not merely want things to function.\n\n" +
          "He wants them to look right, feel right and carry identity.\n\n" +
          "The same creative instinct that appears in his clothing, design and presentation also appears in the way he approaches ideas.\n\n" +
          "For Samuel, creativity is not confined to one department of life.\n\nIt is a way of seeing."
      },
      {
        id: "learning",
        kicker: "The classroom",
        title: "The Journey of Learning",
        body:
          "Samuel studied Bachelor of Commerce, Finance option, at the Technical University of Kenya, progressing to his third year before changing direction toward Biblical and theological studies. The university itself continues to list Bachelor of Commerce among its programmes, including Finance as an option.\n\n" +
          "His educational journey did not follow a perfectly straight line.\n\nNeither did his life.\n\n" +
          "His learning continued through ministry, music, family, creativity, business, relationships, faith, human development and lived experience.\n\n" +
          "For Samuel, learning is not confined to a classroom.\n\nLife itself is a classroom.\n\n" +
          "Some of his deepest questions have emerged not from examinations, but from watching people struggle with opportunity, identity, purpose, relationships and the realities of everyday life."
      },
      {
        id: "family",
        kicker: "The home",
        title: "The Family Behind the Man",
        body:
          "Away from the public vision, Samuel M.K. is a family man.\n\n" +
          "He is married to Mercy Asali Samuel.\n\n" +
          "Together, they have two sons and one daughter: Wisdom Baraka, Blessing Amani and Praise Kibali.\n\n" +
          "His family is part of his cheering team.\n\n" +
          "They are part of the love, responsibility, sacrifice and encouragement behind the journey.\n\n" +
          "Because behind every public vision is a private world.\n\nAnd for Samuel, that world matters."
      },
      {
        id: "expansion",
        kicker: "The turn",
        title: "From Music to Human Possibility",
        body:
          "The journey from Smaltal to Samuel M.K. is not a story of leaving music behind.\n\nIt is a story of expansion.\n\n" +
          "The young man who learned how to move people through music eventually became a man asking deeper questions about people themselves.\n\n" +
          "Why can someone have ability but lack opportunity?\n\n" +
          "Why can someone have a dream but lack structure?\n\n" +
          "Why can a person be surrounded by people and still feel disconnected?\n\n" +
          "Why can communities possess resources while the people who need them remain unable to access them?\n\n" +
          "Why do different parts of human life sometimes seem to work against one another?\n\n" +
          "And perhaps the biggest question:\n\n" +
          "What happens when the different dimensions of a human being begin working together?\n\n" +
          "These questions contributed to the thinking behind L.I.G.O. SPACE and the emerging Synchronized Human System™."
      },
      {
        id: "framework",
        kicker: "The framework",
        title: "The Synchronized Human System™",
        body:
          "The Synchronized Human System™ is an emerging framework developed through Samuel's continuing thinking about human development and human possibility.\n\n" +
          "It explores six dimensions:\n\n" +
          "- Body\n- Mind\n- Emotion / Heart\n- Identity / Self\n- Relational / Social\n- Purpose\n\n" +
          "Its central proposition is simple:\n\n" +
          "> “Most people are not lost; they are simply unsynchronized.”\n\n" +
          "The framework is not presented as an established scientific theory.\n\n" +
          "It is an evolving body of thought intended to be explored, researched, tested and strengthened through engagement with psychology, human development, measurement and other relevant disciplines.\n\n" +
          "For Samuel, the goal is not merely to create another concept.\n\n" +
          "It is to build something that can eventually help people understand themselves, connect their different dimensions and move toward greater alignment."
      },
      {
        id: "ligo",
        kicker: "The vision",
        title: "The Birth of L.I.G.O. SPACE",
        body:
          "L.I.G.O. SPACE grew from a much larger question:\n\n" +
          "What if opportunity, dignity, purpose, technology, relationships, learning and human development could be connected rather than treated as separate things?\n\n" +
          "What began as a vision for youth and positive transformation expanded into a broader human-centered ecosystem.\n\n" +
          "A space for:\n\n" +
          "- opportunity\n- dignity\n- learning\n- connection\n- creativity\n- mentorship\n- technology\n- purpose\n- human possibility\n\n" +
          "Its guiding conviction is:\n\nHUMANITY FIRST, EVERY LIFE MATTERS.\n\n" +
          "And beneath it stands another line:\n\nWHAT CROWNS US: LOVE.\n\n" +
          "L.I.G.O. SPACE is not simply about building an organization.\n\nIt is about building pathways.\n\n" +
          "Connecting people to opportunities.\n\nConnecting communities to systems.\n\nConnecting ideas to action.\n\nConnecting people to people.\n\n" +
          "And ultimately, connecting human potential to possibility."
      },
      {
        id: "faith",
        kicker: "The foundation",
        title: "The Faith Beneath the Vision",
        body:
          "Above every title, project, ambition and idea stands Samuel's faith.\n\n" +
          "He is a born-again Christian, a minister of the Gospel and a worshipper.\n\n" +
          "He believes in God Almighty, the Creator of heaven and earth, and believes that God is the reason and ultimate owner of everything.\n\n" +
          "His faith shapes how he understands his life, his calling, his family, his creativity and his responsibility toward other people.\n\n" +
          "It is also why service matters to him.\n\nWhy dignity matters.\n\nWhy people matter.\n\nWhy love matters."
      },
      {
        id: "becoming",
        kicker: "The road ahead",
        title: "The Man Is Still Becoming",
        body:
          "Samuel M.K. does not present himself as a finished product.\n\n" +
          "He is still learning.\n\nStill asking.\n\nStill building.\n\nStill correcting.\n\nStill discovering.\n\nStill becoming.\n\n" +
          "That may be one of the most important parts of his story.\n\n" +
          "The boy called Smaltal did not know everything.\n\n" +
          "The singer did not know he would one day be designing human-development frameworks.\n\n" +
          "The young thinker did not know his questions would eventually contribute to L.I.G.O. SPACE.\n\n" +
          "And the founder does not pretend to know everything that the future will become.\n\n" +
          "But he knows one thing:\n\nHe wants to keep building."
      },
      {
        id: "who",
        kicker: "In a line",
        title: "So, Who Is Samuel M.K.?",
        body:
          "He is the boy who was called Smaltal.\n\n" +
          "The singer.\n\nThe worshipper.\n\nThe poet.\n\nThe minister.\n\nThe husband.\n\nThe father.\n\nThe thinker.\n\nThe critic.\n\nThe creative.\n\nThe designer.\n\n" +
          "The fashion-conscious man who confidently says:\n\n" +
          "> “My taste of fashion is not questionable.”\n\n" +
          "The builder.\n\nThe dreamer.\n\n" +
          "The man who sees disconnected pieces and asks how they can become synchronized.\n\n" +
          "The man who sees a problem and asks what can be built around it.\n\n" +
          "The man who believes justice must move from principle into execution.\n\n" +
          "The man who believes people deserve opportunity, dignity and purposeful pathways.\n\n" +
          "The man whose journey has moved:\n\n" +
          "- from music to ministry\n- from questions to ideas\n- from ideas to frameworks\n- and from frameworks toward systems\n\n" +
          "But beneath every title is a simpler identity:\n\n" +
          "A man who believes his life should be useful.\n\nA man who believes people matter.\n\nA man who believes love is stronger when it becomes action.\n\n" +
          "A man who believes that what looks impossible today may simply be waiting for the right people, the right structure and the right opportunity.\n\n" +
          "And above everything:\n\nA man who believes God is the Creator, the owner and the reason behind it all.\n\n" +
          "The story is still being written.\n\n" +
          "And perhaps the most beautiful part is this:\n\n" +
          "The boy who once moved people through music is now trying to move people through ideas, opportunity, purpose and love.\n\n" +
          "WHAT CROWNS US: LOVE."
      }
    ]
  };
})();
