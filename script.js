let quotes = [];

fetch('quotes.md')
    .then(response => response.text())
    .then(data => {
        // 从 Markdown 文本中提取句子
        const lines = data.split('\n');
        quotes = lines.filter(line => line.trim().startsWith('1.')).map(line => line.slice(3).trim());
    })
    .catch(error => console.error('读取 Markdown 文件失败:', error));

function getRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById("quote").innerText = "加载名言中...";
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
