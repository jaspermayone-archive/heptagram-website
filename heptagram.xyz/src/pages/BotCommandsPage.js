import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/style-commands.css";

function BotCommandsPage() {
  let button1 = (
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="command">!ban &#60;@&#62;</td>
          <td>Ban User</td>
        </tr>
        <tr>
          <td className="command">!clear</td>
          <td>Clear messages</td>
        </tr>
        <tr>
          <td className="command">!kick &#60;@&#62;</td>
          <td>Kick User</td>
        </tr>
        <tr>
          <td className="command">!mute &#60;@&#62;</td>
          <td>Mute User</td>
        </tr>
        <tr>
          <td className="command">!unmute &#60;@&#62;</td>
          <td>Unmute User</td>
        </tr>
        <tr>
          <td className="command">!wipe</td>
          <td>Clear with options</td>
        </tr>
      </tbody>
    </table>
  );
  let [count, setCount] = useState([button1]);
  let [cl1, setCl1] = useState("tabs__button tabs__button--active");
  let [cl2, setCl2] = useState("tabs__button");
  let [cl3, setCl3] = useState("tabs__button");
  let [cl4, setCl4] = useState("tabs__button");
  let [cl5, setCl5] = useState("tabs__button");

  const button2 = (
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="command">!setup</td>
          <td>Configures the bot in the server</td>
        </tr>
        <tr>
          <td className="command">!language</td>
          <td>Sets/Displays the server language</td>
        </tr>
        <tr>
          <td className="command">!uptime</td>
          <td>Gets the server uptime</td>
        </tr>
        <tr>
          <td className="command">!announce</td>
          <td>Make an announcement</td>
        </tr>
        <tr>
          <td className="command">!invite</td>
          <td>Sends a link to invite the bot</td>
        </tr>
        <tr>
          <td className="command">!prefix</td>
          <td>Sets/Displays the prefix</td>
        </tr>
        <tr>
          <td className="command">!command</td>
          <td>Enables/Disables the command you want</td>
        </tr>
        <tr>
          <td className="command">!channelonly</td>
          <td>Makes a command work only in some channels</td>
        </tr>
        <tr>
          <td className="command">!requiredrole</td>
          <td>Specifies what role each command requires</td>
        </tr>
      </tbody>
    </table>
  );
  const button3 = (
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="command">!ping</td>
          <td>Returns the Bot Ping</td>
        </tr>
        <tr>
          <td className="command">!api</td>
          <td>Gives Heptagram API information</td>
        </tr>
        <tr>
          <td className="command">!bots</td>
          <td>Shows Heptagram Bots informations</td>
        </tr>
        <tr>
          <td className="command">!contributors</td>
          <td>Shows the Heptagram Contributors</td>
        </tr>
        <tr>
          <td className="command">!info</td>
          <td>Shows Heptagram's information</td>
        </tr>
        <tr>
          <td className="command">!repo</td>
          <td>Sends the Heptagram Repository link</td>
        </tr>
        <tr>
          <td className="command">!support</td>
          <td>Sends the bot Support Server link</td>
        </tr>
        <tr>
          <td className="command">!server</td>
          <td>Gives your server informations</td>
        </tr>
        <tr>
          <td className="command">!user</td>
          <td>Shows a user information</td>
        </tr>
        <tr>
          <td className="command">!avatar</td>
          <td>Gets user avatar</td>
        </tr>
      </tbody>
    </table>
  );

  const button4 = (
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="command">!play</td>
          <td>Play the given song</td>
        </tr>
        <tr>
          <td className="command">!skip</td>
          <td>Skip the playing song</td>
        </tr>
        <tr>
          <td className="command">!stop</td>
          <td>Stop the current song</td>
        </tr>
      </tbody>
    </table>
  );
  const button5 = (
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="command">!cat</td>
          <td>Sends a random cat picture</td>
        </tr>
        <tr>
          <td className="command">!clyde</td>
          <td>Get a custom clyde message</td>
        </tr>
        <tr>
          <td className="command">!coinflip</td>
          <td>Flips a coin for heads or tails</td>
        </tr>
        <tr>
          <td className="command">!dadjoke</td>
          <td>Sends a random dad joke</td>
        </tr>
        <tr>
          <td className="command">!diceroll</td>
          <td>Rolls a dice for a number 1-6</td>
        </tr>
        <tr>
          <td className="command">!encouragement</td>
          <td>Says a random form of encouragement</td>
        </tr>
        <tr>
          <td className="command">!hack &#60;@&#62;</td>
          <td>Just a fun command</td>
        </tr>
        <tr>
          <td className="command">!hug &#60;@&#62;</td>
          <td>Hug someone</td>
        </tr>
        <tr>
          <td className="command">!joke</td>
          <td>Displays a joke</td>
        </tr>
        <tr>
          <td className="command">!math</td>
          <td>Calculates, solves an equation</td>
        </tr>
        <tr>
          <td className="command">!moviequote</td>
          <td>Says a quote from a movie provided, or a random movie</td>
        </tr>
        <tr>
          <td className="command">!slap</td>
          <td>Slaps a user</td>
        </tr>
        <tr>
          <td className="command">!urban</td>
          <td>Gets an urban dictionary definition</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className="cmd">
      <Header />
      <div className="body">
        <main>
          <h1>Heptagram Commands</h1>

          <div className="tabs">
            <div className="tabs__sidebar">
              <button
                onClick={() => {
                  setCl2((cl2 = "tabs__button"));
                  setCl3((cl3 = "tabs__button"));
                  setCl4((cl4 = "tabs__button"));
                  setCl5((cl5 = "tabs__button"));
                  setCount((count = button1));
                  setCl1((cl1 = "tabs__button tabs__button--active"));
                }}
                type="submit"
                className={cl1}
              >
                Moderation
              </button>

              <button
                type="submit"
                className={cl2}
                onClick={() => {
                  setCl1((cl1 = "tabs__button"));
                  setCl3((cl3 = "tabs__button"));
                  setCl4((cl4 = "tabs__button"));
                  setCl5((cl5 = "tabs__button"));
                  setCount((count = button2));
                  setCl2((cl2 = "tabs__button tabs__button--active"));
                }}
              >
                Bot Settings & Automation
              </button>

              <button
                type="submit"
                className={cl3}
                onClick={() => {
                  setCl2((cl2 = "tabs__button"));
                  setCl1((cl1 = "tabs__button"));
                  setCl4((cl4 = "tabs__button"));
                  setCl5((cl5 = "tabs__button"));
                  setCount((count = button3));
                  setCl3((cl3 = "tabs__button tabs__button--active"));
                }}
              >
                Informational
              </button>

              <button
                type="submit"
                className={cl4}
                onClick={() => {
                  setCl2((cl2 = "tabs__button"));
                  setCl3((cl3 = "tabs__button"));
                  setCl1((cl1 = "tabs__button"));
                  setCl5((cl5 = "tabs__button"));
                  setCount((count = button4));
                  setCl4((cl4 = "tabs__button tabs__button--active"));
                }}
              >
                Music
              </button>

              <button
                type="submit"
                className={cl5}
                onClick={() => {
                  setCl2((cl2 = "tabs__button"));
                  setCl3((cl3 = "tabs__button"));
                  setCl1((cl1 = "tabs__button"));
                  setCl4((cl4 = "tabs__button"));
                  setCount((count = button5));
                  setCl5((cl5 = "tabs__button tabs__button--active"));
                }}
              >
                Fun
              </button>
            </div>

            <div className="tabs__content tabs__content--active" data-tab="1">
              {count}
            </div>
          </div>

          <p className="other-command">
            <i
              className="fas fa-lightbulb fa-2x"
              style={{ marginBottom: "1.5rem" }}
            ></i>
            <br />
            Use <b className="command">!help</b> to see the Heptagram menu on
            your server and read more about the commands
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default BotCommandsPage;
