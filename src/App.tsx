import React, { useState } from "react";

type Page = "home" | "discover" | "create" | "messages" | "notifications" | "profile";

type Post = {
  id: number;
  user: string;
  caption: string;
  music: string;
  likes: number;
  comments: number;
  emoji: string;
  liked?: boolean;
};

function App() {
  const [page, setPage] = useState<Page>("home");
  const [activeTab, setActiveTab] = useState("For You");

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Gloria",
      caption: "Welcome to Vlofie ✨💖",
      music: "Original sound - Gloria",
      likes: 124,
      comments: 18,
      emoji: "🌸",
      liked: false,
    },
    {
      id: 2,
      user: "CreativeGirl",
      caption: "Just enjoying life 🦋✨",
      music: "Good Vibes",
      likes: 856,
      comments: 67,
      emoji: "🦋",
      liked: false,
    },
    {
      id: 3,
      user: "VlofieCreator",
      caption: "POV: You made your dream app 😭💜",
      music: "Dreamy Nights",
      likes: 2450,
      comments: 201,
      emoji: "✨",
      liked: false,
    },
  ]);

  const [caption, setCaption] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Hey Gloria! 👋",
    "Welcome to Vlofie 💜",
  ]);

  const likePost = (id: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id !== id) return post;

        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
        };
      })
    );
  };

  const addPost = () => {
    if (!caption.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      user: "Gloria",
      caption,
      music: "Original sound - Gloria",
      likes: 0,
      comments: 0,
      emoji: "💖",
      liked: false,
    };

    setPosts([newPost, ...posts]);
    setCaption("");
    setPage("home");
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="app">

      <header className="top-header">
        <h1 onClick={() => setPage("home")}>Vlofie</h1>

        <button onClick={() => setPage("profile")}>
          👤
        </button>
      </header>

      <main>

        {page === "home" && (
          <div className="feed-page">

            <div className="feed-tabs">
              <button
                className={activeTab === "Following" ? "active-tab" : ""}
                onClick={() => setActiveTab("Following")}
              >
                Following
              </button>

              <button
                className={activeTab === "For You" ? "active-tab" : ""}
                onClick={() => setActiveTab("For You")}
              >
                For You
              </button>
            </div>

            <div className="video-feed">

              {posts.map((post) => (
                <div className="video-post" key={post.id}>

                  <div className="video-background">
                    <span>{post.emoji}</span>
                  </div>

                  <div className="video-info">

                    <div className="post-details">
                      <h3>@{post.user}</h3>
                      <p>{post.caption}</p>
                      <p className="music">🎵 {post.music}</p>
                    </div>

                    <div className="video-actions">

                      <button onClick={() => likePost(post.id)}>
                        <span className={post.liked ? "liked" : ""}>
                          ❤️
                        </span>
                        <small>{post.likes}</small>
                      </button>

                      <button>
                        💬
                        <small>{post.comments}</small>
                      </button>

                      <button>
                        🔖
                        <small>Save</small>
                      </button>

                      <button>
                        ↗️
                        <small>Share</small>
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

        {page === "discover" && (
          <div className="normal-page">
            <h2>Discover 🔍</h2>

            <input
              className="search"
              placeholder="Search Vlofie..."
            />

            <div className="discover-grid">
              <div>🌸</div>
              <div>🦋</div>
              <div>🎵</div>
              <div>✨</div>
              <div>💖</div>
              <div>🔥</div>
              <div>👗</div>
              <div>🎮</div>
              <div>🍰</div>
            </div>
          </div>
        )}

        {page === "create" && (
          <div className="normal-page create-page">

            <h2>Create a Vlofie ✨</h2>

            <div className="upload-box">
              <span>📸</span>
              <p>Upload a photo or video</p>
            </div>

            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <button
              className="publish-button"
              onClick={addPost}
            >
              Publish ✨
            </button>

          </div>
        )}

        {page === "messages" && (
          <div className="normal-page">

            <h2>Messages 💬</h2>

            <div className="message-box">
              {messages.map((message, index) => (
                <div className="message" key={index}>
                  {message}
                </div>
              ))}
            </div>

            <div className="send-area">
              <input
                placeholder="Write a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />

              <button onClick={sendMessage}>
                Send
              </button>
            </div>

          </div>
        )}

        {page === "notifications" && (
          <div className="normal-page">

            <h2>Activity 🔔</h2>

            <div className="notification">
              ❤️ CreativeGirl liked your Vlofie
            </div>

            <div className="notification">
              👤 You have a new follower!
            </div>

            <div className="notification">
              💬 Someone commented on your post
            </div>

          </div>
        )}

        {page === "profile" && (
          <div className="normal-page profile-page">

            <div className="profile-picture">👩🏾</div>

            <h2>Gloria ✨</h2>

            <p className="username">@gloria</p>

            <button className="edit-profile">
              Edit Profile
            </button>

            <div className="stats">

              <div>
                <strong>{posts.length}</strong>
                <span>Posts</span>
              </div>

              <div>
                <strong>120</strong>
                <span>Followers</span>
              </div>

              <div>
                <strong>80</strong>
                <span>Following</span>
              </div>

            </div>

            <h3>My Vlofies ✨</h3>

            <div className="profile-grid">
              {posts.map((post) => (
                <div key={post.id}>
                  {post.emoji}
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      <nav className="bottom-nav">

        <button onClick={() => setPage("home")}>
          <span>🏠</span>
          <small>Home</small>
        </button>

        <button onClick={() => setPage("discover")}>
          <span>🔍</span>
          <small>Discover</small>
        </button>

        <button
          className="create-nav"
          onClick={() => setPage("create")}
        >
          ➕
        </button>

        <button onClick={() => setPage("messages")}>
          <span>💬</span>
          <small>Inbox</small>
        </button>

        <button onClick={() => setPage("notifications")}>
          <span>🔔</span>
          <small>Alerts</small>
        </button>

      </nav>

    </div>
  );
}

export default App;
