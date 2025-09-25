// 今日の日付を取得
const today = new Date();

// 年・月・日をそれぞれ取り出す
const year = today.getFullYear();
const month = today.getMonth() + 1; // getMonthは0始まりなので+1
const day = today.getDate();

// 出力フォーマット（YYYY-MM-DD）
const formatted = `${year}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;

console.log(formatted);