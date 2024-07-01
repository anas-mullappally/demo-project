import { auth } from "@/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser,
} from "firebase/auth";
import { create } from "zustand";
import { User,UserStore } from "../types/types";


export const userStore = create<UserStore>((set) => ({
  user: null,
  // setUser: (user) => set({ user }),
  signOut: () => set({ user: null }),
  googleSignIn: async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const firebaseUser: FirebaseUser = result.user;
      console.log(firebaseUser.photoURL);

      const user: User = {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || "",
        email: firebaseUser.email || "",
        image: firebaseUser.photoURL || "",
      };
      set({ user });
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  },
}));

export const demoStore = create(() => ({
  videos: [
    {
      id: 1,
      user: {
        name: "Sujithsagar Dj",
      },
      title: "Manipal community connect by Sujith",
      link: "https://www.youtube.com/embed/N-Z8eCYZod8?si=yX_OUsuSUF3GzXjS",
      date: "MAY 05 2024",
      likes: [11, 31, 41, 889],
      comments: [],
    },
    {
      id: 2,
      user: {
        name: "Ravi Kumar",
      },
      title: "Women's Day special wishes",
      link: "https://www.youtube.com/embed/N-Z8eCYZod8?si=yX_OUsuSUF3GzXjS",
      date: "MAR 09 2024",
      likes: [12, 32, 34, 2, 0],
      comments: [],
    },
    {
      id: 3,
      user: {
        name: "Kumara Swami ",
      },
      title: "Women's Day wishes",
      link: "https://www.youtube.com/embed/N-Z8eCYZod8?si=yX_OUsuSUF3GzXjS",
      date: "MAR 09 2024",
      likes: [12, 32, 34, 2, 0, 5, 443, 3443, 24],
      comments: [],
    },
  ],
  blogs: [
    {
      id: 11,
      user: {
        name: "Manipal Hospitals",
      },
      date: "MAY 12 2023",
      title: "Arthritis - Joint Pain Worst at Night or Early Morning",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/posts/645e97b35f42135f2145048f/blog.webp",
      likes: [12, 31, 12312, 2313, 21],
      comments: [12, 1233, 213],
    },
    {
      id: 12,
      user: {
        name: "Indranil Roy Choudhury",
      },
      date: "MAY 12 2023",
      title: "Neighborhood Connect -A Game changer",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/neighborhood-connect--a-game-changer.webp",
      likes: [12, 31],
      comments: [213],
    },
    {
      id: 13,
      user: {
        name: "Manipal Hospitals",
      },
      date: "JULY 11 2023",
      title: "Monsoon Woes 2023: Infections to watch out for",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/posts/64acffa7f034c6947ac968e9/blog.webp",
      likes: [21],
      comments: [],
    },
    {
      id: 14,
      user: {
        name: "Manipal Hospitals",
      },
      date: "JUN 29 2023",
      title: "Celebrating the Healing: National Doctor’s Day in India",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/posts/649cfe1bfdf3566e61d5b6d2/blog.webp",
      likes: [12, 31, 1, 23, 12, 23, 13, 21],
      comments: [12, 12, 3, 3, 2, 1, 12, 3],
    },
  ],
  discussions: [
    {
      id: 21,
      title: "The Med Talk: A Conversation on Cancer Awareness",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/65dd83cdbbc427a7b66a5994-cancer1-the-med-talk-a-conversation-on-cancer-awareness.webp",
      participant: 10,
      lastUpdatedOn: "FEB 28 2024",
    },
    {
      id: 22,
      title:
        "Healthy Brain Corresponds To A Healthy Heart? The He’art’ Of Living Healthy",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/forums/645e6e375f42135f2144f16f/image.webp",
      participant: 2,
      lastUpdatedOn: "FEB 04 2024",
    },
    {
      id: 23,
      title: "Water Scarcity- Bengaluru",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/65f1846d01eb8f5de3ed472a-doha-water-shortage-debate-water-scarcity--bengaluru.webp",
      participant: 5,
      lastUpdatedOn: "MAR 19 2024",
    },
    {
      id: 24,
      title: "How Can Modern Women Combat An Ancient Disease- PCOS?",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/forums/645e6c375f42135f2144f058/image.webp",
      participant: 23,
      lastUpdatedOn: "AUG 29 2023",
    },
  ],
  events: [
    {
      id: 41,
      title: "Ageless Elegance: Senior Style Takes Center Stage!",
      image:
        "https://www.manipalcommunityconnect.in/_next/image?url=https%3A%2F%2Fmhcp-prod.s3.us-west-2.amazonaws.com%2F667bfce4c646b777c3411509-screenshot-2024-03-21-175211-ageless-elegance-senior-style-takes-center-stage.png&w=3840&q=75",
      date: "JUN 29 2024",
      likes: [11, 31],
      comments: [],
    },
    {
      id: 42,
      title: "Know your doctor- MH Hebbal - Orthopedic Health",
      image:
        "https://www.manipalcommunityconnect.in/_next/image?url=https%3A%2F%2Fmhcp-prod.s3.us-west-2.amazonaws.com%2F667bfce4c646b777c3411509-screenshot-2024-03-21-175211-ageless-elegance-senior-style-takes-center-stage.png&w=3840&q=75",
      date: "JUL 04 2024",
      likes: [],
      comments: [],
    },
  ],
  featured: [
    {
      id: 51,
      title: "Dengue- Tips to keep youself safe",
      date: "JUN 27 2023",
      type: "blog",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/posts/649aa108fdf3566e61d5afa7/blog.webp",
    },
    {
      id: 52,
      title:
        "To eat and not overeat? Why should you speak to an expert before trying new diets?",
      date: "JUN 18 2023",
      type: "discussion",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/forums/645e6d4e5f42135f2144f117/image.webp",
    },
    {
      id: 53,
      title: "Manipal News Bulletin- Spinal Tumors",
      date: "JUN 25 2023",
      type: "testimonial",
      image:
        "https://mhcp-prod.s3.us-west-2.amazonaws.com/posts/649aa108fdf3566e61d5afa7/blog.webp",
    },
  ],
}));
