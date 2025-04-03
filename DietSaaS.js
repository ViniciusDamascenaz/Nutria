"use client";  // Adicione essa linha no topo

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User, Calendar, Weight, Ruler, Target, Activity, Utensils } from "lucide-react";

export default function DietSaaS() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", age: "", weight: "", height: "", goal: "", activity: "", preferredFoods: "", avoidedFoods: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const progressValues = [0, 25, 50, 75, 100];

  return (
    <div className="flex flex-col items-center p-8">
      <Progress value={progressValues[step]} className="w-2/3 mb-6" />
      
      {step === 0 && (
        <Card className="p-8 max-w-lg text-center shadow-xl rounded-2xl">
          <h1 className="text-3xl font-bold text-gray-800">Planejador de Dieta com IA</h1>
          <p className="mt-4 text-gray-600">Receba um plano alimentar personalizado baseado nas suas métricas corporais e objetivos.</p>
          <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setStep(1)}>
            Começar
          </Button>
        </Card>
      )}

      {step === 1 && (
        <Card className="p-6 max-w-lg shadow-xl rounded-2xl">
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
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setStep(2)}>
              Próximo
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="p-6 max-w-lg shadow-xl rounded-2xl">
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
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setStep(3)}>
              Próximo
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="p-6 max-w-lg shadow-xl rounded-2xl">
          <h2 className="text-xl font-bold text-gray-700">Objetivos e Estilo de Vida</h2>
          <CardContent className="space-y-4 mt-4">
            <div className="flex items-center border rounded-lg p-2">
              <Target className="text-gray-500 mr-2" />
              <Input name="goal" placeholder="Seu Objetivo (ex: perder peso)" value={formData.goal} onChange={handleChange} className="border-none" />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Activity className="text-gray-500 mr-2" />
              <Input name="activity" placeholder="Nível de Atividade (ex: sedentário, ativo)" value={formData.activity} onChange={handleChange} className="border-none" />
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setStep(4)}>
              Próximo
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="p-6 max-w-lg shadow-xl rounded-2xl">
          <h2 className="text-xl font-bold text-gray-700">Preferências Alimentares</h2>
          <CardContent className="space-y-4 mt-4">
            <div className="flex items-center border rounded-lg p-2">
              <Utensils className="text-gray-500 mr-2" />
              <Input name="preferredFoods" placeholder="Comidas que você gosta" value={formData.preferredFoods} onChange={handleChange} className="border-none" />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Utensils className="text-gray-500 mr-2" />
              <Input name="avoidedFoods" placeholder="Comidas que você quer evitar" value={formData.avoidedFoods} onChange={handleChange} className="border-none" />
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => console.log(formData)}>
              Gerar Minha Dieta
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
