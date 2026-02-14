export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  icon: 'shield' | 'lock' | 'refresh';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: 'check' | 'users' | 'trending-up' | 'briefcase';
}
