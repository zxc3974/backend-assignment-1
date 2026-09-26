import request, { Response } from "supertest";
import app from "../src/app";
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";


describe("Portfolio Tests", () => {

    describe("GET /healthcheck", () => {
        it("should return a valid health check response", async () => {
            // Act
            const response: Response = await request(app).get("http://127.0.0.1:3000/api/v1/health");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                status: "OK",
                uptime: expect.any(Number),
                timestamp: expect.any(String),
                version: "1.0.0"
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=16000", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 16000,
                "profitOrLoss": 6000,
                "percentageChange": 60,
                "performanceSummary": "Excellent performance! Your investments are doing great."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=13000", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 13000,
                "profitOrLoss": 3000,
                "percentageChange": 30,
                "performanceSummary": "Solid gain. Keep monitoring your investments."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=12999.9", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 12999.9,
                "profitOrLoss": 2999.9,
                "percentageChange": 29.999,
                "performanceSummary": "Solid gain. Keep monitoring your investments."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=11000", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 11000,
                "profitOrLoss": 1000,
                "percentageChange": 10,
                "performanceSummary": "Solid gain. Keep monitoring your investments."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=10999.9", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 10999.9,
                "profitOrLoss": 999.9,
                "percentageChange": 9.999,
                "performanceSummary": "Modest gain. Your portfolio is growing slowly."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=10000.1", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 10000.1,
                "profitOrLoss": 0.100000000000364,
                "percentageChange": 0.00100000000000364,
                "performanceSummary": "Modest gain. Your portfolio is growing slowly."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=10000", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 10000,
                "profitOrLoss": 0,
                "percentageChange": 0,
                "performanceSummary": "No change. Your portfolio is holding steady."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=9999.9", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 9999.9,
                "profitOrLoss": -0.100000000000364,
                "percentageChange": -0.00100000000000364,
                "performanceSummary": "Minor loss. Stay calm and review your options."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=9000", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 9000,
                "profitOrLoss": -1000,
                "percentageChange": -10,
                "performanceSummary": "Minor loss. Stay calm and review your options."
            });
        });
    });

    describe("GET http://127.0.0.1:3000/api/v1/portfolio/performance?initialInvestment=10000&currentValue=8999.9", () => {
        it("should return a placeholder response", async () => {
            // Act
            const response: Response = await request(app).get("/something");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                "initialInvestment": 10000,
                "currentValue": 8999.9,
                "profitOrLoss": -1000.1,
                "percentageChange": -10.001,
                "performanceSummary": "Significant loss. Review your portfolio strategy."
            });
        });
    });

});
