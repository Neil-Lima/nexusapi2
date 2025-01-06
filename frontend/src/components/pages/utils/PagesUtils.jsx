'use client';
export const pageData = {
  name: "TechInnovators",
  category: "Technology & Innovation",
  coverPhoto: "https://picsum.photos/1200/400",
  profilePhoto: "https://picsum.photos/200",
  followers: 25000,
  likes: 18000,
  posts: 350,
  description: "Exploring the frontiers of technology and innovation. Join us on this exciting journey to the future!",
  admin: "John Doe",
  createdAt: "01/01/2022",
  lastPost: "15/05/2023",
  engagement: "85%",
};

export const posts = [
  { 
    id: 1, 
    type: 'text', 
    content: 'We are excited to announce our next tech event! Stay tuned for more details.', 
    likes: 250, 
    comments: 45, 
    shares: 30 
  },
  { 
    id: 2, 
    type: 'image', 
    content: 'https://picsum.photos/800/600', 
    caption: 'Our team working hard on the new AI project!', 
    likes: 500, 
    comments: 78, 
    shares: 65 
  },
  { 
    id: 3, 
    type: 'video', 
    content: 'https://www.example.com/video.mp4', 
    caption: 'Check out our new augmented reality demo!', 
    likes: 750, 
    comments: 120, 
    shares: 95 
  },
  { 
    id: 4, 
    type: 'text', 
    content: 'New article about AI trends for 2023 is now available on our blog!', 
    likes: 180, 
    comments: 32, 
    shares: 25 
  }
];

export const comments = [
  { 
    id: 1, 
    author: 'Alice Johnson', 
    avatar: 'https://picsum.photos/50/50?random=1', 
    content: 'This is amazing! Cannot wait for the event.', 
    likes: 15 
  },
  { 
    id: 2, 
    author: 'Bob Smith', 
    avatar: 'https://picsum.photos/50/50?random=2', 
    content: 'Your AI technology looks promising!', 
    likes: 8 
  },
  { 
    id: 3, 
    author: 'Carol Davis', 
    avatar: 'https://picsum.photos/50/50?random=3', 
    content: 'Loved the AR demo. When will it be released?', 
    likes: 12 
  }
];

export const followers = [
  { 
    id: 1, 
    name: 'John Doe', 
    avatar: 'https://picsum.photos/50/50?random=4', 
    role: 'Full Stack Developer' 
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    avatar: 'https://picsum.photos/50/50?random=5', 
    role: 'UX Designer' 
  },
  { 
    id: 3, 
    name: 'Mike Johnson', 
    avatar: 'https://picsum.photos/50/50?random=6', 
    role: 'Product Manager' 
  },
  { 
    id: 4, 
    name: 'Emily Brown', 
    avatar: 'https://picsum.photos/50/50?random=7', 
    role: 'AI Engineer' 
  }
];

export const fetchPages = () => {
  return [
    {
      id: 1,
      name: "Advanced Technology",
      description: "Exploring the latest technological innovations",
      coverPhoto: "https://picsum.photos/800/400?random=1",
      likes: 1500,
      comments: 230
    },
    {
      id: 2,
      name: "Exotic Travel",
      description: "Discover amazing destinations around the world",
      coverPhoto: "https://picsum.photos/800/400?random=2",
      likes: 2300,
      comments: 450
    },
    {
      id: 3,
      name: "Gourmet Cuisine",
      description: "Sophisticated recipes for food lovers",
      coverPhoto: "https://picsum.photos/800/400?random=3",
      likes: 1800,
      comments: 320
    }
  ];
};
