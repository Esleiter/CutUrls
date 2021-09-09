import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Loading = () => {
  return (
    <h1>Loading...</h1>
  );
};

const NotFound = () => {
  return (
    <h1>Not found.<code><br/> error 404.</code></h1>
  );
};

const Redirect= () => {
  var { id } = useParams();
  var api = `http://localhost:4000/${id}`;

  const [state, setState] = useState({
    'found': true
  });

  const on = () => {
    axios.get(api)
    .then(res => {
      window.location = res.data.url;
    })
    .catch(e => {
      if (e.response.status === 404) {
        setState({ 
          found: false
        });
      };
    });
  };

  if (state.found === false) {
    return (
      <NotFound />
    );
  } else {
    return (
      <section className="app-section">
        {window.onload = on()}
        <Loading />
      </section>
    );
  };
};
export default Redirect;