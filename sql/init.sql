DROP TABLE IF EXISTS users;
CREATE TABLE twitter_clone.users (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) DEFAULT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS tweets;
CREATE TABLE twitter_clone.tweets (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `text` varchar(255) NOT NUll,
  `user_id` int NOT NUll,
  `created_at` datetime NOT NUll DEFAULT CURRENT_TIMESTAMP,
  `delete_flag` bit NOT NULL DEFAULT 0,
  `deleted_at` datetime DEFAULT NUll,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO users
    (
      id,
      name,
      display_name,
      email,
      created_at,
      updated_at
    )
    VALUES
    (
      null,
      'Zawa',
      'Zawa',
      'okazawa_shinya@liginc.co.jp',
      CURRENT_TIMESTAMP(),
      CURRENT_TIMESTAMP()
    );

INSERT INTO tweets
    (
      id,
      text,
      user_id,
      created_at,
      delete_flag,
      deleted_at
    )
    VALUES
    (
      null,
      'tweetだよ',
      1,
      CURRENT_TIMESTAMP(),
      0,
      null
    );