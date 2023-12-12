import profileImage from "@/assets/images/profile.jpg";
const profileData = [
  {
    id: 1,
    name: "Seda",
    surname: "Odabaşı Dinç",
    avatarUrl: profileImage,
    job: "Uzman, Klinik Psikoloji",
    city: "İstanbul",
    language: "TR",
    wage: "8₺/dk",
  },
];
const profileTabs = [
  {
    id: 1,
    clinicalInterests: [
      "Kaygı,Panik Atak,Bağlanma Sorunları,Baş Etme Becerileri,Fobiler,Sosyal Kaygı,Özgüven Problemleri,Sağlık Kaygısı,Uyku bozukluğu,Depresyon,Bağımlılık,Stres,Öfke Kontrolü,Obsesif Kompulsif Bozukluk,Ebeveynlik İlişki Problemleri,Değersizlik,Kendini Tanıma",
    ],
    educationalInformation: [
      { name: "Okan Üniversitesi", year: 2018 },
      { name: "İstanbul Bilgi Üniversitesi", year: 2016 },
    ],
    experience: [
      {
        job: "Klinik Psikolog",
        workspace: "Home office",
        process: "Eylül 2021 - Halen",
      },
    ],
  },
];
export { profileData, profileTabs };
export default profileImage;
