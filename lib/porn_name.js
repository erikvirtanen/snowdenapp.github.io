/**
 * Calling people 0338E0CA642D14C194DCD6D3A53CDE02D5 is no fun so instead
 * we give each public address a name.
 *
 * The use of a Porn Name was a common disguise in the 1970's. 
 * A person could hide their secret identity by using their unique Porn Name.
 * A person's Porn Name is calculated using the following formula:
 * (First Pet) + (Name of Street You Grew Up On) = Porn Name
 *
 * However I couldn't easily get a list of 1000 street names so the formula
 * here is
 * (Pet Name) + (Pet Name) = Porn Name
 * 
 * This class takes a list of pet names and using
 * the ECDH compressed public key generates a porn name for that key. 
 *
 * Regards, Jocelyn Xero.
 */
function porn_name(compressed_public_key) {
  // Divide the key in 2, use first half for first name
  // seconf half for second name
  var first = compressed_public_key.substring(2, 18);
  var second = compressed_public_key.substring(18, 34);
  
  var fmod = parseInt(first, 16) % pet_names.length;
  var smod = parseInt(second, 16) % pet_names.length;
  
  return pet_names[fmod] + " " + pet_names[smod];
}
 
var pet_names = [
  "Aardvark","Aba","Abacuss","Abbashy","Abbe","Abbot","Abdullah","Aberdeen",
  "Abner","Abrak","Abu","Acadia","Ace","Actra","Adal","Addison",
  "Adele","Admiral","Adolfo","Adonis","Adriane","Agora","Aika","Aikido",
  "Ainsley","Ajax","Akeem","Akiak","Aladdin","Alanna","Aldo","Alexe","Alcapone",
  "Alf","Alissa","Allegro","Allie","Alfonso","Alonso","Ali","Alpha","Alyssa",
  "Amadeus","Amanda","Amber","Ambrosia","Amelda","Amelie","Amico","Amigo","Amir",
  "Amur","Anabela","Anastasia","Andora","Android","Angel","Angelica","Angora","Anita",
  "Annie","Ante","Apache","Aphrodite","Apo","Apollo","Apu","Aquarius","Archie",
  "Arctic","Arden","Ares","Argos","Ariadne","","Arielle,Arissa","Arkan","Armando",
  "Armona","Arriba","Arsenio","Aruba","Ascot","Ashlee Ashy","Asi","Asimov","Askot",
  "Aspen","Astor","Athena","Attilla","Augustus","Aura","Aurora Austin","Autumn",
  "Avalanche","Avanti","Avera","Avona","Axel","Aza","Azalea","Azar Baba","Babar",
  "Babca","Babe","Babet Babs","Baca","Baccara","Bach","Baco","Badges","Baffu",
  "Baebel","Baggins","Bailey","Baizle","Balente","Baloo","Balzac","Bambi","Bandi",
  "Bandito","Banshee","Banya","Barbi","Barcley","Barkas","Barney","Barstonia","Basco",
  "Bashful","Bayer","Bazza","Beacon","Beanie","Bear","Beatrice","Beaux","Beavis","Becka",
  "Bedrock","Beecham","Begonia","Beja","Bek","Bela","Belisimo","Belle","Beneditto","Benji",
  "Beno","Beny","Berber","Bernardo","Berner","Besie","Bexter","Bianco","Bijou","Bimbo",
  "Bingo","Bishop","Bismarck","Blanche","Blarney","Blitsy","Blossem","Blu","Bocefus",
  "Boggs","Bojangles","Bomba","Bono","Bonzo","Booker","Bordeaux","Borscht","Boswell",
  "Brasko","Braveheart","Breston","Brie","Britany","Broadway","Brock","Bronx",
  "Brundi","Brutus","Bryce","Bubba","Buckeye","Buddy","Buffy","Buggoo","Bugsie",
  "Bumbles","Bugsy","Bumpkin","Bundy","Burk Cabot","Cactus","Caddy","Caesar",
  "Cagney","Cain","Calamity","Caldwell","Caliber","Calico","Calina","Calisha",
  "Callie","Callista","Calloway","Calpernicus","Calphurnia","Calvin","Calzone",
  "Camaron","Cameo","Camile","Camo","Cancellor","Candie","Cannes","Canuck",
  "Capella","Capkin","Cappuccino","Cappy","Capricorn","Captain","Cara","Caramelo",
  "Cardiff","Carisma","Carleigh","Carlton","Carmel","Caro","Carson","Carter",
  "Cartwright","Casablanca","Casanova","Casey","Cashew","Caspar","Cassandra","Cassidy",
  "Caster","Cataline","Catrin","Cayetana","Cecilie","Celeste","Cenna","Cerena","Cessy",
  "Chadwick","Challenger","Chamois","Champagne","Chance","Chandler","Chantilly","Chaos",
  "Chaplin","Chaps","Charcoal","Charles","Chaser","Chata","Chavez","Checca","Cheerio",
  "Chelsea","Chessnut","Chevelle","Chewbacca","Chewie","Cheyenne","Chicory","Chinook",
  "Cinderalla","Clarabel","Clifford","Columbus","Comet","Commander","Conan","Connie",
  "Corky","Cosmo","Courtney","Cripto","Crockett","Cupid Dablo","Dacron","Daffy","Daisy",
  "Dakota","Damian","Dancer","Dante","Danu","Dapper","Darwin","Dasher","Dato","Davos",
  "Dawber","Dawson","Dax","Dazzle","Deacon","Decker","Delbert","Delco","Delmonte",
  "Delta","Delphi","Demetre","Dempsey","Desiree","Desmond","Desoto","Dewey","Diaz",
  "Dickens","Dido","Dimples","Dino","Dixie","Disco","Doc","Dokie","Doodle","Doofus",
  "Doogie","Dot","Draka","Drako","Dreyfus","Dryden","Dutchess","Dynamo Eagle","Ebba",
  "Ebony","Earl","Easton","Ebony","Echo","Eclipse","Eddie","Eden","Edgar","Edison",
  "Effie","Einstein","Electra","Elf","Elijah","Elisa","Ella","Elliot","Ellis","Elmer",
  "Elmo","Elroy","Elsa","Elvira","Elvis","Elwood","Elza","Emar","Emerald","Emerson",
  "Emmit","Emir","Emma","Emma","Emrick","Enigma","Evita","Ezzy Fabian","Faith",
  "Falcon","Fandango","Fannie","Farao","Farris","Fearless","Felicity","Felix",
  "Fellow","Fenja","Fenton","Fergus","Ferra","Ferris","Fester","Fida","Fido",
  "Fiffi","Filibuster","Fingal","Finnigan","Fitzi","Fitzpatrick","Flash","Fletcher",
  "Flica","Flicker","Floppy","Flossy","Fluffy","Flutie","Fogarty","Fonda","Fonzie",
  "Forrest","Foster","Foxy","Fozzie","Fraiser","Frances","Franco","Franz","Freakles",
  "Freddie","Freeway","Fresca","Frieda","Frodo","Frosty Gabbi","Gadget","Gala",
  "Galena","Galileo","Galvani","Gamma","Garbo","Garfield","Garfunkel","Garrett",
  "Gator","Gatsby","Gecko","Gemini","Geoffroie","Georgette","Gerber","Gershwin",
  "Ghandi","Ghost","Gia","Gibson","Giddy","Gidget","Giggles","Gilles","Gillespie",
  "Gilligan","Gilroy","Ginger","Gino","Gipzy","Gizmo","Glory","Goblin Goldilocks",
  "Gomez","Gonzo","Goofy","Gorbie","Gorky","Gotham","Gotti","Grace","Granite",
  "Grayson","Gremlin","Greta","Griffin","Gringo","Gussie Hacker","Hackett","Haden",
  "Hagar","Hagen","Haggis","Hagerty","Haig","Hailey","Hakan","Hakeem","Hammer",
  "Hancock","Hannah","Harley","Harvard","Harvey","Hawkeye","Heatcliff","Hecate",
  "Heckle","Heidi","Helga","Henderson","Henna","Herbie","Hershey","Highlander",
  "Hilda","Hilton","Hippy","Hobart","Hobbes","Hocus Pocus","Hogan","Holly",
  "Hollywood","Homer","Hootie","Hopkins","Horton","Hoss","Howie","Hubble","Hudson",
  "Hugo","Hulk","Hurricane","Hutch Ibex","Ibiza","Ibycus","Iceman","Icky","Idola",
  "Iggy","Igor","Ike","Ilene","Immanuel","Inca","Indigo","Indy","Inky","Iris",
  "Irwin","Isaac","Isabelle","Issey Jabbar","Jackal","Jacqueline","Jaded","Jasper",
  "Jazz","Jeeves","Jenkins","Jeoffroi","Jesse","Jigger","Jimmy","Jitterbug",
  "Jocelyn","Joffrey","Jokester","Jonesie","Judas","Jukebox","Justice Kahn","Kaiser",
  "Kamaz","Kansas","Karl","Karlos","Kashmir","Kato","Kaufman","Kayla Keaton",
  "Kefir","Kellogg","Kerby","Kessel","Kibbles","Kiko","Kiwi","Kozmo","Kylie Lace",
  "Laddie","Lamour","Lancelot","Lassie","Leeroy","Lemur","Lennox","Lester",
  "Levi","Lexis","Liberty","Lightning","Lisbon","Litmus","Lombardi","Lopez",
  "Lorenzo","Luciano","Luzette Mable","Macgregor","Macy","Mahika","Major",
  "Malibu","Marco","Mattea","Maxx","Mayzie","McDuff","Meiko","Melessa","Memphis",
  "Midas","Miguel","Minie","Mirabella","Misty","Muggsy Nanno","Naples","Natalie",
  "Nathan","Natika","Neddy","Neiko","Nella","Nemo","Nibbles Nidda","Nimbus",
  "Nirvana","Novac","Nugget","Nutmeg","Nutrella","Nubbin","Noris","Nitro Obe",
  "Odana","Odell","Odis","Ogee","Olandra","Olexa","Olf","Olga","Oliver","Olympia",
  "Omega","Omer","Orbis","Orissa","Osborne","Oscar","Outlaw","Oxford","Ozzie Pablo",
  "Paddington","Pancho","Peanuts","Pebbles","Pedro","Penelope","Pepper","Perdita",
  "Petra","Phantom","Pheobe","Picasso","Pikas","Pinnochio","Piper","Pixel","Pokey",
  "Prancer","Pluto Quada","Quadra","Quadrant","Quaker","Quarda","Quark","Quartino",
  "Quartz","Quatro","Queen","Querk","Quervo","Quesadilla","Questa","Quicken",
  "Quicksilver","Quintino","Quincy","Quran","Quazi Racine","Rafael","Ralphie",
  "Ramal","Ramses","Rasputin","Reggie","Remy","Rhinestone","Ricardo","Ricochet",
  "Ringo","Ripper","Rocco","Rocket","Romeo","Rosko","Roxette","Ruffouss",
  "Ruggles Sabastian","Samantha","Sampson","Scoobie","Scrappy","Sergeant",
  "Shaggy","Shasta","Sheba","Sherlock","Siegmund","Slyvestor","Snowflake",
  "Socrates","Sonjah","Sonny","Sophie","Sparky","Spencer","Sprocket Tabatha",
  "Tannas","Tarzan","Tazy","Tess","Theo","Thor","Tiffany","Tinkerbelle",
  "Tobey","Tonto","Tootsie","Tristian","Trixie","Trooper","Tucker",
  "Twinkes","Twiggy","Tyson","Tigger Ubu","Udessa","Ugene","Ulka","Ulanda",
  "Ullie","Ulrik","Ulysses","Umberto","Unesko","Uni","Uno","Uther","Uranius",
  "Urchin","Uriah","Uros","Ursa","Uzzo","Unity Vagabond","Valda","Vanderbuilt",
  "Vangogh","Vargo","Velcro","Velda","Venus","Verna","Vernon","Vibes","Victor",
  "Viky","Vigor","Vincent","Violette","Virgil","Vivian","Vixie",
  "Vladimir Wacco","Waddles","Wags","Waldorf","Walessa","Warden","Warlock",
  "Wart","Wasabi","Watson","Waverly","Wessex","Weston","Whisper","Wichita",
  "Wiggles","Wilhelmina","Winnie","Wrigley","Wyatt Xabina","Xadur","Xalmos",
  "Xamir","Xandros","Xanta","Xanthie","Xanto","Xar","Xaros","Xavier","Xcell",
  "Xecke","Xeniana","Xenophon","Xero","Xerxes","Xinca","Xippe","Xystos Yaakov",
  "Yackie","Yahsi","Yalaz","Yaman","Yanda","Yankee","Yaren","Yasmir","Yates",
  "Yawney","Yazgi","Yazz","Yeoman","Yetti","Yigit","Ying","Ylanda","Yoda","Yogi Zaba"
  ,"Zabou","Zabrina","Zacharias","Zack","Zally","Zamboni","Zampara","Zannie",
  "Zappa","Zargo","Zassa","Zedon","Zeff","Zelda","Zena","Zeuss","Zsa","Zucker","Zwazoo"
];
