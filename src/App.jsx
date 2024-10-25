import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './Card';
import './App.css';

const App = () => {
  // Task list to render
  const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

  return (
    <div className="container">
      {/* Navbar Component */}
      <Navbar />

      {/* Main content */}
      <main style={{ padding: '1rem' }}>
        {/* Tasks Section */}
        <section id="tasks">
          <Card>
            <h2>Your Tasks</h2>
            <ItemList items={tasks} />
          </Card>
        </section>

        {/* About Section */}
        <section id="about">
          <Card>
            <h2>About</h2>
            <p>This task manager application helps you organize your tasks efficiently.</p>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Card>
            <h2>Contact</h2>
            <p>If you have any questions, please contact us at: contact@example.com</p>
          </Card>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
