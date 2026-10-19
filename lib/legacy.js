export const legacy = {
  "/meet-dEdge/": {
    description:
      "Meet dEdge: a Solana wallet research product with a free web app and deeper analysis, discovery and tracking in Telegram.",
    sections: [
      [
        "Meet the research side of your workflow.",
        "A public wallet address shows activity, but understanding that activity takes context. dEdge turns available on-chain trading history into a report you can use to ask more useful questions about a wallet.",
      ],
      [
        "One product, two ways to explore.",
        "The web app is a quick starting point: paste an address or browse the public leaderboard. Telegram is the deeper workspace for analyzing wallets, finding research leads and tracking activity over time.",
      ],
      [
        "Built around public data.",
        "You can read a public web report without an account, wallet connection or signature. You never need to provide a seed phrase or private key to research a wallet.",
      ],
    ],
  },
  "/degen-Edge-Tool/": {
    description:
      "Explore the dEdge research toolkit: wallet summaries, discovery, tracking, educational guides and developer access.",
    sections: [
      [
        "Build a repeatable research routine.",
        "Start with a question about a wallet rather than a headline return. Is the result spread across many trades? Does one large win dominate? How recent is the activity? dEdge brings these questions into a single research workflow.",
      ],
      [
        "Discover, analyze, then monitor.",
        "Browse the public wallet leaderboard or trending tokens for a starting point. Open a wallet report to inspect historical trading. Use Telegram when you need deeper discovery and tracking capabilities.",
      ],
      [
        "Learn the metrics. Connect your tools.",
        "The Academy explains wallet research and Solana transaction mechanics. Developers can use the maintained API documentation for access details, rate limits and integration options. Execution tools remain separate from dEdge research.",
      ],
    ],
  },
  "/solana-wallet-analyzer/": {
    description:
      "Analyze a public Solana wallet: understand closed-trade win rate, net SOL, return distributions and historical analysis windows.",
    sections: [
      [
        "What a Solana wallet analyzer helps you see.",
        "An explorer lets you inspect individual transactions. A wallet report groups available trading activity into a summary: closed trades, token count, win rate, net SOL and per-trade return distribution.",
      ],
      [
        "Read the numbers together.",
        "Win rate describes how often closed trades won; it does not describe the size of those wins. Net SOL and the return distribution add context. A few large outcomes can dominate an average, especially when there are few trades.",
      ],
      [
        "Know what the report cannot answer.",
        "A historical report cannot predict the next trade. Unsold holdings, missing history and different analysis windows can change how results should be interpreted. Always check the report timestamp and coverage.",
      ],
    ],
  },
  "/copytrading/": {
    description:
      "Learn how wallet research fits into copy trading, and why third-party execution, timing, fees and slippage change the result.",
    sections: [
      [
        "How copy trading works.",
        "A third-party execution tool watches a target wallet and attempts to replicate selected trades. Its settings determine sizing, allowed tokens, exits and spending limits. The resulting trades belong to your account and may perform differently from the target wallet.",
      ],
      [
        "Evaluate a wallet before following it.",
        "Review the sample size, return distribution, holding times and trading costs. A high historical win rate is not enough. Fast sniping or custom-program strategies can be difficult to reproduce with another execution tool.",
      ],
      [
        "Monitor the differences.",
        "Execution delay, liquidity, slippage and transaction fees affect your results. Compare actual fills and costs with the original wallet instead of assuming the reported return will transfer to your account. The Academy includes separate guides for third-party execution tools.",
      ],
    ],
  },
};
