const config = {
  TOKEN: "MTIxODM0MDE0MDU3Nzk4MDQzNg.G7-62a.bzI9Clkm__S4ghA32-9FKEEd073pOmyJRwpv68", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "!",
  guild: "1218540046571933736", //Sunucu ID Yazın 
  channel: "1232654393166528582", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "1231616051494785087", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "1231616222102032434" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["1231616058951995493"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "1231616058951995493", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "**COLD ORGANİZASYON** Sunucusunda Yapmış Oldugunuz Yetkili Başvurunuz Onaylanmıştır Ve Rolünüz Verilmiştir! <a:tik_3:1238551234785443860>", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "**COLD ORGANİZASYON** Sunucusunda Yapmış Oldugunuz Yetkili Başvurunuz Reddedildi!  <a:carpi:1239984008838778971>", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
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
