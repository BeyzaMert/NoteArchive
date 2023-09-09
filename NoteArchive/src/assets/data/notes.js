import noteImg01 from "../images/ilkokul-turkce-01.png";
import noteImg02 from "../images/ilkokul-ingilizce-02.jpg";
import noteImg03 from "../images/ilkokul-ingilizce-03.jpg";

import noteImg04 from "../images/ortaokul-matematik-01.jpg";
import noteImg05 from "../images/ortaokul-matematik-02.jpg";
import noteImg06 from "../images/ortaokul-matematik-03.jpg";
import noteImg07 from "../images/ortaokul-matematik-04.jpg";

import noteImg08 from "../images/lise-cografya-01.jpg";
import noteImg09 from "../images/lise-cografya-02.jpg";
import noteImg10 from "../images/lise-matematik-03.png";
import noteImg11 from "../images/lise-matematik-04.jpg";

import noteImg12 from "../images/universite-ingilizceogretmenligi-01.jpg";
import noteImg13 from "../images/universite-matematik-02.jpg";
import noteImg14 from "../images/universite-bilgisayarmuhendisligi-03.jpg";


import noteImg15 from "../images/yukseklisans-yapayzeka-01.png";
import noteImg16 from "../images/yukseklisans-yapayzeka-01.png";
import noteImg17 from "../images/yukseklisans-yapayzeka-01.png";


// import productImg23 from "../images/wireless-01.png";

// import productImg25 from "../images/wireless-03.png";

const products = [
  {
    id: "01",
    noteName: "Türkçe Notu",
    imgUrl: noteImg01,
    category: "ilkokul",
    price: 193,
    shortDesc:
      "3.sınıf Türkçe notudur.",
    description:
      "3.sınıf Türkçe yazım kuralları konusunun notudur.",
    reviews: [
      {
        rating: 4.7,
        text: "Not gayet anlaşabilir",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    noteName: "İngilizce Notu",
    imgUrl: noteImg02,
    category: "ilkokul",
    price: 253,
    shortDesc:
      "4.sınıf İngilizce notudur.",
    description:
      "4.sınıf İngilizce Colors konusunun notudur.",
    reviews: [
      {
        rating: 4.8,
        text: "Açıklayıcı bir nottu teşekkür ederim.",
      },
      {
        rating: 4.8,
        text: "Anlaşılabilir bir not.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    noteName: "İngilizce Notu",
    imgUrl: noteImg03,
    category: "ilkokul",
    price: 173,
    shortDesc:
      "3. sınıf İngilizce notudur.",
    description:
      "3.sınıf İngilizce Numbers konusunun notudur.",
    reviews: [
      {
        rating: 3.6,
        text: "Yazı biraz daha okunaklı olabilirdi.",
      },
      {
        rating: 1.9,
        text: "Not çok karışık geldi beğenmedim.",
      },
    ],
    avgRating: 4.7,
  },
  // {
  //   id: "26",
  //   productName: "Rivet Bigelow Modern ",
  //   imgUrl: productImg02,
  //   category: "sofa",
  //   price: 253,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.7,
  // },
  {
    id: "04",
    noteName: "Matematik Notu",
    imgUrl: noteImg04,
    category: "ortaokul",
    price: 163,
    shortDesc:
      "4. sınıf Matematik notudur.",
    description:
      "4. sınıf Matematik tam sayılar notudur.",
    reviews: [
      {
        rating: 1.6,
        text: "İşlemlerden bazıları yanlış",
      },
      {
        rating: 4.9,
        text: "Gayet anlaşılabilir not.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    noteName: "Matematik Notu",
    imgUrl: noteImg05,
    category: "ortaokul",
    price: 163,
    shortDesc:
      "5. sınıf Matematik notudur.",
    description:
      "5. sınıf Matematik kesirler konusu notudur.",
    reviews: [
      {
        rating: 4.6,
        text: "Beğendim.",
      },
      {
        rating: 1.0,
        text: "Beğenmedim.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    noteName: "Matematik Notu",
    imgUrl: noteImg06,
    category: "ortaokul",
    price: 163,
    shortDesc:
      "8.sınıf matematik notudur.",
    description:
      "8. sınıf Matematik problemler konusunun notudur.",
    reviews: [
      {
        rating: 1.6,
        text: "Problemleri zayıf buldum.",
      },
      {
        rating: 4.9,
        text: "Problemler açıklayıcıydı.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    noteName: "Matematik Notu",
    imgUrl: noteImg07,
    category: "ortaokul",
    price: 99,
    shortDesc:
      "7.sınıf Matematik notudur.",
    description:
      "7. sınıf Matematik denklemler notudur.",
    reviews: [
      {
        rating: 3.6,
        text: "Denklemler çok karışıktı.",
      },
      {
        rating: 4.9,
        text: "Gayet iyi.",
      },
    ],
    avgRating: 4.7,
  },

  // {
  //   id: "27",
  //   productName: "Modern Arm Sofa",
  //   imgUrl: productImg007,
  //   category: "sofa",
  //   price: 173,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.6,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.7,
  // },

  {
    id: "08",
    noteName: "Coğrafya Notu",
    imgUrl: noteImg08,
    category: "lise",
    price: 89,
    shortDesc:
      "Lise 1 Coğrafya notudur.",
    description:
      "Lise 1 Coğrafya iklimler notudur.",
    reviews: [
      {
        rating: 4.6,
        text: "Anlaşılır",
      },
      {
        rating: 1.9,
        text: "Kötü.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    noteName: "Coğrafya Notu",
    imgUrl: noteImg09,
    category: "lise",
    price: 112,
    shortDesc:
      "Lise 2 Coğrafya notudur.",
    description:
      "Lise 2 Coğrafya doğal afetler konusudur.",
    reviews: [
      {
        rating: 4.6,
        text: "Gayet iyi",
      },
      {
        rating: 4.9,
        text: "Güzel.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    noteName: "Matematik Notu",
    imgUrl: noteImg10,
    category: "lise",
    price: 799,
    shortDesc:
      "Lise 4 Matematik notudur.",
    description:
      "Lise 4 Türev konusu notudur.",
    reviews: [
      {
        rating: 3.8,
        text: "Biraz daha zor sorular olabilirdi.",
      },
      {
        rating: 4.0,
        text: "Fena Değil.",
      },
    ],
    avgRating: 4.8,
  },
  // {
  //   id: "25",
  //   productName: "Sakarias Armchair",
  //   imgUrl: productImg10,
  //   category: "chair",
  //   price: 99,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.6,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.7,
  // },
  {
    id: "11",
    noteName: "Matematik Notu",
    imgUrl: noteImg11,
    category: "lise",
    price: 799,
    shortDesc:
      "Lise 4 Matematik notudur.",
    description:
      "Lise 4 İntegral konusu notudur.",
    reviews: [
      {
        rating: 4.8,
        text: "Çok iyi anladım.",
      },
      {
        rating: 4.9,
        text: "Çok açılayıcı.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    noteName: "Tarih Notu",
    imgUrl: noteImg12,
    category: "universite",
    price: 599,
    shortDesc:
      "Tarih notudur.",
    description:
      "Tarih dersi osmanlı  notudur.",
    reviews: [
      {
        rating: 1.8,
        text: "Çok karışık.",
      },
      {
        rating: 3.9,
        text: "Fena değil.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    noteName: "Matematik Notu",
    imgUrl: noteImg13,
    category: "universite",
    price: 799,
    shortDesc:
      "Üniversite matematik notudur",
    description:
      "Üniversite Matematik dersi Analitik Geometri notudur",
    reviews: [
      {
        rating: 4.8,
        text: "Çok iyi.",
      },
      {
        rating: 4.9,
        text: "İyi.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    noteName: "Bilgisayar Müh. Notu",
    imgUrl: noteImg14,
    category: "universite",
    price: 899,
    shortDesc:
      "Bilgisayar Mühendisliği notudur.",
    description:
      "Bilgisayar Mühendisliği Bulut Bilişim notudur.",
    reviews: [
      {
        rating: 3.2,
        text: "Gereksiz açıklamayla dolu.",
      },
      {
        rating: 4.9,
        text: "Gayet iyi.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    noteName: "Yapay Zeka Notu",
    imgUrl: noteImg15,
    category: "yukseklisans",
    price: 699,
    shortDesc:
      "Yapay Zeka notudur.",
    description:
      "Yapay Zeka deney notudur.",
    reviews: [
      {
        rating: 4.8,
        text: "Sonunda aradığım notu buldum.",
      },
      {
        rating: 4.9,
        text: "Çok iyi.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    noteName: "Yapay Zeka Notu",
    imgUrl: noteImg16,
    category: "yukseklisans",
    price: 299,
    shortDesc:
      "Yapay Zeka notudur.",
    description:
      "Yapay Zeka deney notudur.",
    reviews: [
      {
        rating: 1.8,
        text: "Çok karışık.",
      },
      {
        rating: 2.9,
        text: "Fena değil.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    noteName: "Yapay Zeka Notu",
    imgUrl: noteImg17,
    category: "yukseklisans",
    price: 299,
    shortDesc:
      "Yapay Zeka notudur.",
    description:
      "Yapay Zeka deney notudur.",
    reviews: [
      {
        rating: 0.8,
        text: "Çok kötü.",
      },
      {
        rating: 1.9,
        text: "Boş.",
      },
    ],
    avgRating: 4.8,
  },

  // {
  //   id: "18",
  //   productName: "Rolex Watch",
  //   imgUrl: productImg21,
  //   category: "watch",
  //   price: 299,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "19",
  //   productName: "Apple Watch",
  //   imgUrl: productImg22,
  //   category: "watch",
  //   price: 399,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "20",
  //   productName: "Beat Studio Wireless",
  //   imgUrl: productImg23,
  //   category: "wireless",
  //   price: 199,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "22",
  //   productName: "Beat EP Headphones",
  //   imgUrl: productImg25,
  //   category: "wireless",
  //   price: 199,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },
];

export default products;
