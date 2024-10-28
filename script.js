let quotes = [];
let lastIndex = -1; // 记录上一次显示的句子索引

// 读取 quotes.md 文件
fetch('quotes.md')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        quotes = lines
            .filter(line => line.trim().match(/^\d+\.\s/)) // 匹配以数字开头的行
            .map(line => line.replace(/^\d+\.\s*/, '').trim()); // 移除序号并修剪空格
        console.log(quotes); // 检查加载的名言
    })
    .catch(error => console.error('读取 Markdown 文件失败:', error));

// 获取随机名言
function getRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById("quote").innerText = "加载名言中...";
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex); // 确保不获取到当前显示的句子

    lastIndex = randomIndex; // 更新上一次显示的句子索引
    document.getElementById("quote").innerText = quotes[randomIndex];
}
