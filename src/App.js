import React, { Children } from "react";
import styles from "./App.module.css";
import Comment from "./Comment.module.css";
import module from "./Rate.module.css";

import { ReactComponent as IconStar } from "./images/icon-star.svg";
import PictureColton from "./images/image-colton.jpg";
import PictureAnne from "./images/image-anne.jpg";
import PictureIrene from "./images/image-irene.jpg";

const clsx = (...classes) => classes.join(" ");

function Title({ value }) {
  return <h1 className={styles.title}>{value}</h1>;
}

function Description({ children }) {
  return <p className={styles.description}>{children}</p>;
}

function Rate({ content }) {
  return (
    <div className={styles.rate}>
      <ul>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
      </ul>

      <strong>{content}</strong>
    </div>
  );
}

function Comments({ name, isVerified, photo, children }) {
  return (
    <div className={styles.comment}>
      <header>
        <img className={styles.avatar} src={photo} alt="someone's avatar" />
        <div className={styles.user}>
          <strong>{name}</strong>
          <span>{isVerified ? "Verified Buyer" : "Not Verified Yet"}</span>
        </div>
      </header>

      <p>{children}</p>
    </div>
  );
}

function App() {
  const rates = [
    {
      content: "Rate 5 Stars in Reviews",
    },
    {
      content: "Rate 5 Stars in Report Guru",
    },
    {
      content: "Rate 5 Stars in BestTech",
    },
  ];

  const comments = [
    {
      user: {
        photo: PictureColton,
        name: "Colton Smith",
        isVerified: true,
      },
      comment: "Lorem ipsum dolor sit amet",
    },
    {
      user: {
        photo: PictureAnne,
        name: "Anne",
        isVerified: true,
      },
      comment:
        "consectetur adipiscing elit. Nam eget blandit neque. Pellentesque mauris lacu",
    },
    {
      user: {
        photo: PictureIrene,
        name: "Irene",
        isVerified: true,
      },
      comment: "dictum tempus arcu. Vestibulum ante ipsum primis in faucibus",
    },
  ];
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title value="10,000+ of our users love our products." />
        <Description>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </Description>
      </header>
      <ul className="listRate">
        {rates.map((rate) => {
          return (
            <li key={rate.content}>
              <Rate content={rate.content} />
            </li>
          );
        })}
      </ul>

      <ul className="listComment">
        {comments.map((comment) => (
          <li>
            <Comments
              key={comment.user.name}
              name={comment.user.name}
              isVerified={comment.user.isVerified}
              photo={comment.user.photo}
            >
              {comment.comment}
            </Comments>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
