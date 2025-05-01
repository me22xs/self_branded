// 找到并删除统计代码
let totalInputCount = 0;
let inputTimes = [];
let lastInputTime = Date.now();

function updateInputStats() {
  totalInputCount++;
  document.getElementById('totalInputCount').textContent = totalInputCount;
  
  const currentTime = Date.now();
  const timeDiff = (currentTime - lastInputTime) / 1000; // 转换为秒
  lastInputTime = currentTime;
  
  // 只记录有效的输入间隔（排除停顿后的第一次输入）
  if (timeDiff < 10) {
    inputTimes.push(timeDiff);
  }
  
  // 保持最近20次输入的记录
  if (inputTimes.length > 20) {
    inputTimes.shift();
  }
  
  // 计算最近的输入速度（字/秒）
  let recentSpeed = 0;
  if (inputTimes.length > 0) {
    const recentTimeDiff = inputTimes[inputTimes.length - 1];
    recentSpeed = 1 / recentTimeDiff; // 字/秒
  }
  
  // 计算平均速度
  let averageSpeed = 0;
  if (inputTimes.length > 0) {
    const sum = inputTimes.reduce((a, b) => a + b, 0);
    const avgTimeDiff = sum / inputTimes.length;
    averageSpeed = 1 / avgTimeDiff; // 字/秒
  }
  
  // 更新显示
  document.getElementById('replySpeed').textContent = recentSpeed.toFixed(1);
  document.getElementById('averageSpeed').textContent = averageSpeed.toFixed(1);
  
  // 更新速度条
  const speedBar = document.getElementById('speedBar');
  const maxSpeed = 5; // 最大速度参考值
  const percentage = Math.min(100, (recentSpeed / maxSpeed) * 100);
  speedBar.style.width = percentage + '%';
} 