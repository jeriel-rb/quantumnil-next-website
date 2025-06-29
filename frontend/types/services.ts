export interface ServiceTab {
  label: string;
  subcategories?: {
    title: string;
    description: string;
  }[];
}

export interface TabCardProps {
  title: string;
  description: string;
}
