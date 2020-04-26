// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.getBootcamps = (req, res, rext) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      public
exports.getBootcamp = (req, res, rext) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id} ` });
};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps/:id
// @access      private
exports.createBootcamp = (req, res, rext) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};

// @desc        Update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      private
exports.updateBootcamp = (req, res, rext) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id} ` });
};

// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      private
exports.deleteBootcamp = (req, res, rext) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id} ` });
};
