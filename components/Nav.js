import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/counter">Counter</Link></li>
        <li><Link href="/form">Form</Link></li>
      </ul>

      <style jsx>{`
        nav {
          background-color:rgb(243, 0, 0);
          padding: 10px 0;
          text-align: center;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        li {
          margin: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
