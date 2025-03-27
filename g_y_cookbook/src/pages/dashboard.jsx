import List from '../components/List';
export default function Dashboard({recipes}) {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <List recipes={recipes} />
        </div>
    );
}