//Describes Note model
export interface Note {
  id: string;
  name: string;
  createdAt: string;
  category: number;
  content: string;
  dates: string[];
  isActive: boolean;
}
