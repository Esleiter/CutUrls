import urls from './models/urls.js';

export const redirect = async (req, res) => {
  const codeRegex = /^([a-z0-9]){5}$/;
  if (!codeRegex.test(req.params.code)) {
    return res.status(404).json({msj : "URL not valid"});
  } else {
    const linkObj = await urls.findOne({code: req.params.code});
    if (!linkObj) {
      return res.status(404).json({msj : "URL not found"});
    } else {
      res.status(200).json({url : linkObj.url});
      //res.redirect(linkObj.url);
    };
  };
};