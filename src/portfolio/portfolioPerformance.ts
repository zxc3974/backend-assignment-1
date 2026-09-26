export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number) {

    const profitOrLoss = currentValue - initialInvestment;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;
    if (percentageChange > 20) {
        performanceSummary = "Excellent performance! Your investments are doing great.";
    } else {
        performanceSummary = `The portfolio has performed poorly.`;
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}