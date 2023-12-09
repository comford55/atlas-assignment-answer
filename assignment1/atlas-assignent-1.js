/**
 *
 * @param input
 * {ให้เขียนฟังก์ชั่นที่รับข้อมูลเป็น Array ของ number จากนั้น Return เป็น Array ที่ถูก +1
 * ตัวอย่าง
 * input [2,3] return [2,4]
 * input [9] return [1,0]
 * input [9,9,9] return [1,0,0,0]
 * input [7,8,8] return [7,8,9]}
 */
const atlasAssignment1 = (input) => {
  const strJoined = input.join("");
  const addOne = parseInt(strJoined, 10) + 1;
  const splitString = String(addOne).split("").map(Number);
  console.log(splitString);
  return splitString;
};

atlasAssignment1([2,3]);
atlasAssignment1([9]);
atlasAssignment1([9,9,9]);
atlasAssignment1([7,8,8]);
