# Trading Market Dashboard

A trading dashboard built with Next.js for:
- share market overview
- forex market data
- crypto market snapshots
- price charts
- strategy backtesting panel
- news center with economic calendar and Trump watch

## Features

- Multi-market dashboard for Indian equities, forex, and crypto
- Candlestick-style price chart mockup
- Strategy backtesting panel with sample outcomes
- News center and economic calendar
- Responsive dashboard layout for desktop and mobile

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Notes

This initial version uses demo market and news data so the app works immediately without paid APIs. You can later connect real providers like:
- NSE/BSE or market data feeds for Indian equities
- Alpha Vantage / Twelve Data / Polygon for forex and equities
- CoinGecko or Binance for crypto data
- Forex economic calendars and custom news aggregators

## Planned upgrades

- real API integrations
- authentication and saved watchlists
- strategy builder with custom rules
- database-backed user settings and backtest history
- chart indicators and trade execution simulation
