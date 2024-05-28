const config = {
  TOKEN: "MTIxOTcyNzA0NjgzNDUyNDE2MA.GhZG0u.uHf8WReJXSDmjjmWBCsbEkBYzFztUvAdDoM4K8", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "!",
  guild: "1158380506447089714", //Sunucu ID Yazın
  channel: "1233070985008123925", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "1233074923837067284", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "1244940194541473844" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["1233075697980018759"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "1233075697980018759", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "**UNITED KINGDOM** Sunucusunda Yapmış Oldugunuz Yetkili Başvurunuz Onaylanmıştır Ve Rolünüz Verilmiştir Hoşgeldiniz! <a:tik_3:1238551234785443860>", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "**UNITED KINGDOM** Sunucusunda Yapmış Oldugunuz Yetkili Başvurunuz Reddedildi!  <a:carpi:1239984008838778971>", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 20000 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: "Başvuru Sistemi", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "BLUE", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "- Yetkili başvuru yapmak için aşağıdaki butona tıklaman yeterli.\n\n**Unutma:** Gereksiz başvuru yapmak ceza almana sebebiyet\nverebilir." //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["**İsimin Ve Yaşın**", "**Tecrübelerin**", "**Aktiflik Süren**", "**Neler Yapa Bilirsin**", "**Sadece Burda Aktif Ola Bilir Misin**"] //Sorulacak Sorular
};

module.exports = config;
