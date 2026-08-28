import React, { useState } from "react";

type Page =
  | "home"
  | "discover"
  | "create"
  | "messages"
  | "notifications"
  | "profile";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Gloria",
      caption: "Welcome to my first Vlofie post! ✨",
      likes: 24,
      emoji: "🌸",
    },
    {
      id: 2,
      user: "CreativeGirl",
      caption: "Having the best day ever! 💖",
      likes: 56,
      emoji: "🦋",
    },
  ]);

  const [caption, setCaption] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Hey! 👋",
    "Welcome to Vlofie!",
  ]);

  const addPost = () => {
    if (caption.trim() === "") return;

    setPosts([
      {
        id: Date.now(),
        user: "Gloria",
        caption: caption,
        likes: 0,
        emoji: "✨",
      },
      ...posts,
    ]);

    setCaption("");
    setPage("home");
  };

  const likePost = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <h1>Vlofie ✨</h1>

        <button
          className="profile-button"
          onClick={() => setPage("profile")}
        >
          👤
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="content">

        {page === "home" && (
          <div>
            <h2>For You 🔥</h2>

            {posts.map((post) => (
              <div className="post" key={post.id}>

                <div className="post-image">
                  {post.emoji}
                </div>

                <h3>@{post.user}</h3>

                <p>{post.caption}</p>

                <button
                  className="like-button"
                  onClick={() => likePost(post.id)}
                >
                  ❤️ {post.likes}
                </button>

              </div>
            ))}
          </div>
        )}

        {page === "discover" && (
          <div>
            <h2>Discover 🔍</h2>

            <input
              className="search"
              placeholder="Search videos, people..."
            />

            <div className="discover-grid">
              <div>🌸</div>
              <div>🎵</div>
              <div>✨</div>
              <div>💖</div>
              <div>🦋</div>
              <div>🔥</div>
            </div>
          </div>
        )}

        {page === "create" && (
          <div className="create-page">

            <h2>Create a Post ✨</h2>

            <div className="upload-box">
              📸
              <p>Upload a photo or video</p>
            </div>

            <textarea
              placeholder="What's happening?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <button
              className="publish-button"
              onClick={addPost}
            >
              Publish 🚀
            </button>

          </div>
        )}

        {page === "messages" && (
          <div className="messages-page">

            <h2>Messages 💬</h2>

            <div className="message-box">
              {messages.map((message, index) => (
                <div
                  className="message"
                  key={index}
                >
                  {message}
                </div>
              ))}
            </div>

            <div className="send-area">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Write a message..."
              />

              <button onClick={sendMessage}>
                Send
              </button>
            </div>

          </div>
        )}

        {page === "notifications" && (
          <div>
            <h2>Notifications 🔔</h2>

            <div className="notification">
              ❤️ CreativeGirl liked your post!
            </div>

            <div className="notification">
              👤 Someone started following you!
            </div>

            <div className="notification">
              💬 You have a new message!
            </div>
          </div>
        )}

        {page === "profile" && (
          <div className="profile-page">

            <div className="profile-picture">
              👩🏾
            </div>

            <h2>Gloria ✨</h2>

            <p>@gloria</p>

            <p className="bio">
              Welcome to my Vlofie profile 💖✨
            </p>

            <div className="stats">

              <div>
                <strong>{posts.length}</strong>
                <p>Posts</p>
              </div>

              <div>
                <strong>120</strong>
                <p>Followers</p>
              </div>

              <div>
                <strong>80</strong>
                <p>Following</p>
              </div>

            </div>

            <h3>My Posts ✨</h3>

          </div>
        )}

      </main>

      {/* BOTTOM NAVIGATION */}
      <nav className="bottom-nav">

        <button onClick={() => setPage("home")}>
          🏠
          <span>Home</span>
        </button>

        <button onClick={() => setPage("discover")}>
          🔍
          <span>Discover</span>
        </button>

        <button
          className="create-button"
          onClick={() => setPage("create")}
        >
          ➕
        </button>

        <button onClick={() => setPage("messages")}>
          💬
          <span>Messages</span>
        </button>

        <button onClick={() => setPage("notifications")}>
          🔔
          <span>Alerts</span>
        </button>

      </nav>

    </div>
  );
}

export default App;
