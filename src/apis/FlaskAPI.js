const url = "http://127.0.0.1:5000";
// const url = "https://partywave.ai/apis";

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

  const result = await fetch(url + "/get_content", request)
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", error);
    });
  return result;
};

export const submit = async (record) => {
  console.log("submissing record", record);
  var formdata = new FormData();
  formdata.append("record", JSON.stringify(record));
  var request = {
    method: "POST",
    body: formdata,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  const result = await fetch(url + "/submit", request)
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", error);
    });
  return result;
};
