const CREATE_URL = (path = "") => `http://localhost:4040/api/players/${path}`;

export const getAll = () => {
  return fetch(CREATE_URL(), {
    method: "GET"
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const getById = id => {
  return fetch(CREATE_URL(id), {
    method: "GET"
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const remove = id => {
  return fetch(CREATE_URL(id), {
    method: "DELETE"
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};
