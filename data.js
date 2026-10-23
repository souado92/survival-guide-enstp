window.TRANSPORT_DATA = {
  meta: { lastVerified: null, disclaimer: "Horaires et parcours à confirmer auprès du transporteur" },
  etusa: {
    points: [
      { id: "mai1", name: "Place du 1er Mai", ar: "ساحة أول ماي", stopFr: "Place du 1er Mai", lines: ["L89", "L06"], departures: null },
      { id: "audin", name: "Audin", ar: "ساحة أودان", stopFr: "Place Audin", lines: ["L33"], departures: null },
      { id: "martyrs", name: "Place des Martyrs", ar: "ساحة الشهداء", stopFr: "Place des Martyrs", lines: ["L06"], departures: null },
      { id: "kouba", name: "Kouba", ar: "القبة", stopFr: "Station Intermodale de KOUBA", lines: ["L89", "L06", "L33"], departures: { first: "06 h", last: "19 h", every: "15 minutes" } }
    ],
    lines: [
      { id: "L89", start: "Station Intermodale de KOUBA", aller: ["Station Intermodale de KOUBA|محطة متعددة الخدمات القبة","Vieux Kouba|القبة القديمة","Freres Abdeslami|الاخوة عبد السلامي","La Croix|لاكروا","APC Kouba|بلدية القبة","Calvaire|كالفير","Les Oasis|الواحات (وازيس)","Oued kniss|واد كنيس","El Annasser S.M.M|محطة متعددة الخدمات العناصر","Hamoud Boualem|حمود بوعلام","Jardin d Essai|حديقة التجارب","Les Ateliers|الورشات","Belcourt|بلكور","Place du 1er Mai|ساحة أول ماي"], retour: null },
      { id: "L06", start: "Station Intermodale de KOUBA", aller: ["Station Intermodale de KOUBA|محطة متعددة الخدمات القبة","Vieux Kouba|القبة القديمة","Freres Abdeslami|الاخوة عبد السلامي","La Croix|لاكروا","APC Kouba|بلدية القبة","Calvaire|كالفير","Les Oasis|الواحات (وازيس)","Oued kniss|واد كنيس","El Annasser S.M.M|محطة متعددة الخدمات العناصر","Hamoud Boualem|حمود بوعلام","Jardin d Essai|حديقة التجارب","Les Ateliers|الورشات","Belcourt|بلكور","Place du 1er Mai|ساحة أول ماي","Moulin|الطاحونة","Mauretania|موريطانيا","La Grande Poste (Parc Sofia)|البريد المركزي (حديقة صوفيا)","Ziroud Youcef (Hotel Saphir)|زيغود يوسف (فندق السفير)","Port Said (Square)|بور سعيد (سكوار)","Place des Martyrs|ساحة الشهداء"], retour: null },
      { id: "L33", start: "Station Intermodale de KOUBA", aller: ["Station Intermodale de KOUBA|محطة متعددة الخدمات القبة","Garidi 1|قاريدي 1","Garidi 2|قاريدي 2","Stade de Mohamed IGUER|ملعب محمد ايغر","Bir Mourad Rais|بئر مراد رايس","Mohammedi|محمدي","El Bitoum|البيتوم","Souidani Boudjemaa|سويداني بو جمعة","Palais du Peuple|قصر الشعب","Musee BARDO|متحف باردو","Sacre Coeur|ساكري كور","Meissonier|ميسوني","Place Audin|ساحة أودان"], retour: null }
    ]
  },
  kous: {
    routes: [
      { id: "k1", title: "Bach Djerrah – El Harrach", ar: "باش جراح – الحراش", times: "12 – 13 – 14 – 15 – 16" },
      { id: "k2", title: "El Kharrouba", ar: "خروبة", times: "12 – 13 – 14 – 15 – 16" },
      { id: "k3", title: "", ar: "", first: "07 h 30", freq: "Toutes les 30 minutes", stops: [["سعيد حمدين","Saïd Hamdine"],["باب الزوار","Bab Ezzouar"],["بن عكنون","Ben Aknoun"],["بوزريعة","Bouzaréah"],["دالي إبراهيم","Dély Ibrahim"]] },
      { id: "k4", title: "Sidi Moussa – Sahaoula – Baraki – Aïn Benian – Ouled Fayet / Blida – Djorf", ar: "سيدي موسى – سحاولة – براقي – عين بنيان – أولاد فايت / بليدة – الجرف", times: "2.30 – 4 – 5.15" },
      { id: "k5", title: "Ruisseau", ar: "الاقامة", times: "11h20 – 12h20 – 13 – 14h40 – 15h20 – 16h20 – 16h40 – 17 – 17h40" },
      { id: "k6", title: "Tafoura", ar: "تافورة", times: "13 – 14 – 15 – 16" }
    ]
  }
};
