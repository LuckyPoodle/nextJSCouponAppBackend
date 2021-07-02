// module.exports = ({ env }) => ({
//     upload: {
//       provider: "publitio",
//       providerOptions: {
//         api_key: env("PUBLITIO_KEY"), //REQUIRED
//         api_secret: env("PUBLITIO_SECRET"), //REQUIRED
//         folder: "PROMO APP",
//         folder_id: "PROMO",
//       },
//     },
//   });

module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });