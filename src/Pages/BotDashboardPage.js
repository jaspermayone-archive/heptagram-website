import Card from "../Components/Card";

import "../Styles/styles.css";
import { Link } from "react-router-dom";

import {
  ImStatsBars,
  ImHammer2,
  ImClock,
  ImUser,
  ImRadioUnchecked,
} from "react-icons/im";

function BotDashboardPage() {
  return (
    <div className="dashboard-wrapper">
      <nav className="dashboard-sidebar">
        <Link to="/">
          <img
            className="dashboard-user"
            alt="User avatar"
            src={`https://cdn.discordapp.com/embed/avatars/0.png?size=64`}
          />
        </Link>
        <hr className="divider" />
        <ul className="dashboard-list">
          <li className="dashboard-list-item">
            <img
              alt={` Icon`}
              src={`https://cdn.discordapp.com/embed/avatars/0.png?size=64`}
            />
          </li>
        </ul>
      </nav>
      <main className="dashboard">
        <nav className="dashboard-header">
          <h1>Example Name</h1>
        </nav>
        <main className="dashboard-main">
          <Card title="Statistics" icon={<ImStatsBars />}>
            <p>dodsiajdoas</p>
          </Card>
          <Card title="Bans" icon={<ImHammer2 />}>
            <p>dodsiajdoas</p>
          </Card>
          <Card title="Timeouts" icon={<ImClock />}>
            <p>dodsiajdoas</p>
          </Card>
          <Card title="Roles" icon={<ImUser />}>
            <p>dodsiajdoas</p>
          </Card>
          <Card title="Misc" icon={<ImRadioUnchecked />}>
            <p>dodsiajdoas</p>
          </Card>
        </main>
      </main>
    </div>
  );
}

export default BotDashboardPage;
