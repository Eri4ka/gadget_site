import showNoty from '../modules/noty';

const postToDb = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        body: body
    });
    if (!res.ok) {
        showNoty(`Could not fetch ${url}, status: ${res.status}`, 'red');
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  },

  loadFromDb = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        showNoty(`Could not fetch ${url}, status: ${res.status}`, 'red');
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  },

  deleteFromDb = async (url) => {
    const res = await fetch(url, {
        method: 'DELETE'
    });
    if (!res.ok) {
        showNoty(`Could not fetch ${url}, status: ${res.status}`, 'red');
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

export { postToDb,  loadFromDb, deleteFromDb};