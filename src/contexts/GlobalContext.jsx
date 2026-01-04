import { createContext, useCallback, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Industrial Bearings",
      category: "maintenance",
      price: 2500,
      image: "⚙️",
      description: "High-quality certified bearings",
    },
    {
      id: 2,
      name: "Steel Pipes",
      category: "maintenance",
      price: 5000,
      image: "🔩",
      description: "Premium quality pipes & fittings",
    },
    {
      id: 3,
      name: "MCB Relay Board",
      category: "electrical",
      price: 1800,
      image: "⚡",
      description: "Advanced electrical components",
    },
    {
      id: 4,
      name: "Cable Glands",
      category: "electrical",
      price: 800,
      image: "🔌",
      description: "Industrial cable management",
    },
    {
      id: 5,
      name: "Pressure Gauges",
      category: "electrical",
      price: 3200,
      image: "📊",
      description: "High-precision measurement gauges",
    },
    {
      id: 6,
      name: "Welding Rods",
      category: "consumables",
      price: 450,
      image: "🔥",
      description: "Premium welding consumables",
    },
    {
      id: 7,
      name: "Cutting Wheels",
      category: "consumables",
      price: 280,
      image: "✂️",
      description: "Industrial cutting solutions",
    },
    {
      id: 8,
      name: "O-Rings & Seals",
      category: "maintenance",
      price: 120,
      image: "⭕",
      description: "Precision sealing components",
    },
  ]);

  const addToCart = useCallback((product) => {
    setCartItems((prev) => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((_, i) => i !== id));
  }, []);

  const login = useCallback((userData) => {
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = {
    user,
    setUser,
    cartItems,
    setCartItems,
    products,
    addToCart,
    removeFromCart,
    login,
    logout,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
