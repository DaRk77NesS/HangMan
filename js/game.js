let secretWord = "";
let displayList = [];
let guessedLetters = new Set();
let isEndless = false;
let totalLives = 0;
let livesLeft = 0;
let totalGuesses = 0;
let isOnline = false;
let gameActive = false;

const bootLogs = [
    "⚡ CORE:: KERNEL MODULE STACK DEPLOYED SUCCESSFUL.",
    "🛰️ NET:: ACCESSING PARALLEL DATA CHANNELS...",
    "🛡️ SEC:: ISOLATION DECK RUNNING: MODE [GLASSMORPHISM v6.5]",
    "💾 MEM:: MOUNTING STATIC ROOT ARTIFACT FILES...",
    "🔒 SYS:: MAINFRAME RECEPTACLE SECURE. INITIALIZING SHELL CORE CONSOLE..."
];

document.addEventListener("DOMContentLoaded", () => {
    runTerminalStream();
});

function runTerminalStream() {
    const stream = document.getElementById("console-stream");
    let lineIdx = 0;

    function appendLine() {
        if (lineIdx < bootLogs.length) {
            const line = document.createElement("div");
            line.className = "stream-line";
            line.innerText = bootLogs[lineIdx];
            stream.appendChild(line);
            lineIdx++;
            setTimeout(appendLine, 350);
        } else {
            setTimeout(() => {
                stream.classList.add("hidden");
                document.getElementById("content-core").classList.remove("hidden");
            }, 600);
        }
    }
    appendLine();
}

async function startGame(modeSelection) {
    document.getElementById("menu-card").classList.add("hidden");
    const gameCard = document.getElementById("game-card");
    gameCard.classList.remove("hidden");

    const data = await getSecretWord();
    secretWord = data.word.toLowerCase().trim();
    isOnline = data.isOnline;

    document.getElementById("network-dot").style.display = isOnline ? "inline-block" : "none";

    displayList = Array(secretWord.length).fill("_");
    guessedLetters.clear();
    totalGuesses = 0;
    gameActive = true;

    const stabilityHUD = document.getElementById("stability-wrapper");

    if (modeSelection === 1) {
        isEndless = false;
        totalLives = secretWord.length + Math.floor(Math.random() * 5) + 1;
        livesLeft = totalLives;
        document.getElementById("display-mode").innerHTML = `<span style="color:#ff0055;">HARD</span>`;
        stabilityHUD.classList.remove("hidden");
        document.getElementById("gallows-panel").classList.remove("hidden");
    } else {
        isEndless = true;
        document.getElementById("display-mode").innerHTML = `<span style="color:#00ff87;">EASY (ENDLESS)</span>`;
        stabilityHUD.classList.add("hidden");
        document.getElementById("gallows-panel").classList.add("hidden");
    }

    updateUI();

    const consoleInput = document.getElementById("console-input");
    consoleInput.value = "";
    consoleInput.disabled = false;
    consoleInput.focus();

    document.onclick = () => { if (gameActive) consoleInput.focus(); };
}

// Fixed Key Interceptor Strategy to bypass character conversion triggers
document.getElementById("console-input").addEventListener("keydown", (e) => {
    if (!gameActive) return;

    // Only look at actual characters (A-Z)
    const char = e.key.toLowerCase();
    if (char.length !== 1 || !/^[a-z]$/.test(char)) {
        // Let systemic shortcut commands run normally, block default typing injections
        if (!e.ctrlKey && !e.metaKey) e.preventDefault();
        return;
    }

    // Completely block the key from being written into the box text stream
    e.preventDefault();

    if (guessedLetters.has(char)) {
        printLog(`⚠ NODE LATCH DETECTED: '${char.toUpperCase()}' USED.`, "#ffb300");
        return;
    }

    guessedLetters.add(char);

    if (secretWord.includes(char)) {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === char) displayList[i] = char;
        }
        printLog(`✔ MATRIX COMPONENT VERIFIED: '${char.toUpperCase()}' MATCH.`, "#00ff87");
    } else {
        if (!isEndless) livesLeft--;
        printLog(`✘ SECTOR FAULT: PARAMETER '${char.toUpperCase()}' REJECTED.`, "#ff0055");
    }

    if (isEndless) totalGuesses++;

    updateUI();
    checkGameOver();
});

function updateUI() {
    document.getElementById("word-display").innerText = displayList.join(" ");
    document.getElementById("used-letters").innerText = guessedLetters.size > 0 ? Array.from(guessedLetters).sort().join(", ").toUpperCase() : "None";

    if (!isEndless) {
        const pct = livesLeft / totalLives;
        document.getElementById("lives-count").innerText = `${livesLeft}/${totalLives}`;

        const barFill = document.getElementById("hp-bar");
        barFill.style.width = `${Math.max(0, pct * 100)}%`;
        barFill.style.backgroundColor = pct > 0.5 ? "#00ff87" : pct > 0.25 ? "#ffb300" : "#ff0055";

        renderGallows(pct);
    }
}

function renderGallows(pct) {
    const artBox = document.getElementById("gallows-art");

    let head = pct < 0.85 ? "       .-'\"'-.       │\n      /       \\      │\n      \\       /      │\n       '-...-'       │" : "                     │\n                     │\n                     │\n                     │";
    let torso = "                     │\n                     │\n                     │";
    if (pct < 0.30) torso = "        / | \\        │\n       /  |  \\       │\n          |          │";
    else if (pct < 0.50) torso = "        / |          │\n       /  |          │\n          |          │";
    else if (pct < 0.70) torso = "           |          │\n           |          │\n           |          │";

    let legs = "                     │\n                     │";
    if (livesLeft <= 0) legs = "         / \\         │\n        /   \\        │";
    else if (pct < 0.15) legs = "         /           │\n        /             │";

    artBox.innerText =
        `         +──────────•\n` +
        `         │           │\n` +
        `${head}\n` +
        `${torso}\n` +
        `${legs}\n` +
        `                  =======`;
}

function printLog(msg, color) {
    const log = document.getElementById("message-log");
    log.innerText = msg;
    log.style.color = color;
}

function checkGameOver() {
    const consoleInput = document.getElementById("console-input");

    if (!displayList.includes("_")) {
        gameActive = false;
        consoleInput.disabled = true;
        printLog(`🎉 DATA EXTRACTION SUCCESSFUL! [Attempts: ${isEndless ? totalGuesses : totalLives - livesLeft}]`, "#00ff87");
        resetToMenuDelay();
    } else if (!isEndless && livesLeft <= 0) {
        gameActive = false;
        consoleInput.disabled = true;
        printLog(`💀 CRITICAL DATA BREACH. OVERRIDE KEY WAS: ${secretWord.toUpperCase()}`, "#ff0055");
        resetToMenuDelay();
    }
}

function resetToMenuDelay() {
    setTimeout(() => {
        location.reload();
    }, 4500);
}