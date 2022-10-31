import React from "react";

const RepeatedName = () => {
  const Names = ["ram", "shyam", "kiran", "nabin", "kiran", "shyam", "gita"];
  const toFindDuplicates = (Names) =>
    Names.filter((item, index) => Names.indexOf(item) !== index);
  const duplicateElement = toFindDuplicates(Names);
  console.log(duplicateElement);
  return (
    <div>
      {Names.map((item) => {
        return <li style={{backgroundColor:duplicateElement===item?'red':null}}>{item}</li>;
      })}
    </div>
  );
};

export default RepeatedName;
