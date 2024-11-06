export interface SelectProps {
  options: string[];
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  value: string;
  label: string;
}
