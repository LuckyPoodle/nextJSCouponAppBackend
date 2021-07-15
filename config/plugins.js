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
  upload: {
    provider: "do",
    providerOptions: {
      key: process.env.DO_SPACE_ACCESS_KEY,
      secret: process.env.DO_SPACE_SECRET_KEY,
      endpoint: process.env.DO_SPACE_ENDPOINT,
      space: process.env.DO_SPACE_BUCKET,
      directory: process.env.DO_SPACE_DIRECTORY,
      cdn: process.env.DO_SPACE_CDN,
    }
  },
});

// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//     // ...
//   });

