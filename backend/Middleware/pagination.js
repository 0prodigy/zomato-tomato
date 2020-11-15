const paginatedData = (model) => {
    return async (req, res, next) => {
      let page = parseInt(req.query.page) || 1;
      let limit = parseInt(req.query.limit) || 10;
  
      let listCount = await model.countDocuments().exec();
      let totalPage = Math.ceil(listCount / limit);
  
      let startIndex = (page - 1) * limit;
      let endIndex = page * limit;
  
      let result = {};
  
      if (startIndex > 0) {
        result.prev = { page: page - 1, limit };
      }
      if (endIndex < listCount) {
        result.next = { page: page + 1, limit };
      }
  
      result.totalPage = totalPage;
  
      try {
        result.data = await model.find().limit(limit).skip(startIndex).exec();
        res.result = result;
        next();
      } catch (err) {
        res
          .status(500)
          .json({ err: true, message: "Something went wrong try agian later." });
      }
    };
  };
  
  module.exports = paginatedData;