export const getContent = async () => {
  var formdata = new FormData();
  formdata.append("name", "John");

  var request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true",
      body: formdata,
      Accept: "application/json",
    },
  };

  const result = await fetch("http://127.0.0.1:5000/get_content", request).then(
    (response) => response.json()
  );
  return result;
};
