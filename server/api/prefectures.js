export default defineEventHandler(() => {
  return {
    prefectures: [
      {
        prefecture: "Tokyo",
        type: "Metropolis",
        cities: [
          "Akiruno", "Akishima", "Chōfu", "Fuchū", "Fussa", "Hachiōji", "Hamura",
          "Higashikurume", "Higashimurayama", "Higashiyamato", "Hino", "Inagi",
          "Kiyose", "Kodaira", "Koganei", "Kokubunji", "Komae", "Kunitachi",
          "Machida", "Mitaka", "Musashimurayama", "Musashino", "Nishitokyo",
          "Ome", "Tachikawa", "Tama"
        ],
        towns: [
          "Hinohara", "Hinode", "Mizuho", "Okutama", "Oshima", "Hachijō",
          "Mikurajima", "Kozushima", "Niijima", "Aogashima"
        ]
      },
      {
        prefecture: "Osaka",
        type: "Prefecture",
        cities: [
          "Osaka", "Sakai", "Higashiosaka", "Moriguchi", "Kadoma", "Suita",
          "Takatsuki", "Ibaraki", "Matsubara", "Daito", "Izumi", "Kashiwara",
          "Kishiwada", "Kaizuka", "Tondabayashi", "Habikino", "Ikeda", "Toyonaka",
          "Hirakata", "Yao", "Izumisano", "Shijonawate", "Katano", "Osakasayama"
        ],
        towns: [
          "Kumatori", "Tajiri", "Sennan", "Misaki", "Tadaoka", "Chihayaakasaka"
        ]
      },
      {
        prefecture: "Hokkaido",
        type: "Prefecture",
        cities: [
          "Sapporo", "Asahikawa", "Hakodate", "Obihiro", "Kushiro", "Otaru",
          "Tomakomai", "Kitami", "Muroran", "Ebetsu", "Chitose", "Iwamizawa",
          "Nayoro", "Rumoi", "Wakkanai", "Bibai", "Ashibetsu", "Tobetsu"
        ],
        towns: [
          "Teshikaga", "Akan", "Abashiri", "Shari", "Rankoshi", "Biei", "Furano",
          "Niseko", "Kutchan", "Toyako"
        ]
      }
    ]
  }
});
