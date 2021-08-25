export const filterClothesType = (data, type) => {
  let clothingTypeList = data
    .filter((clothing) => clothing.type === type)
    .sort((a, b) => (a.name < b.name ? -1 : 1));
  return clothingTypeList;
};

///
export const convertDateDifference=(diffMs)=>{
let sec=1000;
let seconds=Math.floor((diffMs/sec));
let dateStr=`${seconds} seconds`
return dateStr;
}