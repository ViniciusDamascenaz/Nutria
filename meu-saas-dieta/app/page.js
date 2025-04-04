"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { User, Calendar, Weight, Ruler, Target, Activity, Utensils } from "lucide-react";

export default function DietSaaS() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", age: "", weight: "", height: "", goal: "", semanal_activity: "", gender: "", activity: "", preferredFoods: "", avoidedFoods: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const progressValues = [0, 25, 50, 75, 100];
  const activityLevels = [
    { label: "Sedentário", value: "Sedentário" },
    { label: "Leve", value: "Leve" },
    { label: "Moderado", value: "Moderado" },
    { label: "Intenso", value: "Intenso" },
    { label: "Muito Intenso", value: "Muito-intenso" },
  ];
  const genders = [
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" },
  ];

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-100">
      <Progress value={progressValues[step]} className="w-2/3 mb-6 bg-gray-300 [&>div]:bg-green-500" />
      
      {step === 0 && (
        <Card className="p-8 max-w-lg text-center shadow-xl rounded-2xl bg-white">
          <h1 className="text-4xl font-bold text-gray-800">Alcance seus objetivos com um plano alimentar feito para você!</h1>
          <p className="mt-4 text-gray-600">Receba um plano alimentar personalizado baseado nas suas métricas corporais e objetivos.</p>
          <Button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setStep(1)}>
            Começar
          </Button>
        </Card>
      )}

      {step === 1 && (
        <Card className="p-6 max-w-lg shadow-xl rounded-2xl bg-white">
          <h2 className="text-xl font-bold text-gray-700">Informações Pessoais</h2>
          <CardContent className="space-y-4 mt-4">
            <div className="flex items-center border rounded-lg p-2">
              <User className="text-gray-500 mr-2" />
              <Input name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} className="border-none" />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Calendar className="text-gray-500 mr-2" />
              <Input name="age" placeholder="Sua Idade" type="number" value={formData.age} onChange={handleChange} className="border-none" />
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setStep(2)}>
              Próximo
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="p-6 max-w-lg shadow-xl rounded-2xl bg-white">
          <h2 className="text-xl font-bold text-gray-700">Informações Físicas</h2>
          <CardContent className="space-y-4 mt-4">
            <div className="flex items-center border rounded-lg p-2">
              <Weight className="text-gray-500 mr-2" />
              <Input name="weight" placeholder="Seu Peso (kg)" type="number" value={formData.weight} onChange={handleChange} className="border-none" />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Ruler className="text-gray-500 mr-2" />
              <Input name="height" placeholder="Sua Altura (cm)" type="number" value={formData.height} onChange={handleChange} className="border-none" />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Activity className="text-gray-500 mr-2" />
              <Input name="frequency" placeholder="Atividade Semanal(em dias)" type="number" value={formData.semanal_activity} onChange={handleChange} className="border-none" />
            </div>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {formData.gender ? `Atividade: ${formData.gender}` : "Selecionar Gênero"}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Gênero de nascença</h2>
                <RadioGroup defaultValue={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  {genders.map(({ label, value }) => (
                    <div key={value} className="flex items-center space-x-2 mb-3">
                      <RadioGroupItem value={value} id={value} />
                      <Label htmlFor={value} className="font-medium">{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <DrawerClose asChild>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Confirmar</Button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {formData.activity ? `Atividade: ${formData.activity}` : "Selecionar Nível de Atividade"}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Nível de Atividade Física</h2>
                <RadioGroup defaultValue={formData.activity} onValueChange={(value) => setFormData({ ...formData, activity: value })}>
                  {activityLevels.map(({ label, value }) => (
                    <div key={value} className="flex items-center space-x-2 mb-3">
                      <RadioGroupItem value={value} id={value} />
                      <Label htmlFor={value} className="font-medium">{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <DrawerClose asChild>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Confirmar</Button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setStep(3)}>
              Próximo
            </Button>
          </CardContent>
        </Card>
      )}
      {step === 3 && (
        <Card className="p-6 max-w-lg shadow-xl rounded-2xl bg-white">
          <h2 className="text-xl font-bold text-gray-700">Metas e objetivos</h2>
          <CardContent className="space-y-4 mt-4">
            <div className="flex items-center border rounded-lg p-2">
              <User className="text-gray-500 mr-2" />
              <Input name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} className="border-none" />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Calendar className="text-gray-500 mr-2" />
              <Input name="age" placeholder="Sua Idade" type="number" value={formData.age} onChange={handleChange} className="border-none" />
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setStep(4)}>
              Próximo
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
