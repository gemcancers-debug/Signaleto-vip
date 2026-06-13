function loadMarkets() {
    const container = document.getElementById('markets-grid');
    if (!container) return;

    const markets = [
        { symbol: "BTC", nameFa: "بیت‌کوین", price: "۲,۸۹۷,۴۵۰,۰۰۰", change: 2.45, signal: "BUY", confidence: 87, rsi: 42, macd: "+0.0045", volume: "2.3x" },
        { symbol: "ETH", nameFa: "اتریوم", price: "۱۳۸,۷۲۰,۰۰۰", change: 1.12, signal: "BUY", confidence: 79, rsi: 38, macd: "+0.0021", volume: "1.8x" },
        { symbol: "BNB", nameFa: "بی‌ان‌بی", price: "۲۵,۸۹۰,۰۰۰", change: 0.87, signal: "NEUTRAL", confidence: 64, rsi: 51, macd: "-0.0012", volume: "1.2x" },
        { symbol: "SOL", nameFa: "سولانا", price: "۶,۴۵۰,۰۰۰", change: -3.21, signal: "SELL", confidence: 71, rsi: 68, macd: "-0.0087", volume: "3.1x" },
        { symbol: "XRP", nameFa: "ریپل", price: "۳۲,۴۵۰", change: 4.56, signal: "BUY", confidence: 82, rsi: 45, macd: "+0.0034", volume: "2.7x" },
        { symbol: "TON", nameFa: "تون", price: "۲۹,۱۵۰", change: -1.34, signal: "NEUTRAL", confidence: 58, rsi: 55, macd: "-0.0021", volume: "1.5x" },
        { symbol: "ADA", nameFa: "کاردانو", price: "۱۸,۷۲۰", change: 2.89, signal: "BUY", confidence: 76, rsi: 48, macd: "+0.0018", volume: "1.9x" },
        { symbol: "AVAX", nameFa: "آوالانچ", price: "۱,۲۴۵,۰۰۰", change: -2.11, signal: "SELL", confidence: 65, rsi: 62, macd: "-0.0056", volume: "2.2x" },
        { symbol: "LINK", nameFa: "چین‌لینک", price: "۸۹۵,۰۰۰", change: 3.45, signal: "BUY", confidence: 81, rsi: 41, macd: "+0.0042", volume: "2.5x" },
        { symbol: "DOGE", nameFa: "دوج‌کوین", price: "۱۲,۸۵۰", change: 1.78, signal: "NEUTRAL", confidence: 59, rsi: 53, macd: "+0.0009", volume: "4.1x" },
        { symbol: "SUI", nameFa: "سویی", price: "۴۵,۲۰۰", change: 5.67, signal: "BUY", confidence: 84, rsi: 39, macd: "+0.0078", volume: "3.8x" },
        { symbol: "TRX", nameFa: "ترون", price: "۴,۱۵۰", change: -0.92, signal: "NEUTRAL", confidence: 52, rsi: 58, macd: "-0.0011", volume: "2.9x" },
        { symbol: "NEAR", nameFa: "نیِر", price: "۱۸۵,۰۰۰", change: 2.34, signal: "BUY", confidence: 73, rsi: 47, macd: "+0.0033", volume: "2.1x" },
        { symbol: "PEPE", nameFa: "پپه", price: "۰.۰۰۰۱۲", change: -4.56, signal: "SELL", confidence: 48, rsi: 72, macd: "-0.00002", volume: "5.2x" },
        { symbol: "SHIB", nameFa: "شیبا", price: "۰.۰۰۰۰۲۷", change: 1.23, signal: "NEUTRAL", confidence: 55, rsi: 54, macd: "+0.000001", volume: "3.4x" },
        { symbol: "USDT", nameFa: "تتر", price: "۶۰,۲۰۰", change: 0.01, signal: "NEUTRAL", confidence: 95, rsi: 50, macd: "0.0000", volume: "1.1x" },
        { symbol: "GOLD", nameFa: "طلا", price: "۳,۴۵۰,۰۰۰", change: 0.45, signal: "NEUTRAL", confidence: 88, rsi: 49, macd: "+0.0008", volume: "1.6x" }
    ];

    let html = '';
    markets.forEach(m => {
        const changeClass = m.change >= 0 ? 'text-emerald-400' : 'text-red-400';
        const signalClass = m.signal === 'BUY' ? 'text-emerald-400' : 
                           m.signal === 'SELL' ? 'text-red-400' : 'text-yellow-400';
        const signalText = m.signal === 'BUY' ? '🟢 خرید' : 
                          m.signal === 'SELL' ? '🔴 فروش' : '🟡 انتظار';

        html += `
            <div class="market-card bg-[#15151f] border border-white/10 p-5 rounded-3xl">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <div class="font-bold text-xl">${m.symbol}</div>
                        <div class="text-sm text-white/60">${m.nameFa}</div>
                    </div>
                    <div class="text-right">
                        <div class="font-semibold tabular-nums text-sm">${m.price}</div>
                        <div class="${changeClass} text-xs font-medium">
                            \( {m.change >= 0 ? '+' : ''} \){m.change}%
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 text-xs mt-3">
                    <div>
                        <div class="text-white/50">RSI</div>
                        <div class="font-medium">${m.rsi}</div>
                    </div>
                    <div>
                        <div class="text-white/50">MACD</div>
                        <div class="font-medium">${m.macd}</div>
                    </div>
                    <div>
                        <div class="text-white/50">حجم</div>
                        <div class="font-medium">${m.volume}</div>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
                    <div class="font-bold \( {signalClass}"> \){signalText}</div>
                    <div class="text-[#00ff9f] font-bold text-xl">${m.confidence}<span class="text-sm">%</span></div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function refreshData() {
    const container = document.getElementById('markets-grid');
    if (!container) return;
    container.style.transition = 'opacity 0.3s';
    container.style.opacity = '0.3';
    setTimeout(() => {
        loadMarkets();
        container.style.opacity = '1';
    }, 400);
}

function showApiStatus() {
    document.getElementById('apiModal').classList.remove('hidden');
    document.getElementById('apiModal').classList.add('flex');
}

function hideApiStatus() {
    document.getElementById('apiModal').classList.remove('flex');
    document.getElementById('apiModal').classList.add('hidden');
}

function showActiveSignals() {
    alert("این بخش در نسخه بعدی کامل می‌شود.");
}

function showSettings() {
    alert("صفحه تنظیمات در حال توسعه است.");
}

window.onload = loadMarkets;