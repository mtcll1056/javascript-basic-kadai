// 今日の日付
const today = new Date();

// 年月日
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();

// 出力
const formatted = `${year}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;

console.log(formatted);