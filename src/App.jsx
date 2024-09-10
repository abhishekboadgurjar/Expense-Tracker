import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./components/expenseData";
const App = () => {
  const [expenses, setExpenses] = useState(expenseData);
  return (
    <div>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable expenses={expenses} />
        </div>
     
      </main>
      <div className="footer">
          <p>Made with ❤️ by Abhishek Gurjar</p>
        </div>
    </div>
  );
};

export default App;
