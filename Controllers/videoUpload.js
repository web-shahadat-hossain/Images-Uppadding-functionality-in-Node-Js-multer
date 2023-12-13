module.exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    let videosPaths = "";
    if (req?.files?.images[0]?.path) {
      videosPaths = req?.files?.images[0]?.path;
    }

    res.send({
      status: 200,
      message: "Successfully",
      data: {
        name,
        videos: videosPaths,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      error: err.message,
    });
  }
};
