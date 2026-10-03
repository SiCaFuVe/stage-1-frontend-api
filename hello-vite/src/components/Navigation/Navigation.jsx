import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/savedArticles">SavedArticles</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
