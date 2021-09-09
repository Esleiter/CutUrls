import axios from 'axios';
import Social from './social';
import { useState } from 'react';

const Cut = () => {
  var api = 'http://localhost:4000/cut'; 

  const [state, setState] = useState({
    'url': '',
    'urlCut': ''
  });
  
  const handleChange = (e) => {
    setState({ url: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUrl = new RegExp(
      /(http|https):\/\/(\w+:{0,1}\w*@)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
    );

    const addhttp = (urlTest) => {
      if (!validUrl.test(urlTest)) {
        urlTest = 'http://'+urlTest;
      };
      return urlTest;
    };

    const urlHttp = addhttp(state.url);

    axios.post(api, { url: urlHttp })
    .then(res => {
      setState({ 
        url: urlHttp,
        urlCut: res.data.code
      });
    });
  };

  return (
    <section className="app-section">
      <h1>CUT YOUR URL HERE!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" className="input-url" onChange={handleChange} placeholder="https://esleiter.com" />
        <button type="submit" className="button-submit">CUT!</button>
      </form>
      {/*eslint-disable-next-line*/}
      <a id="urlCut" href={state.urlCut} target="_blank">{window.location.href}{state.urlCut}</a>
      <Social url={state.urlCut} />
    </section>
  );
};
export default Cut;