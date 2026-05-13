import { AppDataSource } from "./database/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Veritabanı bağlantısı başarılı.");
  })
  .catch((error) => {
    console.log("Hata:", error);
  });