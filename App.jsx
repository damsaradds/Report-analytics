import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(20000); // Example revenue
  const [totalClicks, setTotalClicks] = useState(0);

  // Sample data
  const sampleCourses = [
    { _id: '1', name: 'Introduction to Programming', clicks: 50, views: 200, earnings: 5000 },
    { _id: '2', name: 'Data Structures and Algorithms', clicks: 30, views: 150, earnings: 3000 },
    { _id: '3', name: 'Web Development Basics', clicks: 70, views: 300, earnings: 7000 },
    { _id: '4', name: 'Advanced JavaScript', clicks: 25, views: 120, earnings: 2500 },
    { _id: '5', name: 'Database Management', clicks: 40, views: 180, earnings: 4000 },
    { _id: '6', name: 'Machine Learning Fundamentals', clicks: 60, views: 250, earnings: 6000 },
    { _id: '7', name: 'UI/UX Design Principles', clicks: 20, views: 90, earnings: 2000 },
    { _id: '8', name: 'Mobile App Development with React Native', clicks: 45, views: 220, earnings: 4500 },
  ];

  useEffect(() => {
    setCourses(sampleCourses);
    const clicks = sampleCourses.reduce((acc, course) => acc + course.clicks, 0);
    setTotalClicks(clicks);
  }, []);

  return (
    <div className="App">
      <div className="main-grid">
        <div className="left-panel">
          <div className="analytics-container">
            <h3>Website Analytics</h3>
            <p>Your all-in-one web analytics dashboard for data-driven decision-making.</p>
            <div className="line-chart">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sampleCourses}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="earnings" stroke="#4caf50" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="course-content-container">
            <h3>Course Content - Clicks</h3>
            <div className="bar-chart">
              {courses.map((course) => (
                <div className="bar-container" key={course._id}>
                  <div className="bar" style={{ height: `${course.clicks * 2}px` }}>
                    <span className="bar-value">{course.clicks}</span>
                  </div>
                  <span className="bar-label">{course.name}</span>
                </div>
              ))}
            </div>
            <div className="date-selector">
              <button>Today</button>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="revenue-container">
            <h3>Total Revenue</h3>
            <h1>LKR {totalRevenue}</h1>
          </div>

          <div className="content-container">
            <div className="content-header">
              <span>Content Published</span>
              <select>
                <option>Select content</option>
              </select>
            </div>
            <div className="pie-chart">
              <div className="circle">
                <span>{totalClicks}</span>
                <span>Total Clicks</span>
              </div>
            </div>
          </div>

          <div className="summary-container">
            <h3>Summary of Videos</h3>
            <table>
              <thead>
                <tr>
                  <th>Video Name</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course._id}>
                    <td>{course.name}</td>
                    <td>{course.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
