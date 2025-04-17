import { useState } from "react";
import type { FormData } from "../types";
import { SelectExperience } from "./SelectExperience";
import { SelectInterest } from "./SelectInterest";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  onSubmit: (data: FormData) => void;
}

export default function Form({ onSubmit }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    interest: "",
    experience: "",
    location: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleExperienceChange(value: string) {
    setFormData({ ...formData, experience: value });
  }

  function handleInterestChange(value: string) {
    setFormData({ ...formData, interest: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-sm shadow-sm p-4 border border-gray-200"
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <div className="w-full flex flex-col gap-4">
          <Input
            name="name"
            placeholder="Nome"
            className="w-full"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <Input
            name="location"
            className="w-full"
            placeholder="Localização"
            onChange={handleChange}
            value={formData.location}
            required
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <SelectInterest
            onChange={handleInterestChange}
            value={formData.interest}
          />
          <SelectExperience
            value={formData.experience}
            onChange={handleExperienceChange}
          />
        </div>
      </div>
      <Button className="w-full mt-4 md:w-40 bg-blue-600" type="submit">Buscar Conexões</Button>
    </form>
  );
}
