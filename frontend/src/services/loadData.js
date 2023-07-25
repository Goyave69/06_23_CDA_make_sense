import ApiHelper from "./ApiHelper";

const loadData = (dataType, setState, dataId = "") => {
  ApiHelper(`${dataType}/${dataId}`, "get")
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.error(`Axios Error : ${err.message}`);
    });
};

// const editData = (dataType, updatedData, dataId = "") => {
//   ApiHelper(`${dataType}/${dataId}`, "put", updatedData)
//     .then((res) => {
//       updatedData(res.data);
//     })
//     .catch((err) => {
//       console.error(`Axios Error : ${err.message}`);
//     });
// };

// const deleteData = (dataType, dataId = "") => {
//   ApiHelper(`${dataType}/${dataId}`, "delete")
//     .then((res) => {
//       loadData(res.data);
//     })
//     .catch((err) => {
//       console.error(`Axios Error : ${err.message}`);
//     });
// };

export default loadData;
