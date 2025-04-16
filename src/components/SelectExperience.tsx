import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectExperienceProps {
  value: string;
  onChange: (value: string) => void;
}

export function SelectExperience({ value, onChange }: SelectExperienceProps) {
  return (
    <Select value={value} onValueChange={onChange} required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione sua experiencia" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Anos de experiencia</SelectLabel>
          <SelectItem value="menos-de-10">Menos de 1</SelectItem>
          <SelectItem value="1-2">1-2</SelectItem>
          <SelectItem value="3-5">3-5</SelectItem>
          <SelectItem value="6-10">6-10</SelectItem>
          <SelectItem value="mais-de-10">Mais de 10 anos</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
