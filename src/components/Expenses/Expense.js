import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function Expense(props) {

    const data = props.data;


    function getElement(expense) {

        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    }

    return (
        <div className="expenses">
        {data.map(getElement)}
        </div>
    );
}

export default Expense;