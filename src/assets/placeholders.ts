const createPlaceholder = (text: string, width = 800, height = 450, bgColor = '#333', textColor = '#fff'): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // 背景
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    
    // 文字
    ctx.fillStyle = textColor;
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width/2, height/2);
  }
  
  return canvas.toDataURL('image/png');
};

// 为每个项目创建占位图
const placeholders: Record<string, string> = {
  lighthouse: createPlaceholder('The Lighthouse Project', 800, 450, '#1a3a5f', '#f8f8ff'),
  twin_cloud: createPlaceholder('Twin Cloud Project', 800, 450, '#2c3e50', '#ecf0f1'),
  stock_forest: createPlaceholder('Stock Forest Project', 800, 450, '#2e7d32', '#e8f5e9'),
  womensports: createPlaceholder('Women Sports Project', 800, 450, '#7b1fa2', '#f3e5f5'),
  movies_longer: createPlaceholder('Movies Getting Longer Project', 800, 450, '#c62828', '#ffebee'),
  who_runs_china: createPlaceholder('Who Runs China Project', 800, 450, '#b71c1c', '#ffebee')
};

export default placeholders;
