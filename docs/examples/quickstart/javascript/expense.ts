export class Expense {
    amount: number;
    description: String;
    submittedBy: String;

    constructor(amount: number, description: String, submittedBy: String) {
        this.amount = amount;
        this.description = description;
        this.submittedBy = submittedBy;
    }

    toString(): String {
        return `Expense(amount=${this.amount}, description="${this.description}", submittedBy=${this.submittedBy})`
    }
}

export const EXPENSES: { [id: number]: Expense } = {
    1: new Expense(500, "coffee", "alice@example.com"),
    2: new Expense(5000, "software", "alice@example.com"),
    3: new Expense(50000, "flight", "bhavik@example.com"),
}
