export interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
}

export interface ForumPost {
  id: number;
  title: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
  views: number;
  likes: number;
  comments: Comment[];
  tags: string[];
}

export const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Sharing My Zero-Waste Life: Reduced 90% of Waste in One Month",
    author: "GreenLiving",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    content: "Hello everyone! I want to share my recent month of zero-waste living practice. By using reusable containers, bringing my own shopping bags, and reducing takeout, I successfully reduced my monthly waste by 90%. The biggest gain is discovering how simple life can be, and it saves money too!",
    time: "2 hours ago",
    views: 1523,
    likes: 234,
    tags: ["Zero Waste", "Lifestyle"],
    comments: [
      {
        id: 1,
        author: "EcoNewbie",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
        content: "That's amazing! Can you share specific methods? I also want to try reducing waste.",
        time: "1 hour ago",
        likes: 12
      },
      {
        id: 2,
        author: "GreenLiving",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
        content: "Of course! The most important things are: 1. Bring your own bags and containers when shopping 2. Choose bulk foods 3. Use glass bottles instead of plastic bottles 4. Make your own cleaning products. It might feel a bit uncomfortable at first, but it becomes a habit after a week!",
        time: "45 minutes ago",
        likes: 28
      }
    ]
  },
  {
    id: 2,
    title: "Urban Balcony Gardening Guide: Food Self-Sufficiency in Small Spaces",
    author: "BalconyFarmer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    content: "You can grow vegetables even living in a city! I grew over 10 types of vegetables including tomatoes, cucumbers, and lettuce on my 5 square meter balcony. Not only is it healthier to eat, but it also reduces my carbon footprint. Sharing some experiences: choose varieties suitable for balconies, make good use of vertical space, and take pest control measures.",
    time: "5 hours ago",
    views: 2341,
    likes: 456,
    tags: ["Urban Agriculture", "Sustainable Living"],
    comments: [
      {
        id: 3,
        author: "CityGardener",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
        content: "I'm also growing vegetables on my balcony! I found that vegetables I grow myself taste so much better than those from the supermarket, and it's very fulfilling.",
        time: "4 hours ago",
        likes: 15
      },
      {
        id: 4,
        author: "BeginnerGardener",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
        content: "What should beginners start with for easy success?",
        time: "3 hours ago",
        likes: 8
      },
      {
        id: 5,
        author: "BalconyFarmer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
        content: "I suggest starting with lettuce, green onions, and mint! They grow fast, don't need much care, and are perfect for beginners.",
        time: "2 hours ago",
        likes: 20
      }
    ]
  },
  {
    id: 3,
    title: "Real Carbon Emissions Comparison: Electric vs. Gasoline Vehicles",
    author: "DataAnalyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
    content: "Seeing a lot of discussion about whether electric vehicles are truly environmentally friendly, I've compiled some authoritative data. Considering battery production, power sources, and vehicle lifespan, electric vehicles have 40-60% lower full lifecycle carbon emissions than gasoline vehicles. Of course, this figure is even better if the power source is renewable energy.",
    time: "1 day ago",
    views: 4521,
    likes: 678,
    tags: ["New Energy", "Carbon Emissions"],
    comments: [
      {
        id: 6,
        author: "TechEnthusiast",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
        content: "Very objective analysis! Many people only see the pollution from battery production but ignore the continuous emissions from gasoline vehicles during use.",
        time: "20 hours ago",
        likes: 34
      }
    ]
  },
  {
    id: 4,
    title: "My Upcycling Diary: Giving Old Items New Life",
    author: "CraftExpert",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
    content: "Sharing some of my recent upcycling projects: turning old T-shirts into shopping bags, wine bottles into vases, cardboard boxes into storage boxes... Every transformation is very fulfilling, and it saves money while being environmentally friendly. Welcome everyone to share creative ideas!",
    time: "2 days ago",
    views: 1876,
    likes: 321,
    tags: ["Recycling", "DIY Crafts"],
    comments: [
      {
        id: 7,
        author: "CreativeWorkshop",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
        content: "That's great! I love doing these too. Last week I just turned old jeans into an apron, and the result was super good!",
        time: "1 day ago",
        likes: 18
      },
      {
        id: 8,
        author: "EcoHelper",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=10",
        content: "Can you make a tutorial? I really want to learn how to turn T-shirts into shopping bags.",
        time: "1 day ago",
        likes: 25
      }
    ]
  },
  {
    id: 5,
    title: "Community Cleanup Reflection: Everyone Can Make a Difference",
    author: "CommunityVolunteer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=11",
    content: "Participated in the community beach cleanup activity over the weekend and collected over 50 kilograms of trash in two hours, most of which was plastic products. Although it was tiring, seeing the clean beach was very fulfilling. I hope more people can participate in environmental actions!",
    time: "3 days ago",
    views: 2134,
    likes: 445,
    tags: ["Volunteer Activities", "Ocean Protection"],
    comments: [
      {
        id: 9,
        author: "OceanGuardian",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=12",
        content: "Thank you for your contribution! I also often participate in these activities, and I'm always shocked by the amount of trash on the beach each time.",
        time: "2 days ago",
        likes: 22
      }
    ]
  }
];
