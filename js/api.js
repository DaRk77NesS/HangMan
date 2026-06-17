const offlineWords = [
    "def", "class", "import", "if", "else", "for", "while",
    "print", "input", "open", "close", "read", "write", "socket", 
    "request", "hashlib", "json", "os", "sys", "re", "sub",
    "virus", "worm", "malware", "phish", "trojan", "payload", "exploit",
    "hacker", "patch", "attack", "breach", "leak", "firewall", "port",
    "scan", "sniff", "encrypt", "decrypt", "hash", "salt", "token",
    "cyber", "log", "threat", "risk", "server", "client", "code"
];

async function getSecretWord() {
    // This looks for 'dictionary.txt' right in your GitHub Pages repository folder
    const targetUrl = "./dictionary.txt";

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await fetch(targetUrl, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error();

        const textData = await response.text();
        const wordList = textData.split('\n');
        
        // Filter words to keep the game balanced (between 3 and 8 characters)
        const filtered = wordList.map(w => w.trim()).filter(w => w.length >= 3 && w.length <= 8 && /^[a-zA-Z]+$/.test(w));
        
        if (filtered.length > 0) {
            return { word: filtered[Math.floor(Math.random() * filtered.length)].toLowerCase(), isOnline: true };
        }
    } catch (e) {
        console.warn("Could not fetch hosted dictionary, shifting to offline database array.");
    }
    
    // Hard fallback if the text file is missing or corrupted
    return { word: offlineWords[Math.floor(Math.random() * offlineWords.length)].toLowerCase(), isOnline: false };
}