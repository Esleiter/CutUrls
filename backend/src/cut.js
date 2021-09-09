import urls from './models/urls.js';

export const cut = async (req, res) => {
  const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;

  if (req.body.url === undefined || !urlRegex.test(req.body.url)) {
    return res.status(400).json({msj : "Bad request"});
  } else {
    const linkUrl = await urls.findOne({url: req.body.url});
    if (!linkUrl) {
      const code = "xxxx".replace(/(.|$)/g, () => {
        return ((Math.random()*36)|0).toString(36);
      });
      //const linkCode = await urls.findOne({code: code}); modify function to check if the random code can be duplicated
      const url = req.body.url;
      const newUrl = new urls({ url, code, date : new Date });
      await newUrl.save();
      res.status(200).json({code : code});
    } else {
      res.status(200).json({code : linkUrl.code});
    };
  };
};