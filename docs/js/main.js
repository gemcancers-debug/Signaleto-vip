function loadMarkets() {
    const container = document.getElementById('markets-grid');
    if (!container) return;

    const markets = [
        { symbol: "BTC", nameFa: "بیت‌کوین", price: "۲,۸۹۷,۴۵۰,۰۰۰", change: 2.45, signal: "BUY", confidence: 87 },
        { symbol: "ETH", nameFa: "اتریوم", price: "۱۳۸,۷۲۰,۰۰۰", change: 1.12, signal: "BUY", confidence: 79 },
        { symbol: "BNB", nameFa: "بی‌ان‌بی", price: "۲۵,۸۹۰,۰۰۰", change: 0.87, signal: "NEUTRAL", confidence: 64 },
        { symbol: "SOL", nameFa: "سولانا", price: "۶,۴۵۰,۰۰۰", change: -3.21, signal: "SELL", confidence: 71 },
        { symbol: "XRP", nameFa: "ریپل", price: "۳۲,۴۵۰", change: 4.56, signal: "BUY", confidence: 82 },
        { symbol: "TON", nameFa: "تون", price: "۲۹,۱۵۰", change: -1.34, signal: "NEUTRAL", confidence: 58 },
        { symbol: "ADA", nameFa: "کاردانو", price: "۱۸,۷۲۰", change: 2.89, signal: "BUY", confidence: 76 },
        { symbol: "AVAX", nameFa: "آوالانچ", price: "۱,۲۴۵,۰۰۰", change: -2.11, signal: "SELL", confidence: 65 },
        { symbol: "LINK", nameFa: "چین‌لینک", price: "۸۹۵,۰۰۰", change: 3.45, signal: "BUY", confidence: 81 },
        { symbol: "DOGE", nameFa: "دوج‌کوین", price: "۱۲,۸۵۰", change: 1.78, signal: "NEUTRAL", confidence: 59 },
        { symbol: "SUI", nameFa: "سویی", price: "۴۵,۲۰۰", change: 5.67, signal: "BUY", confidence: 84 },
        { symbol: "TRX", nameFa: "ترون", price: "۴,۱۵۰", change: -0.92, signal: "NEUTRAL", confidence: 52 },
        { symbol: "NEAR", nameFa: "نیِر", price: "۱۸۵,۰۰۰", change: 2.34, signal: "BUY", confidence: 73 },
        { symbol: "PEPE", nameFa: "پپه", price: "۰.۰۰۰۱۲", change: -4.56, signal: "SELL", confidence: 48 },
        { symbol: "SHIB", nameFa: "شیبا", price: "۰.۰۰۰۰۲۷", change: 1.23, signal: "NEUTRAL", confidence: 55 },
        { symbol: "USDT", nameFa: "تتر", price: "۶۰,۲۰۰", change: 0.01, signal: "NEUTRAL", confidence: 95 },
        { symbol: "GOLD", nameFa: "طلا", price: "۳,۴۵۰,۰۰۰", change: 0.45, signal: "NEUTRAL", confidence: 88 }
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
                <div class="flex justify-between items-center mt-3">
                    <div>
                        <div class="font-bold \( {signalClass}"> \){signalText}</div>
                    </div>
                    <div class="text-right">
                        <div class="text-[#00ff9f] font-bold text-xl">${m.confidence}<span class="text-sm">%</span></div>
                    </div>
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

window.onload = loadMarkets;