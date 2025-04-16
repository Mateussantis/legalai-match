import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectInterestProps {
  value: string;
  onChange: (value: string) => void;
}

export function SelectInterest({ value, onChange }: SelectInterestProps) {
  return (
    <Select value={value} onValueChange={onChange} required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione seu interesse" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Area de interesse</SelectLabel>
          <SelectItem value="Tecnologia">Tecnologia</SelectItem>
          <SelectItem value="Marketing">Marketing</SelectItem>
          <SelectItem value="Financeiro">Financeiro</SelectItem>
          <SelectItem value="RH">RH</SelectItem>
          <SelectItem value="Jurídico">Jurídico</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
