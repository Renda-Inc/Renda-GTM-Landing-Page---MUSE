/* ─── Full article body content keyed by slug ─── */

export interface ArticleContent {
  body: string; // HTML string rendered via dangerouslySetInnerHTML
}

const articleContent: Record<string, ArticleContent> = {
  "why-ai-native-banking": {
    body: `
<p>The financial industry is approaching an inflection point. Legacy infrastructure wasn't built for intelligence — and retrofitting AI onto outdated systems won't be enough.</p>

<h2>The Legacy Problem</h2>
<p>For decades, banks have operated on monolithic core systems designed in an era before smartphones, before cloud computing, and long before modern AI. These systems process transactions, but they don't understand them. They store data, but they can't learn from it.</p>
<p>The result? A financial experience that feels frozen in time. Notifications that tell you what happened, never what's coming. Budgets that require manual entry. Savings that sit idle without strategy.</p>

<h2>Why Retrofitting Fails</h2>
<p>Many incumbents have tried bolting AI onto existing infrastructure. The results are predictable: chatbots that can't actually do anything, "insights" that repeat what you already know, and recommendation engines trained on product sales rather than customer outcomes.</p>
<p>True intelligence requires being built into the foundation — not layered on top. It requires real-time data pipelines, contextual understanding of financial behaviour, and the ability to act on insights autonomously.</p>

<h2>What AI-Native Means</h2>
<p>An AI-native bank doesn't add intelligence as a feature. Intelligence <em>is</em> the product. Every transaction is analysed in real-time. Every notification is contextual. Every recommendation is personalised to your actual financial patterns — not demographic averages.</p>
<p>This is what we're building at Renda. Alfie, our financial AI, isn't a chatbot bolted onto a banking app. It's the intelligence layer that powers every interaction, every insight, and every decision the platform helps you make.</p>

<h2>The Inevitable Shift</h2>
<p>We believe that within a decade, every bank will claim to be "AI-powered." But there's a fundamental difference between a bank that uses AI and a bank that was built around it. The former optimises existing processes. The latter reimagines what banking can be.</p>
<p>The shift to AI-native banking isn't a question of if — it's a question of when. And the institutions that start from intelligence will define the next era of financial services.</p>
    `,
  },
  "introducing-smartspend": {
    body: `
<p>Today we're unveiling SmartSpend — a new kind of account that doesn't just store your money, but actively helps you understand and manage it.</p>

<h2>Beyond the Balance</h2>
<p>Traditional bank accounts show you a number. SmartSpend shows you a story. Where your money went, why it matters, and what you might want to do differently next month.</p>
<p>Powered by Alfie's real-time transaction analysis, SmartSpend categorises every purchase instantly, identifies patterns you might miss, and surfaces actionable insights — not generic tips.</p>

<h2>How It Works</h2>
<p>Every transaction that flows through your SmartSpend account is analysed in real-time. Alfie considers the merchant, the amount, the time of day, your historical patterns, and dozens of other signals to build a living picture of your financial life.</p>
<p>The result is a dynamic spending map that updates continuously. You'll see your spending organised not just by category, but by context: essentials vs. discretionary, recurring vs. one-time, expected vs. unusual.</p>

<h2>Intelligent Alerts</h2>
<p>SmartSpend doesn't bombard you with notifications for every coffee purchase. Instead, Alfie learns what matters to you and surfaces only the insights that move your financial life forward.</p>
<p>A subscription price increase. An unusual charge from a merchant you rarely visit. A spending pattern that's trending higher than your norm. These are the signals that matter — and SmartSpend delivers them at the right moment.</p>

<h2>Available Now</h2>
<p>SmartSpend is rolling out to all Renda early access members starting today. If you're on the waitlist, check your app for an invitation to upgrade your account.</p>
    `,
  },
  "signal-over-noise-banking": {
    body: `
<p>Most banking apps overwhelm users with alerts that don't matter. Every transaction triggers a push notification. Every month-end brings a generic spending summary. The signal gets lost in the noise.</p>

<h2>The Notification Problem</h2>
<p>The average banking app sends dozens of notifications per week. Transaction confirmations, balance updates, promotional offers, security alerts — all treated with equal urgency. Users respond by doing the rational thing: they turn notifications off entirely.</p>
<p>This creates a dangerous gap. When everything is urgent, nothing is. And the one notification that actually matters — the fraudulent charge, the overdraft warning, the subscription you forgot to cancel — gets lost in the flood.</p>

<h2>Signal-First Design</h2>
<p>At Renda, we took a different approach. We asked: what if a financial notification only appeared when it genuinely deserved your attention?</p>
<p>Alfie analyses every transaction and every pattern, but it doesn't surface everything it finds. Instead, it applies a relevance filter — considering your habits, your goals, your financial context — and only interrupts you when the insight is actionable and timely.</p>

<h2>Context Over Content</h2>
<p>The difference isn't just about fewer notifications. It's about smarter ones. When Alfie does notify you, it includes context: why this matters, what changed, and what you might want to do about it.</p>
<p>"Your electricity bill increased 23% this month compared to your 6-month average" is infinitely more useful than "Payment of $142.50 to Hydro One confirmed."</p>

<h2>The Result</h2>
<p>Early access users report engaging with 89% of Alfie's notifications — compared to an industry average of under 15% for traditional banking alerts. When every notification matters, people actually pay attention.</p>
    `,
  },
  "responsible-ai-finance": {
    body: `
<p>Intelligence without responsibility is reckless. Our approach to AI in banking starts with transparency, explainability, and a deep respect for the weight of financial decisions.</p>

<h2>The Stakes Are Higher</h2>
<p>AI in banking isn't like AI in content recommendation or image generation. Financial decisions have real, lasting consequences. A misclassified transaction, a poorly timed alert, or a flawed savings recommendation can erode trust — and impact someone's financial wellbeing.</p>
<p>That's why we hold Alfie to a higher standard than "interesting" or "engaging." Every insight must be accurate, every recommendation must be sound, and every automated action must be transparent.</p>

<h2>Explainability First</h2>
<p>When Alfie makes a recommendation, it always shows its reasoning. Not in technical terms, but in plain language that helps you understand why this suggestion makes sense for your specific situation.</p>
<p>"Based on your spending patterns over the last 3 months, you typically have $340 available after essentials by mid-month" is transparent. "We recommend saving more" is not.</p>

<h2>Human Override, Always</h2>
<p>Alfie suggests. You decide. Every automated action can be reviewed, modified, or reversed. Every insight can be dismissed. The AI works for you — not the other way around.</p>

<h2>Continuous Audit</h2>
<p>We continuously audit Alfie's recommendations for bias, accuracy, and fairness. Our models are tested across diverse financial profiles to ensure they serve all users equitably — not just the median case.</p>
    `,
  },
  "renda-seed-announcement": {
    body: `
<p>We're excited to announce our seed funding round. This investment enables us to accelerate the development of Alfie and bring intelligent banking to Canadians faster.</p>

<h2>Why Now</h2>
<p>The convergence of open banking regulation, advances in AI, and growing consumer demand for better financial tools has created a unique window of opportunity. Canadians deserve a bank that's built for how they actually live — not how banking has always worked.</p>

<h2>What We're Building</h2>
<p>Renda is an AI-native bank powered by Alfie, a financial intelligence platform that helps people understand, manage, and move their money with clarity. We're not adding AI to banking — we're rebuilding banking around intelligence.</p>

<h2>Where the Funding Goes</h2>
<p>This round will fuel three priorities: expanding our engineering team, accelerating Alfie's intelligence capabilities, and preparing for our public launch in Canada. We're hiring across AI/ML, backend engineering, product design, and compliance.</p>

<h2>What's Next</h2>
<p>Our early access program is live, and the response has been extraordinary. We're onboarding users carefully to ensure the experience meets our standards. If you're interested in being part of the next wave, join the waitlist at rfrenda.com.</p>
    `,
  },
  "future-of-savings": {
    body: `
<p>Static savings rules ignore the reality of how people live. "Save 20% of every paycheque" sounds simple — until rent increases, an unexpected expense hits, or your income fluctuates.</p>

<h2>The Problem with Rules</h2>
<p>Traditional savings advice is built on averages and assumptions. Fixed percentages, round numbers, arbitrary timelines. These rules don't account for the variability of real life — and when they inevitably break, people feel like they've failed.</p>
<p>The truth is, the rules failed them. A savings strategy that can't adapt to reality isn't a strategy at all.</p>

<h2>Adaptive Savings</h2>
<p>Alfie approaches savings differently. Instead of applying a fixed rule, it analyses your actual cash flow in real-time — income timing, spending patterns, upcoming bills, seasonal variations — and calculates what you can genuinely afford to save right now.</p>
<p>Some weeks, that might be $50. Others, it might be $200. And sometimes, it might be nothing — because protecting your essentials is more important than hitting an arbitrary target.</p>

<h2>Goals That Breathe</h2>
<p>With Alfie, savings goals aren't rigid deadlines. They're living targets that adjust based on your actual financial trajectory. If you're ahead of pace, Alfie might suggest accelerating. If you hit a rough patch, it recalibrates without judgment.</p>

<h2>The Outcome</h2>
<p>Early access users using Alfie's adaptive savings have saved an average of 31% more than they did with traditional fixed-amount transfers — while reporting less financial stress. That's the power of intelligence applied to intention.</p>
    `,
  },
  "open-banking-canada": {
    body: `
<p>Canada's open banking framework is evolving. After years of consultation, the regulatory landscape is finally shifting toward consumer data portability and competitive innovation.</p>

<h2>What Open Banking Means</h2>
<p>At its core, open banking gives consumers control over their financial data. Instead of your information being locked inside one institution, you can securely share it with other providers — enabling better products, better rates, and better experiences.</p>

<h2>The Canadian Context</h2>
<p>Canada has been slower than the UK, EU, and Australia to implement open banking regulation. But the Consumer-Driven Banking framework now underway signals a fundamental shift. When fully implemented, Canadians will be able to connect their financial accounts across institutions seamlessly.</p>

<h2>What This Enables</h2>
<p>For AI-native platforms like Renda, open banking is transformative. With a complete picture of someone's financial life — not just the transactions in one account — Alfie can provide dramatically more accurate insights, better recommendations, and truly holistic financial intelligence.</p>
<p>Imagine Alfie understanding not just your Renda spending, but your mortgage payments, your investment returns, your credit card patterns — all synthesised into one intelligent view of your financial health.</p>

<h2>Privacy and Control</h2>
<p>Open banking doesn't mean open access. Every data connection requires explicit consumer consent, can be revoked at any time, and is governed by strict security standards. You choose what to share, with whom, and for how long.</p>
    `,
  },
  "building-alfie-platform": {
    body: `
<p>A look at the engineering decisions behind Alfie — from real-time transaction analysis to conversational financial insights.</p>

<h2>Real-Time by Default</h2>
<p>Alfie processes transactions as they happen — not in nightly batches. This requires an event-driven architecture where every transaction triggers an analysis pipeline within milliseconds. The result: insights that are current, not stale.</p>

<h2>The Intelligence Stack</h2>
<p>Alfie's intelligence isn't a single model. It's a composition of specialised systems: transaction classification, pattern recognition, anomaly detection, cash flow forecasting, and natural language generation. Each component is optimised for its specific task, and they work together to create coherent, contextual insights.</p>

<h2>Contextual Understanding</h2>
<p>The hardest problem in financial AI isn't classification — it's context. A $50 charge at a restaurant means something different on a Tuesday lunch versus a Saturday dinner. A $200 transfer means something different when your rent is due tomorrow versus when you just got paid.</p>
<p>Alfie builds a contextual model for each user that evolves over time. It understands not just what happened, but why it might matter to you specifically.</p>

<h2>Conversational Interface</h2>
<p>When you ask Alfie a question — "How much did I spend on food this month?" or "Can I afford a weekend trip?" — it doesn't just query a database. It synthesises information across your accounts, considers your upcoming obligations, and responds with nuanced, personalised guidance.</p>

<h2>What's Next</h2>
<p>We're investing heavily in predictive capabilities: helping Alfie anticipate financial needs before you express them. Proactive intelligence — knowing you'll need to move money before you realise it yourself — is the next frontier.</p>
    `,
  },
};

export default articleContent;
