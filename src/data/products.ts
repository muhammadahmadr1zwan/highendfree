export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: number;
  tier: "Starter" | "Pro" | "Elite";
  agent: string;
};

export const products: Product[] = [
  {
    id: "p-1001",
    title: "Wireless Earbuds with Noise Cancellation",
    image: "https://www.bing.com/th?id=OPHS.5nNDcYVgPYhsFA474C474&o=5&pid=21.1&w=189&h=189&qlt=100&dpr=1",
    price: "$39.99",
    rating: 4.8,
    tier: "Pro",
    agent: "@Ava",
  },
  {
    id: "p-1002",
    title: "4K Action Camera Waterproof",
    image: "https://www.mytrendyphone.co.uk/images2/Sports-SJ60-Waterproof-4K-WiFi-Action-Camera-Black-28032018-02-p.jpg",
    price: "$59.00",
    rating: 4.6,
    tier: "Elite",
    agent: "@Max",
  },
  {
    id: "p-1003",
    title: "Smart LED Light Strip (16ft)",
    image: "https://i5.walmartimages.com/asr/a20ade70-753e-4ab7-8f06-329ef636a424.d440b51bebdbf33e38fba274696f262f.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    price: "$24.50",
    rating: 4.7,
    tier: "Starter",
    agent: "@Luna",
  },
  {
    id: "p-1004",
    title: "Ergonomic Wireless Mouse",
    image: "https://www.takeaseat.sg/wp-content/uploads/2021/03/Logitech-MX-Ergo-Vertical-Wireless-Ergonomic-Mouse-3.jpg",
    price: "$19.99",
    rating: 4.5,
    tier: "Starter",
    agent: "@Ava",
  },
  {
    id: "p-1005",
    title: "Portable Mini Projector",
    image: "https://i5.walmartimages.com/asr/d959cc85-f721-4b8d-aed8-6c8f907c038b.e1a8dcb89dd9d0a59e9729f943f32203.jpeg",
    price: "$89.00",
    rating: 4.4,
    tier: "Pro",
    agent: "@Max",
  },
  {
    id: "p-1006",
    title: "Home Security Camera (1080p)",
    image: "https://files08.oaiusercontent.com/file-EREScpLeAH329Seks1g1EC?se=2025-08-08T01%3A18%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dimage-8f337c4c-eb85-4298-abc1-2a5274c65655.png&sig=HD0uhc6PTrhV7qWt98r09oS45/4Zv5aYkEnJFnu/41c%3D",
    price: "$32.99",
    rating: 4.3,
    tier: "Pro",
    agent: "@Luna",
  },
];
