"use client"
import { useState, useEffect } from "react";

interface Comment {
  id: number;
  name: string;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (!name || !text) {
      alert("Both name and comment are required!");
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      text,
    };

    setComments([...comments, newComment]);
    setName("");
    setText("");
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Your Comment"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Comment
      </button>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-200 pb-2 mb-2"
            >
              <p className="font-medium">{comment.name}</p>
              <p>{comment.text}</p>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-red-500 text-sm mt-2"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
