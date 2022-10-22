let createCloudinaryWidget = (cb) => {
  return cloudinary.createUploadWidget(
    {
      cloudName: "dnrblvwyb",
      uploadPreset: "FEC_Project"
    },
    (err, res) => {
      if(!err && res && res.event === 'success') {
        cb(res.info.secure_url)
      }
    }
  );
};

module.exports.createCloudinaryWidget = createCloudinaryWidget;