export const getContent = async () => {
  var formdata = new FormData();
  formdata.append("name", "John");

  var request = {
    method: "POST",
    body: formdata,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true",
    },
  };

  const result = await fetch("http://127.0.0.1:5000/get_content", request).then(
    (response) => response.json()
  );
  return result;
};

export const submit = async (record) => {
  var formdata = new FormData();
  console.log("record in submitt", record);

  formdata.append("record", JSON.stringify(record));

  var request = {
    method: "POST",
    body: formdata,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true",
    },
  };

  const result = await fetch("http://127.0.0.1:5000/submit", request).then(
    (response) => response.json()
  );
  return result;
};
