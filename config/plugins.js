module.exports = ({ env }) => ({
    upload: {
      provider: "publitio",
      providerOptions: {
        api_key: env("PUBLITIO_KEY"), //REQUIRED
        api_secret: env("PUBLITIO_SECRET"), //REQUIRED
        folder: "PROMO APP",
        folder_id: "PROMO",
      },
    },
  });