interface PortfolioPerformance {
    initialInvestment: number,
    currentValue: number,
    profitOrLoss: number,
    percentageChange: number,
    performanceSummary: string,
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {

    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary: string;
    switch (true) {
        case percentageChange > 30:
            performanceSummary = "Excellent performance! Your investments are doing great.";
        break

        case percentageChange > 10:
            performanceSummary = "Solid gain. Keep monitoring your investments.";
        break

        case percentageChange > 0:
            performanceSummary = "Modest gain. Your portfolio is growing slowly.";
        break

        case percentageChange === 0:
            performanceSummary = "No change. Your portfolio is holding steady.";
        break

        case percentageChange < 0 && percentageChange > -10:
            performanceSummary = "Minor loss. Stay calm and review your options.";
        break

        case percentageChange <= -10:
            performanceSummary = "Significant loss. Review your portfolio strategy.";
        break

        default:
            performanceSummary = "NaN"
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}